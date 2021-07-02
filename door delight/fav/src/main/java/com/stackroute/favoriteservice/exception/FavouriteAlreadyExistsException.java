package com.stackroute.favoriteservice.exception;

/***
 * Exception class to be used in case when favorite restaurant object user asked to add to his/her favorite list
 * already exists in his/her favorite list;
 */
public class FavouriteAlreadyExistsException extends RuntimeException {
    private String message;

    public FavouriteAlreadyExistsException() {
    }

    public FavouriteAlreadyExistsException(String message) {
        this.message = message;
    }
}
