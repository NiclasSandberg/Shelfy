package com.example.shelfybackend.models;

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
    private Long productId;
    private String name;
    private String description;

    @Temporal(TemporalType.DATE)
    private Date dateOpened;

    @Temporal(TemporalType.DATE)
    private Date expiryDate;

    private int periodAfterOpening;

    @ManyToOne
    @JoinColumn(name = "category_id", nullable = true)
    private Category category;

    @ManyToOne
    @JoinColumn(name = "user_id", nullable = true)
    private User user;

}
