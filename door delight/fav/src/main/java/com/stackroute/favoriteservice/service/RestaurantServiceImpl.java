package com.stackroute.favoriteservice.service;

import com.stackroute.favoriteservice.exception.FavouriteAlreadyExistsException;
import com.stackroute.favoriteservice.exception.FavouriteDoesNotExistsException;
import com.stackroute.favoriteservice.exception.FavouriteListDoesNotExistsException;
import com.stackroute.favoriteservice.model.Favourite;
import com.stackroute.favoriteservice.model.Restaurant;
import com.stackroute.favoriteservice.repository.RestaurantRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

/***
 * Service class for creating service bean in order to provide business logic for request handlers.
 */
@Service
public class RestaurantServiceImpl implements RestaurantService {

    /***
     * type RestaurantRepository variable autowired to provide repository objects.
     */
    @Autowired
    private RestaurantRepository restaurantRepository;

    /***
     * providing business logic for addToFavourites request handler in FavouriteController class.
     * @param favourite - Favorite type object received containing emailid and News to be added to favorite list of
     *                 user with email provided by attribute 'emailid'
     * @return - returns favorite list of user with emailid received from request handler in case of success.
     * @throws FavouriteAlreadyExistsException - exception thrown in case if the restaurant object received from request
     *                  handler already exists in user's favorite list.
     */
    @Override
    public Favourite addToFavourites(Favourite favourite) throws FavouriteAlreadyExistsException {
        Optional<Favourite> favouriteResult = restaurantRepository.findById(favourite.getEmailid());
        if(favouriteResult.isPresent()) {
            List<Restaurant> restaurantList = favouriteResult.get().getRestaurant();
            boolean present = false;
            for(Restaurant restaurant: restaurantList){
                if(restaurant.getId().equals(favourite.getRestaurant().get(0).getId())){
                    present=true;
                }
            }
            if(present) throw new FavouriteAlreadyExistsException();

            favouriteResult.get().getRestaurant().add(0,favourite.getRestaurant().get(0));
            return restaurantRepository.save(favouriteResult.get());
        }
        else
            return restaurantRepository.save(favourite);
    }

    /***
     * providing business logic for removeFromFavourites request handler in FavoriteController class.
     * @param emailid - type String variable for finding specific user's favorite list.
     * @param id - type String variable for finding specific news from user's favorite list.
     * @return - returns favorite list of user with email in case of success.
     * @throws RuntimeException - throws FavouriteListDoesNotExistsException in case the requested favourite list
     *          does not exists and FavouriteDoesNotExistsException in case the requested news does not exists in
     *          user's favorite list.
     */
    @Override
    public Favourite removeFromFavourites(String emailid, String id) throws RuntimeException {
        Optional<Favourite> favouriteResult = restaurantRepository.findById(emailid);

        if(favouriteResult.isEmpty()) throw new FavouriteListDoesNotExistsException();

        List<Restaurant> restaurantList = favouriteResult.get().getRestaurant();
        int foundRestaurant = -1;
        for(int i=0; i<restaurantList.size(); i++){
            if (restaurantList.get(i).getId().equals(id))
                foundRestaurant = i;
        }
        if(foundRestaurant==-1) throw new FavouriteDoesNotExistsException();

        restaurantList.remove(foundRestaurant);
        restaurantRepository.save(favouriteResult.get());
        return favouriteResult.get();
    }

    /***
     * providing business logic for getFavoriteRestaurant request handler in FavouriteController class.
     * @param emailid - type String variable for finding specific user's favourite list.
     * @return - returns favourite list of user with emailid in case of success.
     * @throws FavouriteListDoesNotExistsException in case the requested favourite list does not exists.
     */
    @Override
    public List<Restaurant> getFavouriteRestaurant(String emailid) throws FavouriteListDoesNotExistsException {
        Optional<Favourite> favouriteOptional = restaurantRepository.findById(emailid);
        if(favouriteOptional.isEmpty()) throw new FavouriteListDoesNotExistsException();

        return favouriteOptional.get().getRestaurant();
    }
}
