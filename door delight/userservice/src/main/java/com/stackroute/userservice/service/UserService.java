package com.stackroute.userservice.service;

import com.stackroute.userservice.entity.User;
import com.stackroute.userservice.exception.IncorrectPasswordException;
import com.stackroute.userservice.exception.UserAlreadyExistsException;
import com.stackroute.userservice.exception.UserNotFoundException;

import java.util.Map;

public interface UserService {

    User registerUser(User user) throws UserAlreadyExistsException;
    Map<String,String> authenticateUser(User user) throws UserNotFoundException, IncorrectPasswordException;


    String getLocation(User user);
}
