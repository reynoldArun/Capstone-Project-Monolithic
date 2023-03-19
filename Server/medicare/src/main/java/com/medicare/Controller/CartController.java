package com.medicare.Controller;

import com.medicare.Entity.Cart;
import com.medicare.Entity.Product;
import com.medicare.Entity.User;
import com.medicare.Service.CartService;
import com.medicare.Service.ProductService;
import com.medicare.Service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/cart")
@CrossOrigin("*")
public class CartController {

    @Autowired
    private ProductService productService;
    @Autowired
    private UserService userService;

    @Autowired
    private CartService cartService;



    @GetMapping("/add/{productId}/{userId}")
    public ResponseEntity<Cart> addCart(@PathVariable String productId, @PathVariable String userId) {
        Product newProduct = productService.GetProductById(productId);
        User newUser = userService.GetUserByID(userId);
        Cart newCart = new Cart(newUser, newProduct);
        newCart.setUnit(1);
        newCart.setTotalPrice(newCart.getUnit()*newProduct.getAmount());
        Cart addCart = cartService.AddToCart(newCart);
        return new ResponseEntity<Cart>(addCart, HttpStatus.CREATED);
    }


    @DeleteMapping("/delete/{id}")
    public ResponseEntity<String> DeleteCartItems(@PathVariable String id) {
        return ResponseEntity.status(200).body(cartService.DeleteCartItems(id));
    }

    @GetMapping("/all/{id}")
    public ResponseEntity<List<Cart>> GetAllCartItems(@PathVariable String id) {
        return ResponseEntity.status(200).body(cartService.getAllByUserCart(id));
    }

    @PutMapping("/update/{id}")
    public ResponseEntity<String> UpdateCartItems(@RequestBody Cart cart, @PathVariable String id) {
        return ResponseEntity.status(200).body(cartService.UpdateCartItems(cart, id));
    }
}
