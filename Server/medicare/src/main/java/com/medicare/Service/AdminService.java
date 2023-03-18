package com.medicare.Service;


import com.medicare.DTO.AdminDto;
import com.medicare.Entity.Admin;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public interface AdminService  {
    public List<Admin> GetAllAdmin();
    public String AddAdmin(AdminDto adminDto);
}
