package com.stackroute.userservice.service;

import com.stackroute.userservice.entity.User;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;

import java.io.UnsupportedEncodingException;
import java.util.Date;
import java.util.HashMap;
import java.util.Map;


@Service
public class JwtTokenGeneratorImpl implements JwtTokenGenertor {


    @Override
    public Map<String, String> generateToken(User user) {
        String token = null;
        Map<String , String > map = new HashMap<>();

            token = Jwts.builder().setSubject(user.getEmailid())
                    .setIssuer("FoodieApp")
                    .setIssuedAt(new Date())
                    .signWith(SignatureAlgorithm.HS256,"mysecretkey")
                    .compact();

        map.put("token", token);
        return  map;
    }


}