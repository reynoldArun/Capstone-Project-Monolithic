package com.medicare.Service;

import com.medicare.DTO.ProductDto;
import com.medicare.Entity.Product;

import java.util.List;

public interface ProductService {
    public String CreateProduct(ProductDto productDto);

    public Product GetProductById(String id);

    public List<Product> GetAllProduct();

    public String DeleteProduct(String id);

    public String UpdateProduct(String id, ProductDto productDto);

    Product findProductByProductNameContainingIgnoreCase(String productName);
}
