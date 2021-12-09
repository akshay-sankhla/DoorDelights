package com.stackroute.userservice.controller;

import com.stackroute.userservice.entity.User;
import com.stackroute.userservice.exception.IncorrectPasswordException;
import com.stackroute.userservice.exception.UserAlreadyExistsException;
import com.stackroute.userservice.exception.UserNotFoundException;
import com.stackroute.userservice.repository.UserRepository;
import com.stackroute.userservice.service.JwtTokenGeneratorImpl;
import com.stackroute.userservice.service.UserServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import springfox.documentation.swagger2.annotations.EnableSwagger2;

import java.util.Map;

@RestController
@CrossOrigin
@EnableSwagger2
@RequestMapping("/api/user")
public class UserController {

    @Value("${jwt.secret.key}")
    private String secretKey;
    @Autowired
    JwtTokenGeneratorImpl jwtTokenGenerator;

    @Autowired
    UserServiceImpl userService;

    @Autowired
    UserRepository userRepository;

    @PostMapping("/register")
    public ResponseEntity<?> register(@RequestBody User user) {
        try {
            return ResponseEntity.status(HttpStatus.OK).body( userService.registerUser(user));
        } catch (UserAlreadyExistsException e) {
            return ResponseEntity.status(HttpStatus.CONFLICT).body( e.getMessage());

        }
    }

    @PostMapping("/login")
    public ResponseEntity<?> login(@RequestBody User user)  {
        try {
            return ResponseEntity.status(HttpStatus.OK).body(userService.authenticateUser(user));
        } catch (UserNotFoundException e) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(e.getMessage());
        } catch (IncorrectPasswordException e) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(e.getMessage());
        }

    }

    @PutMapping("/edit/{emailid}")
    public ResponseEntity<?> edit(@RequestBody User user, @PathVariable String emailid) {
        User ru = userRepository.findById(emailid).get();
        ru.setPassword(user.getPassword());
        ru.setCity(user.getCity());
        userRepository.save(ru);
        return ResponseEntity.status(HttpStatus.OK).body("");
    }

}


