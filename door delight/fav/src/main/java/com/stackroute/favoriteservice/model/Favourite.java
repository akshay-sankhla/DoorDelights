package com.stackroute.favoriteservice.model;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.List;

/***
 * Entity/Document class for creating entity/document in database using MongoRepository with no-arg and all-args
 * constructor and getters and setters.
 */
@Document(collection = "favourite")
public class Favourite {
    @Id
    private String emailid;
    private List<Restaurant> restaurant;

    public Favourite() {
    }

    /***
     * All-args constructor for creating entity/document object with arguments.
     * @param emailid - type String variable to represent Id attribute for documents in mongodb collection and stores
     *              unique emailid of user received from frontend.
     * @param restaurant -  type List of type Restaurant variable to represent favorite list of News for user with emailid given
     *             by emailid param.
     */
    public Favourite(String emailid, List<Restaurant> restaurant) {
        this.emailid = emailid;
        this.restaurant = restaurant;
    }

    public String getEmailid() {
        return emailid;
    }

    public void setEmailid(String emailid) {
        this.emailid = emailid;
    }

    public List<Restaurant> getRestaurant() {
        return restaurant;
    }

    public void setRestaurant(List<Restaurant> restaurant) {
        this.restaurant = restaurant;
    }

    @Override
    public String toString() {
        return "Favourite{" +
                "emailid='" + emailid + '\'' +
                ", restaurant=" + restaurant +
                '}';
    }
}
