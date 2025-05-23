package com.example.PDVWM.warehouse.productManagement.service;

import com.example.PDVWM.warehouse.productManagement.model.Categoria;
import com.example.PDVWM.warehouse.productManagement.repository.CategoriaRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CategoriaService {

    @Autowired
    private CategoriaRepository categoriaRepository;

    public Categoria saveCategory(Categoria categoria) {
        return categoriaRepository.save(categoria);
    }

    public List<Categoria> getAllCategories() {
        return categoriaRepository.findAll();
    }

    public List<Categoria> getAllCategoriesByNameAsc() {
        return categoriaRepository.findAllByNameAsc();
    }

    public List<Categoria> getAllCategoriesByNameDesc() {
        return categoriaRepository.findAllByNameDesc();
    }
}
