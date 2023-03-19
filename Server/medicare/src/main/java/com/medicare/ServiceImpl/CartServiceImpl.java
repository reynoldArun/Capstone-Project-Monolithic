package com.medicare.ServiceImpl;

import com.medicare.Entity.Cart;
import com.medicare.Repository.CartRepository;
import com.medicare.Service.CartService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CartServiceImpl implements CartService {

    @Autowired
    private CartRepository cartRepository;

    @Override
    public Cart AddToCart(Cart cart) {
        return cartRepository.save(cart);
    }

    @Override
    public List<Cart> getAllByUserCart(String id) {
        return cartRepository.findAll();
    }

    @Override
    public String DeleteCartItems(String id) {
        cartRepository.deleteById(id);
        return "Deleted Successfully!!";
    }

    @Override
    public String UpdateCartItems(Cart cart, String id) {
        cartRepository.findById(id).get();
        Cart update;
        update = cart;
        cartRepository.save(update);
        return "Updated";
    }
}
