package com.example.PDVWM.service;

import com.example.PDVWM.model.Producto;
import com.example.PDVWM.repository.ProductoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ProductoService {

    @Autowired
    private ProductoRepository productoRepository;

    public ProductoService (ProductoRepository productoRepository) {
        this.productoRepository = productoRepository;
    }

    // Método para obtener todos los productos
    public List<Producto> getAllProductos() {
        return productoRepository.findAll();
    }

    // Método para guardar un producto con categoria
    public Producto saveProducto(Producto producto) {
        return productoRepository.save(producto);
    }

    // Método para buscar un producto por su ID
    public Producto getProductoById(Long id) {
        return productoRepository.findById(id).orElse(null);
    }

    // Método para eliminar un producto
    public void deleteProducto(Long id) {
        productoRepository.deleteById(id);
    }

    //Metodos para obtener un producto por diferente parametro
    public Producto findByBarCode(String barCode) {
        return productoRepository.findByCodigo(barCode);
    }


    //Métodos para obtener todos los productos
    public List<Producto> findAllByNameAsc() {
        return productoRepository.findAllByNameAsc();
    }

    public List<Producto> findAllByNameDesc() {
        return productoRepository.findAllByNameDesc();
    }

    public List<Producto> findAllByCategory() {
        return productoRepository.findAllByCategoryName();
    }

    public List<Producto> findAllByCategoryDesc() {
        return productoRepository.findAllByCategoryNameDesc();
    }

    public List<Producto> findAllByBrand() {
        return productoRepository.findAllByBrandAsc();
    }

    public List<Producto> findAllByBrandDesc() {
        return productoRepository.findAllByBrandDes();
    }

    public List<Producto> findAllById() {
        return productoRepository.findAllByProductIdAsc();
    }

    public List<Producto> findAllByProductIdDesc() {
        return productoRepository.findAllByProductIdDesc();
    }
}