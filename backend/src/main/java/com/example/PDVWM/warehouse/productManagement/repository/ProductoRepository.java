package com.example.PDVWM.warehouse.productManagement.repository;

import com.example.PDVWM.warehouse.productManagement.model.Producto;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ProductoRepository extends JpaRepository<Producto, Long> {

    //Obtener producto por código de barras
    @Query("SELECT p FROM Producto p WHERE p.codigoBarra = :codigoBarra")
    Producto findByCodigo(@Param("codigoBarra") String codigoBarra);

    // Ordenar por nombre ascendente
    @Query("SELECT p FROM Producto p ORDER BY p.nombre ASC")
    List<Producto> findAllByNameAsc();

    // Ordenar por nombre descendente
    @Query("SELECT p FROM Producto p ORDER BY p.nombre DESC")
    List<Producto> findAllByNameDesc();

    //Obtener por categoria
    @Query("SELECT p FROM Producto p INNER JOIN Categoria c ON p.categoria.idCategoria = c.idCategoria ORDER BY c.nombre ASC")
    List<Producto> findAllByCategoryName();

    //Obtener por categoria4
    @Query("SELECT p FROM Producto p INNER JOIN Categoria c ON p.categoria.idCategoria = c.idCategoria ORDER BY c.nombre DESC, p.nombre ASC")
    List<Producto> findAllByCategoryNameDesc();

    //Obtener por marca
    @Query("SELECT p FROM Producto p ORDER BY p.marca ASC")
    List<Producto> findAllByBrandAsc();

    //Obtener por marca desendente
    @Query("SELECT p FROM Producto p ORDER BY p.marca DESC")
    List<Producto> findAllByBrandDes();

    //Obtener por codigo (Id) asc
    @Query("SELECT p FROM Producto p ORDER BY p.idProducto ASC ")
    List<Producto> findAllByProductIdAsc();

    //Obtener por código (Id) DESC
    @Query("SELECT p FROM Producto p ORDER BY p.idProducto DESC")
    List<Producto> findAllByProductIdDesc();

}
