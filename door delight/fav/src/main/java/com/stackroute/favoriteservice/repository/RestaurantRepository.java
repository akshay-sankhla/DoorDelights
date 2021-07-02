package com.stackroute.favoriteservice.repository;

import com.stackroute.favoriteservice.model.Favourite;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

/***
 * Simple mongo repository class for Favorite entity/document class corresponding to id attribute emailid.
 */
@Repository
public interface RestaurantRepository extends MongoRepository<Favourite, String> {
}
