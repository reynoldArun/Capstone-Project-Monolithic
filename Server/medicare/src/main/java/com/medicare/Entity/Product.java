package com.medicare.Entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Entity
@AllArgsConstructor
@NoArgsConstructor
@Table(name = "product_table")
public class Product {
    @Id
    @GeneratedValue
    private long id;
    @Column(unique = true)
    private String productName;
    private String img;
    private String category;
    private double amount;
    private int quantity;
}