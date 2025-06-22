package com.example.PDVWM.accountManagement.model;

import jakarta.persistence.*;

@Entity
@Table(name="Usuario")
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long idUser;

    @Column(name="nombre")
    private String name;

    @Column(name="apellidoPaterno")
    private String firstLastName;

    @Column(name="apellidoMaterno")
    private String secondLastName;

    @ManyToOne(optional = false)
    @JoinColumn(name = "idCuenta", referencedColumnName = "idAccount")
    private Account account;

    @ManyToOne(optional = false)
    @JoinColumn(name = "idNegocio", referencedColumnName = "idNegocio")
    private Business business;


    public User(){}

    public User(String name, String firstLastName, String secondLastName, Account account) {
        this.name = name;
        this.firstLastName = firstLastName;
        this.secondLastName = secondLastName;
        this.account = account;
    }

    public Long getIdUser() {
        return idUser;
    }

    public void setIdUser(Long idUsuario) {
        this.idUser = idUsuario;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getFirstLastName() {
        return firstLastName;
    }

    public void setFirstLastName(String firstLastName) {
        this.firstLastName = firstLastName;
    }

    public String getSecondLastName() {
        return secondLastName;
    }

    public void setSecondLastName(String secondLastName) {
        this.secondLastName = secondLastName;
    }

    public Account getAccount() {
        return account;
    }

    public void setAccount(Account account) {
        this.account = account;
    }

    public Business getBusiness() {
        return business;
    }

    public void setBusiness(Business business) {
        this.business = business;
    }

}
