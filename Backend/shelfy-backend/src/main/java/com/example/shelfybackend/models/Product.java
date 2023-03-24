package com.example.shelfybackend.models;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.Date;

@Entity
@Getter
@Setter
@NoArgsConstructor
public class Product {
    @Id
    @GeneratedValue
    private Long id;
    private String name;
    private String description;

    @Temporal(TemporalType.DATE)
    private Date dateOpened;

    @Temporal(TemporalType.DATE)
    private Date expiryDate;


    @ManyToOne
    @JoinColumn(name = "category_id", nullable = true)
    private Category category;

}
