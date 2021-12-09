package com.stackroute.userservice.service;

import com.stackroute.userservice.entity.User;

import java.util.Map;

public interface JwtTokenGenertor {

    Map<String, String> generateToken(User user);
}
