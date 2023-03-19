package com.medicare.Entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.mongodb.core.mapping.Document;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Document(collection = "cart")
public class Cart {
    @Id
    private String id;

    private User user;

    private Product product;

    private int unit;
    private double totalPrice;

    public Cart(User user, Product product) {
        this.user = user;
        this.product = product;
    }


}
