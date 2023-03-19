package com.medicare.ServiceImpl;

import com.medicare.DTO.UserDto;
import com.medicare.Entity.User;
import com.medicare.Repository.UserRepository;
import com.medicare.Service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserServiceImpl implements UserService {

    @Autowired
    private UserRepository userRepository;


    @Override
    public String CreateUser(UserDto userDto) {
        User newUser = new User();
        newUser.setName(userDto.getName());
        newUser.setEmail(userDto.getEmail());
        newUser.setPassword(userDto.getPassword());
        newUser.setPhoneNumber(userDto.getPhoneNumber());
        userRepository.save(newUser);
        return "User created Successfully!!";
    }

    @Override
    public User GetUserByID(String id) {
        User newUser = userRepository.findById(id).get();
        return newUser;
    }

    @Override
    public List<User> GetAllUser() {
        List<User> AllUser = userRepository.findAll();
        return AllUser;
    }

    @Override
    public String DeleteUser(String id) {
        userRepository.deleteById(id);
        return "User deleted Successfully!!";
    }

    @Override
    public String UpdateUser(String id, UserDto userDto) {
        User newUser = userRepository.findById(id).get();
        newUser.setName(userDto.getName());
        newUser.setEmail(userDto.getEmail());
        newUser.setPassword(userDto.getPassword());
        newUser.setPhoneNumber(userDto.getPhoneNumber());
        return "User Update Successfully!!";
    }
}
