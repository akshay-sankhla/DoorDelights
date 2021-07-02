package com.stackroute.userservice.entity;

import javax.persistence.Entity;
import javax.persistence.Id;

@Entity
public class User {

    @Id
    private String emailid;
    private String password;
    private String city;

    public User() {
    }

    public User(String emailid, String password, String city) {
        this.emailid = emailid;
        this.password = password;
        this.city = city;
    }

    public String getEmailid() {
        return emailid;
    }

    public void setEmailid(String emailid) {
        this.emailid = emailid;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getCity() {
        return city;
    }

    public void setCity(String city) {
        this.city = city;
    }
}
