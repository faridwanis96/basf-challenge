# Full Stack  challenge for BASF

This is the repository with the instructions for the challenge.

## Directories description

- basf-challenge-angular: This directory contains all the source code for the frontend part of the challenge.
- basf-challenge-spring: This directory contains all the source code for the backend part of the challenge.
- compose.yaml: The docker compose file to run the whole application with docker.

## Instructions to run the application

### Pre requisites

- Docker must be installed in the computer that will run the application

### Steps to run the application 

1. From a command line tool you must move to this directory as your working directory `cd intermediate-paths/basf-challenge`.
2. Run `docker-compose up`.
3. Wait until the 3 services are deployed:
   1. basf-challenge-postgres
   2. basf-challenge-spring
   3. basf-challenge-angular
4. Access http://localhost:4200 from a browser to explore the application.
5. Access http://localhost:8080/swagger-ui/index.html to access the api documentation for the backend.