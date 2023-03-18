package com.medicare.Service;

import com.medicare.Entity.Cart;

import java.util.List;

public interface CartService {
    public Cart AddToCart(Cart cart);

    public List<Cart> getAllByUserCart(long id);

    public String DeleteCartItems(long id);

    public String UpdateCartItems(Cart cart, long id);
}
