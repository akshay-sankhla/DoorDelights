package com.stackroute.favoriteservice.model;

/***
 * Simple Java POJO class for creating restaurant object/bean with no-argument and all-argument constructors
 * and getters and setters for class variables
 */
public class Restaurant {
    private String id;
    private String name;
    private String address;
    private String cuisines;
    private String timings;
    private String aggregate_rating;
    private String average_cost_for_two;
    private String featured_image;
    private String phone_numbers;

    public Restaurant() {
    }

    /***
     * All-argument constructor for creating restaurant object
     * @param id - type String variable to represent unique id of the restaurant
     * @param name - type String variable to represent name of restaurant
     * @param address - type String variable to represent address of restaurant
     * @param cuisines - type String variable to represent cuisines served by the restaurant
     * @param timings - type String variable to represent serving time of restaurant
     * @param aggregate_rating - type String variable to represent rating of restaurant
     * @param average_cost_for_two - type String variable to represent rating of restaurant
     * @param featured_image - type String variable to represent thumbnail for the restaurant
     * @param phone_numbers - type String variable to represent contact numbers of restaurant
     */
    public Restaurant(String id, String name, String address, String cuisines, String timings, String aggregate_rating, String average_cost_for_two, String featured_image, String phone_numbers) {
        this.id = id;
        this.name = name;
        this.address = address;
        this.cuisines = cuisines;
        this.timings = timings;
        this.aggregate_rating = aggregate_rating;
        this.average_cost_for_two = average_cost_for_two;
        this.featured_image = featured_image;
        this.phone_numbers = phone_numbers;
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    public String getCuisines() {
        return cuisines;
    }

    public void setCuisines(String cuisines) {
        this.cuisines = cuisines;
    }

    public String getTimings() {
        return timings;
    }

    public void setTimings(String timings) {
        this.timings = timings;
    }

    public String getAggregate_rating() {
        return aggregate_rating;
    }

    public void setAggregate_rating(String aggregate_rating) {
        this.aggregate_rating = aggregate_rating;
    }

    public String getAverage_cost_for_two() {
        return average_cost_for_two;
    }

    public void setAverage_cost_for_two(String average_cost_for_two) {
        this.average_cost_for_two = average_cost_for_two;
    }

    public String getFeatured_image() {
        return featured_image;
    }

    public void setFeatured_image(String featured_image) {
        this.featured_image = featured_image;
    }

    public String getPhone_numbers() {
        return phone_numbers;
    }

    public void setPhone_numbers(String phone_numbers) {
        this.phone_numbers = phone_numbers;
    }

    @Override
    public String toString() {
        return "Restaurant{" +
                "id='" + id + '\'' +
                ", name='" + name + '\'' +
                ", address='" + address + '\'' +
                ", cuisines='" + cuisines + '\'' +
                ", timings='" + timings + '\'' +
                ", aggregate_rating='" + aggregate_rating + '\'' +
                ", average_cost_for_two='" + average_cost_for_two + '\'' +
                ", featured_image='" + featured_image + '\'' +
                ", phone_numbers='" + phone_numbers + '\'' +
                '}';
    }
}