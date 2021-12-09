package com.stackroute.favoriteservice.service;

import com.stackroute.favoriteservice.exception.FavouriteAlreadyExistsException;
import com.stackroute.favoriteservice.exception.FavouriteListDoesNotExistsException;
import com.stackroute.favoriteservice.model.Favourite;
import com.stackroute.favoriteservice.model.Restaurant;

import java.util.List;

/***
 * Interface for service class containing template for providing business logic required in controller class.
 */
public interface RestaurantService {
    public Favourite addToFavourites(Favourite favourite) throws FavouriteAlreadyExistsException;
    public Favourite removeFromFavourites(String emailid, String id) throws FavouriteListDoesNotExistsException;
    public List<Restaurant> getFavouriteRestaurant(String emailid) throws FavouriteListDoesNotExistsException;
}
