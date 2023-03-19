package com.medicare.Service;

import com.medicare.Entity.Cart;

import java.util.List;

public interface CartService {
    public Cart AddToCart(Cart cart);

    public List<Cart> getAllByUserCart(String id);

    public String DeleteCartItems(String id);

    public String UpdateCartItems(Cart cart, String id);
}
