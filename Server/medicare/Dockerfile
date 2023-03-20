FROM openjdk:11
ARG JAR_FILE=target/*.jar
COPY  ./target/spring-medicine-app.jar spring-medicine-app.jar
EXPOSE 8080
ENTRYPOINT ["java","-jador","spring-medicine-app.jar"]
