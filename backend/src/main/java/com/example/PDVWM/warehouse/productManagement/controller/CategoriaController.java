package com.example.PDVWM.warehouse.productManagement.controller;

import com.example.PDVWM.warehouse.productManagement.model.Categoria;
import com.example.PDVWM.warehouse.productManagement.service.CategoriaService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.server.ResponseStatusException;

import java.util.List;

@RestController
@RequestMapping("/api/categorias")
public class CategoriaController {

    @Autowired
    private CategoriaService categoriaService;

    @PostMapping
    public Categoria createCategory(@RequestBody Categoria categoria) {
        if (categoria.getNombre() == null || categoria.getNombre().isBlank()) {
            throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "Category name is required");
        }
        return categoriaService.saveCategory(categoria);
    }

    @GetMapping
    public List<Categoria> getAllCategories(@RequestParam(required = false) String order) {
        if ("desc".equalsIgnoreCase(order)) {
            return categoriaService.getAllCategoriesByNameDesc();
        } else if ("asc".equalsIgnoreCase(order)) {
            return categoriaService.getAllCategoriesByNameAsc();
        } else {
            return categoriaService.getAllCategories();
        }
    }
}