package com.medicare.Repository;

import com.medicare.Entity.Product;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ProductRepository extends MongoRepository<Product, String> {
    Product findProductByProductNameContainingIgnoreCase(String productName);
}
