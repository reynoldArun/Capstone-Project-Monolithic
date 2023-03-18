package com.medicare.DTO;

import jakarta.validation.constraints.NotNull;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class AdminDto {
    private long id;
    @NotNull(message = "Admin name cannot be empty")
    private String name;
    private String password;
    @NotNull(message = "Admin email cannot be empty")
    private String email;
}
