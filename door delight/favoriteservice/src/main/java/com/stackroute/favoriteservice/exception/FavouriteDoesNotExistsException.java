package com.stackroute.favoriteservice.exception;

/***
 * Exception class to be used in case when favorite restaurant object user asked to remove from his/her favorite list
 * does not exist in his/her favorite list;
 */
public class FavouriteDoesNotExistsException extends RuntimeException {
    private String message;

    public FavouriteDoesNotExistsException() {
    }

    public FavouriteDoesNotExistsException(String message) {
        this.message = message;
    }
}

