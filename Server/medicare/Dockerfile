

FROM openjdk:18
ARG JAR_FILE=target/*.jar
COPY --from=build /target/spring-medicine-app.jar spring-medicine-app.jar
EXPOSE 8080

ENTRYPOINT ["java","-jar","spring-medicine-app.jar"]

