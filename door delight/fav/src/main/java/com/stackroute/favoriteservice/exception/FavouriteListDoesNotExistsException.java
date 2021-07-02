package com.stackroute.favoriteservice.exception;

/***
 * Exception class to be used in case when a request requires to search in database for specific user's favorite list
 * but that user's favorite list is not present in database
 * Ex: GET request to fetch a favorite list corresponding to specific user(emailid).
 */
public class FavouriteListDoesNotExistsException extends RuntimeException {
    private String message;

    public FavouriteListDoesNotExistsException() {
    }

    public FavouriteListDoesNotExistsException(String message) {
        this.message = message;
    }
}
