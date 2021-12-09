package com.stackroute.userservice.service;

import com.stackroute.userservice.entity.User;
import com.stackroute.userservice.exception.IncorrectPasswordException;
import com.stackroute.userservice.exception.UserAlreadyExistsException;
import com.stackroute.userservice.exception.UserNotFoundException;
import com.stackroute.userservice.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Map;

@Service
public class UserServiceImpl implements UserService {
    @Autowired
    UserRepository userRepository;

    @Autowired
    JwtTokenGeneratorImpl jwtTokenGenerator;

    @Override
    public User registerUser(User user) throws UserAlreadyExistsException {
        final boolean existsById = this.userRepository.existsById(user.getEmailid());

        if (existsById) {
            throw new UserAlreadyExistsException("User already exists");
        }
        return this.userRepository.save(user);
    }

    @Override
    public Map<String, String> authenticateUser(User user) throws UserNotFoundException, IncorrectPasswordException {
        final boolean existsById = this.userRepository.existsById(user.getEmailid());
        if (!existsById) {
            throw new UserNotFoundException("User Does not exists with the given email");
        }

        final User registerUser = this.userRepository.findById(user.getEmailid()).get();

        if (!registerUser.getPassword().equals(user.getPassword())) {
            throw new IncorrectPasswordException("Password Mismatch");
        }

        Map<String, String> map = jwtTokenGenerator.generateToken(user);

        map.put("emailid", user.getEmailid());

        map.put("city", getLocation(user));

        return map;
    }

    @Override
    public String getLocation(User user) {
        User registerUser = this.userRepository.findById(user.getEmailid()).get();
        return registerUser.getCity();
    }
}
