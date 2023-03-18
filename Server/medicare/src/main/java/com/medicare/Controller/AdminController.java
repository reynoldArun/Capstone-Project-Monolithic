package com.medicare.Controller;

import com.medicare.DTO.AdminDto;
import com.medicare.Entity.Admin;
import com.medicare.Service.AdminService;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RequestMapping("/admin")
@RestController
@CrossOrigin("*")
public class AdminController {
    @Autowired
    private AdminService adminService;

    @PostMapping("/add")
    public ResponseEntity<String> AddAdmin(@Valid @RequestBody AdminDto adminDto) {
        return ResponseEntity.status(200).body(adminService.AddAdmin(adminDto));
    }

    @GetMapping("/admins")
    public ResponseEntity<List<Admin>> GetAllAdmins() {
        return ResponseEntity.status(200).body(adminService.GetAllAdmin());
    }
}
