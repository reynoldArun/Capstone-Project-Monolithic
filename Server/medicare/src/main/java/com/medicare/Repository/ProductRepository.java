package com.medicare.Repository;

import com.medicare.Entity.Product;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ProductRepository extends JpaRepository<Product, Long> {
    Product findProductByProductNameContainingIgnoreCase(String productName);
}
