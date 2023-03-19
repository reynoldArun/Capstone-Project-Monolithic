package com.medicare.Controller;

import com.medicare.DTO.ProductDto;
import com.medicare.Entity.Product;
import com.medicare.Service.ProductService;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/product")
@CrossOrigin("*")
public class ProductController {

    @Autowired
    private ProductService productService;

    @PostMapping("/add")
    public ResponseEntity<String> CreateProduct(@Valid @RequestBody ProductDto productDto) {
        return ResponseEntity.status(200).body(productService.CreateProduct(productDto));
    }

    @GetMapping("/all")
    public ResponseEntity<List<Product>> GetAllProduct() {
        return ResponseEntity.status(200).body(productService.GetAllProduct());
    }

    @GetMapping("single/{id}")
    public ResponseEntity<Product> GetProductById(@PathVariable String id) {
        return ResponseEntity.status(200).body(productService.GetProductById(id));
    }

    @DeleteMapping("/delete/{id}")
    public ResponseEntity<String> DeleteProduct(@PathVariable String id) {
        return ResponseEntity.status(200).body(productService.DeleteProduct(id));
    }

    @PutMapping("/update/{id}")
    public ResponseEntity<String> UpdateProduct(@PathVariable String id, @RequestBody ProductDto productDto) {
        return ResponseEntity.status(200).body(productService.UpdateProduct(id, productDto));
    }

    @GetMapping("/search/{productName}")
    public Product SearchByProductName(@PathVariable String productName) {
        return productService.findProductByProductNameContainingIgnoreCase(productName);
    }
}
