package com.example.PDVWM.accountManagement.model;

import jakarta.persistence.*;

import java.util.ArrayList;
import java.util.List;

@Entity
@Table(name = "Negocio")
public class Business {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "idNegocio")
    private Long businessId;

    @Column(name = "nombre", nullable = false)
    private String name;

    @OneToMany(mappedBy = "business", cascade = CascadeType.ALL, orphanRemoval = true)
    private List<User> users = new ArrayList<>();



    public Business() {}

    public Business(String name) {
        this.name = name;
    }

    public Business(String name, List<User> users) {
        this.name = name;
        this.users = users;
    }

    public void addUser(User user) {
        user.setBusiness(this);
        this.users.add(user);
    }

}

