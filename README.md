# DoorDelights Project

Pull the Project to local Repository and run docker compose file to start Backend Services.

FullStack WebPage where SpringBoot is used for Backend and ReactJs is used for Frontend.

DoorDelights is a web platform which uses **Zomato Api** for collecting Restaurant details and Display on Browser. It also provide functionality to Search Restaurant on the basis of location, Cuisine and to _save_ and _delete_ any Restaurant to users favourite list for registered User.

This project having **5 MicroServices** 

# User Service
This service will user for registering new User and for secure Login of registered user. It uses JWT tokens for secure Authorization of User.

# Search Service
This service uses external Zomato api for getting the json data of various restaurants and to search on the basis on location , cusinie etc.

# Favourite Service
This service will Store/Fetch the users favorite Restaurant to/from the **MongoDB**.

# Eureka Service
This service will register other services to eureka server.

# Gateway Service
This service Provide a Single port Gateway to other service.
