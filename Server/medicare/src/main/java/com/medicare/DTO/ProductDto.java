package com.medicare.DTO;

import jakarta.validation.constraints.NotNull;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class ProductDto {
    private long id;
    @NotNull(message = "Product Name cannot be empty")
    private String productName;
    @NotNull(message = "Add Valid Img url")
    private String img;
    @NotNull(message = "Category cannot be empty")
    private String category;
    @NotNull(message = "Add amount for product")
    private double amount;
    @NotNull(message = "minimum quantity must be provided")
    private int quantity;
}
