package com.medicare.DTO;


import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.Size;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import jakarta.validation.constraints.NotNull;
@Data
@AllArgsConstructor
@NoArgsConstructor
public class UserDto {

    private String id;

    @NotNull(message = "Username cannot be empty")
    private String name;

    @NotNull(message = "Email cannot be empty")
    @Email(message = "Enter a valid email")
    private String email;

    @NotNull(message = "Password cannot be empty")
    @Size(min = 6, message = "password is too short")
    private String password;

    @NotNull(message = "PhoneNumber cannot be empty")
    private String phoneNumber;
}
