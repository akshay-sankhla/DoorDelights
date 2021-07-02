package com.stackroute.favoriteservice.controller;

import com.stackroute.favoriteservice.exception.FavouriteAlreadyExistsException;
import com.stackroute.favoriteservice.exception.FavouriteDoesNotExistsException;
import com.stackroute.favoriteservice.exception.FavouriteListDoesNotExistsException;
import com.stackroute.favoriteservice.model.Favourite;
import com.stackroute.favoriteservice.model.Restaurant;
import com.stackroute.favoriteservice.service.RestaurantService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

/***
 * Request Handler class for all requests in favorite service.
 */
@RestController
@RequestMapping("/api/fav")
public class FavouriteController {

    /***
     * RestaurantService class variable autowired for providing business logic to request handler methods.
     */
    @Autowired
    private RestaurantService restaurantService;

    /***
     * Post request mapping for '/api/v1/restaurant' endpoint handling request to add News to a users favorite list.
     * @param favourite - type Favorite object received from request body which contains email and Restaurant objects
     *                 for adding Restaurant object to favorite list of user with emailid given in JSON object.
     * @return - returns 'Http 200-OK' with complete favorite list of Restaurant for user with emailid given by emailid param
     *              if succeed to add else returns 'Http 409-CONFLICT' with failure message.
     */
    @PostMapping("/restaurant")
    public ResponseEntity<?> addToFavourites(@RequestBody Favourite favourite) {
        try{
            Favourite response = restaurantService.addToFavourites(favourite);
            return new ResponseEntity<Favourite>(response, HttpStatus.OK);
        }catch (FavouriteAlreadyExistsException exception){
            return new ResponseEntity<String>("Restaurant already present in our Favourites.",HttpStatus.CONFLICT);
        }
    }

    /***
     * Delete request mapping for '/api/v1/restaurant' endpoint handling request to remove restaurant from a users favorite list.
     * @param emailid - type String argument containing users emailid received from request parameter with key 'emailid'.
     * @param id - type String argument containing restaurant title to be removed received from request parameter with
     *              key 'id'.
     * @return - returns 'Http 200-OK' with complete favorite list of news for user with email given by emailid param
     *              if succeed to add else returns 'Http 409-CONFLICT' with failure message.
     */
    @DeleteMapping("/restaurant")
    public ResponseEntity<?> removeFromFavourites(@RequestParam String emailid, @RequestParam String id) {
        try{
            Favourite response = restaurantService.removeFromFavourites(emailid, id);
            return new ResponseEntity<Favourite>(response, HttpStatus.OK);
        }catch(FavouriteDoesNotExistsException exception) {
            return new ResponseEntity<String>("Restaurant does not exists.", HttpStatus.CONFLICT);
        }catch(FavouriteListDoesNotExistsException exception) {
            return new ResponseEntity<String>("Favourite list does not exists.", HttpStatus.CONFLICT);
        }
    }

    /***
     * Get request mapping for '/api/v1/restaurant' endpoint handling request to fetch favorite restaurant list for a user
     * specified by parameter emailid.
     * @param emailid - type String argument containing users emailid received from request parameter with key 'emailid'.
     * @return - returns 'Http 200-OK' with complete favorite list of restaurant for user with email given by email param
     *              if succeed to add else returns 'Http 409-CONFLICT' with failure message.
     */
    @GetMapping("/restaurant")
    public ResponseEntity<?> getFavouriteRestaurant(@RequestParam String emailid){
        try {
            List<Restaurant> response = restaurantService.getFavouriteRestaurant(emailid);
            return new ResponseEntity<List<Restaurant>>(response, HttpStatus.OK);
        }catch (FavouriteListDoesNotExistsException exception){
            return new ResponseEntity<>("Favourite List does not exists.",HttpStatus.CONFLICT);
        }
    }
}
