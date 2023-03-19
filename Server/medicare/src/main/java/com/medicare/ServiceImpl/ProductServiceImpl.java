package com.medicare.ServiceImpl;

import com.medicare.DTO.ProductDto;
import com.medicare.Entity.Product;
import com.medicare.Repository.ProductRepository;
import com.medicare.Service.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ProductServiceImpl implements ProductService {

    @Autowired
    private ProductRepository productRepository;
    @Override
    public String CreateProduct(ProductDto productDto) {
        Product newProduct = new Product();
        newProduct.setProductName(productDto.getProductName());
        newProduct.setAmount(productDto.getAmount());
        newProduct.setCategory(productDto.getCategory());
        newProduct.setImg(productDto.getImg());
        newProduct.setQuantity(productDto.getQuantity());
        productRepository.save(newProduct);
        return "Product Created!!";
    }

    @Override
    public Product GetProductById(String id) {
        Product newProduct = productRepository.findById(id).get();
        return newProduct;
    }

    @Override
    public List<Product> GetAllProduct() {
        return productRepository.findAll();
    }

    @Override
    public String DeleteProduct(String id) {
        productRepository.deleteById(id);
        return "Product Deleted!!";
    }

    @Override
    public String UpdateProduct(String id, ProductDto productDto) {
        Product updateProduct = productRepository.findById(id).get();
        updateProduct.setProductName(productDto.getProductName());
        updateProduct.setAmount(productDto.getAmount());
        updateProduct.setCategory(productDto.getCategory());
        updateProduct.setImg(productDto.getImg());
        updateProduct.setQuantity(productDto.getQuantity());
        productRepository.save(updateProduct);
        return "Product created!!";
    }

    @Override
    public Product findProductByProductNameContainingIgnoreCase(String productName) {
        return productRepository.findProductByProductNameContainingIgnoreCase(productName);
    }
}
