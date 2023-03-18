package com.medicare.Service;

import com.medicare.DTO.ProductDto;
import com.medicare.Entity.Product;

import java.util.List;

public interface ProductService {
    public String CreateProduct(ProductDto productDto);

    public Product GetProductById(long id);

    public List<Product> GetAllProduct();

    public String DeleteProduct(long id);

    public String UpdateProduct(long id, ProductDto productDto);

    Product findProductByProductNameContainingIgnoreCase(String productName);
}
