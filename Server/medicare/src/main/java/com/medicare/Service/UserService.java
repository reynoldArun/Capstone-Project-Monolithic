package com.medicare.Service;

import com.medicare.DTO.UserDto;
import com.medicare.Entity.User;

import java.util.List;

public interface UserService {
    public String CreateUser(UserDto userDto);

    public User GetUserByID(String id);

    public List<User> GetAllUser();

    public String DeleteUser(String id);

    public String UpdateUser(String id, UserDto userDto);
}
