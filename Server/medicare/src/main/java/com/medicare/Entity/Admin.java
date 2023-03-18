package com.medicare.Entity;


import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Entity
@AllArgsConstructor
@NoArgsConstructor
@Table(name = "admin_table")
public class Admin {
    @Id
    @GeneratedValue
    private long id;
    @Column(unique = true)
    private String name;
    private String password;
    @Column(unique = true)
    private String email;
}
