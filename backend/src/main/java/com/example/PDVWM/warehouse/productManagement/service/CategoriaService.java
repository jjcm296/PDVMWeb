package com.example.PDVWM.warehouse.productManagement.service;

import com.example.PDVWM.warehouse.productManagement.repository.CategoriaRepository;
import com.example.PDVWM.warehouse.productManagement.model.Categoria;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CategoriaService {

    @Autowired
    private CategoriaRepository categoriaRepository;

    public Categoria guardarCategoria(Categoria categoria) {
        System.out.println("Guardando categoria: " + categoria.getNombre());
        return categoriaRepository.save(categoria);
    }

    //Métodos para obtener las categorias
    public List<Categoria> getAllCategorias() {
        return categoriaRepository.findAll();
    }

    public List<Categoria> getAllCategoriesByNameAsc() {
        return categoriaRepository.findAllByNameAsc();
    }
    public List<Categoria> getAllCategoriesByNameDesc() {
        return categoriaRepository.findAllByNameDesc();
    }
}
