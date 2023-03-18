package com.medicare.Controller;

import com.medicare.DTO.UserDto;
import com.medicare.Entity.User;
import com.medicare.Service.UserService;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/user")
@CrossOrigin("*")
public class UserController {

    @Autowired
    private UserService userService;


    @GetMapping("/all")
    public ResponseEntity<List<User>> GetAllUser() {
        return ResponseEntity.status(200).body(userService.GetAllUser());
    }

    @PostMapping("/add")
    public ResponseEntity<String> CreateUser(@Valid @RequestBody UserDto userDto) {
        return ResponseEntity.status(200).body(userService.CreateUser(userDto));
    }

    @DeleteMapping("/delete/{id}")
    public ResponseEntity<String> DeleteUser(@PathVariable long id) {
        return ResponseEntity.status(200).body(userService.DeleteUser(id));
    }

    @PutMapping("/update/{id}")
    public ResponseEntity<String> UpdateUser(@PathVariable long id, @RequestBody UserDto userDto) {
        return ResponseEntity.status(200).body(userService.UpdateUser(id, userDto));
    }

    @GetMapping("/single/{id}")
    public ResponseEntity<User> GetUserById(@PathVariable long id) {
        return ResponseEntity.status(200).body(userService.GetUserByID(id));
    }



}
