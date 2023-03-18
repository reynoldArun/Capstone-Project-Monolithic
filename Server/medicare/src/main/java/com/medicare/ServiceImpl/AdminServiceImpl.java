package com.medicare.ServiceImpl;

import com.medicare.DTO.AdminDto;
import com.medicare.Entity.Admin;
import com.medicare.Repository.AdminRepository;
import com.medicare.Service.AdminService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class AdminServiceImpl implements AdminService {

    @Autowired
    private AdminRepository adminRepository;

    @Override
    public List<Admin> GetAllAdmin() {
        return adminRepository.findAll();
    }

    @Override
    public String AddAdmin(AdminDto adminDto) {
        Admin newAdmin = new Admin();
        newAdmin.setName(adminDto.getName());
        newAdmin.setEmail(adminDto.getEmail());
        newAdmin.setPassword(adminDto.getPassword());
        adminRepository.save(newAdmin);
        return "Admin created!!";
    }
}
