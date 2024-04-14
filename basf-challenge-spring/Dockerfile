FROM maven:3.9.6-eclipse-temurin-21 as build
COPY . .
RUN mvn clean package

# Use an official OpenJDK image as the base image
FROM openjdk:21-jdk
# Copy the built JAR file from the previous stage to the container
COPY --from=build /target/basf-challenge-spring-0.0.1-SNAPSHOT.jar basf-challenge-spring.jar
# Set the command to run the application
ENTRYPOINT ["java","-jar","basf-challenge-spring.jar"]