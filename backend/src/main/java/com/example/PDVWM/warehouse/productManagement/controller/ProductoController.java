package com.example.PDVWM.warehouse.productManagement.controller;

import com.example.PDVWM.warehouse.productManagement.dto.ProductoConStockDTO;
import com.example.PDVWM.warehouse.productManagement.model.Categoria;
import com.example.PDVWM.warehouse.productManagement.model.Producto;
import com.example.PDVWM.warehouse.productManagement.repository.CategoriaRepository;
import com.example.PDVWM.warehouse.productManagement.service.ProductoService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.server.ResponseStatusException;

import java.io.File;
import java.util.List;

@RestController
@RequestMapping("/api/productos")
public class ProductoController {

    private final ProductoService productoService;
    private final CategoriaRepository categoriaRepository;

    @Autowired
    public ProductoController(ProductoService productoService, CategoriaRepository categoriaRepository) {
        this.productoService = productoService;
        this.categoriaRepository = categoriaRepository;
    }

    @PostMapping(consumes = "multipart/form-data")
    public ResponseEntity<Producto> createProducto(
            @RequestParam String nombre,
            @RequestParam double precio,
            @RequestParam Long categoriaId,
            @RequestParam(required = false) String descripcion,
            @RequestParam(required = false) String marca,
            @RequestParam(required = false) String codigoBarra,
            @RequestPart(required = false) MultipartFile imagen
    ) {
        Categoria categoria = categoriaRepository.findById(categoriaId)
                .orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND, "Categoría no encontrada"));

        Producto producto = new Producto();
        producto.setNombre(nombre);
        producto.setPrecio(precio);
        producto.setCategoria(categoria);

        if (descripcion != null) producto.setDescripcion(descripcion);
        if (marca != null) producto.setMarca(marca);
        if (codigoBarra != null) producto.setCodigoBarra(codigoBarra);

        if (imagen != null && !imagen.isEmpty()) {
            String contentType = imagen.getContentType();
            if (contentType == null ||
                    !(contentType.equals("image/png") ||
                            contentType.equals("image/jpeg") ||
                            contentType.equals("image/webp"))) {
                throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "Formato de imagen no válido (solo PNG, JPG, WEBP)");
            }

            try {
                String nombreFinal = System.currentTimeMillis() + "_" + imagen.getOriginalFilename();
                String rutaLocal = "uploads/" + nombreFinal;

                File destino = new File("src/main/resources/static/" + rutaLocal);
                destino.getParentFile().mkdirs(); // Crea carpetas si no existen
                imagen.transferTo(destino); // Guarda la imagen físicamente

                producto.setImagenUrl("/" + rutaLocal); // Guarda la ruta accesible
                System.out.println("Imagen recibida: " + imagen.getOriginalFilename());
            } catch (Exception e) {
                throw new ResponseStatusException(HttpStatus.INTERNAL_SERVER_ERROR, "Error al guardar imagen", e);
            }
        }

        // Guardar en base de datos y retornar
        Producto saved = productoService.saveProducto(producto);
        return ResponseEntity.status(HttpStatus.CREATED).body(saved);
    }

    @GetMapping
    public List<Producto> getProductos(
            @RequestParam(required = false) String sort,
            @RequestParam(defaultValue = "asc") String order
    ) {
        return productoService.findSortedProductos(sort, order);
    }

    @GetMapping("/barcode/{codigo}")
    public Producto getProductByBarCode(@PathVariable String codigo) {
        return productoService.findByBarCode(codigo);
    }

    @GetMapping("/{id}")
    public Producto getProductoById(@PathVariable Long id) {
        Producto producto = productoService.getProductoById(id);
        if (producto == null) {
            throw new ResponseStatusException(HttpStatus.NOT_FOUND, "Producto no encontrado");
        }
        return producto;
    }

    @DeleteMapping("/{id}")
    public void deleteProducto(@PathVariable Long id) {
        Producto producto = productoService.getProductoById(id);
        if (producto == null) {
            throw new ResponseStatusException(HttpStatus.NOT_FOUND, "Producto no encontrado");
        }
        productoService.deleteProducto(id);
    }

    @GetMapping("/con-stock")
    public List<ProductoConStockDTO> getProductosConStock() {
        return productoService.getProductosConStock();
    }
}
