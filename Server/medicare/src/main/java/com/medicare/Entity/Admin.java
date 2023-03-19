package com.medicare.Entity;


import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.bson.types.ObjectId;
import org.springframework.data.mongodb.core.mapping.Document;

@Data
@Document(collection = "admin")
@AllArgsConstructor
@NoArgsConstructor
public class Admin {
    @Id
    private String id;
    private String name;
    private String password;

    private String email;
}
