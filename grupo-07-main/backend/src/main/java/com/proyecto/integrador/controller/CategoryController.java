package com.proyecto.integrador.controller;

import com.proyecto.integrador.model.Category;
import com.proyecto.integrador.service.CategoryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/categorias")

public class CategoryController {
    @Autowired
    CategoryService service;

    @PostMapping("/agregar")
    public String agregar(@RequestBody Category category) {
        service.agregar(category);
        return "Categoria agregada con exito";
    }

    @DeleteMapping("/eliminar/{id}")
    public ResponseEntity<String> eliminar(@PathVariable Integer id){
        service.eliminar(id);
        return ResponseEntity.ok("Categoria eliminada");
    }

    @GetMapping
    public ResponseEntity<List<Category>> listarTodos() {
        return ResponseEntity.ok(service.listarTodos());
    }

    @GetMapping("/buscar/{id}")
    public ResponseEntity<Category> buscar(@PathVariable Integer id){
        Optional<Category> categoriaBuscada = service.buscar(id);
        if (categoriaBuscada.isPresent()){
            return ResponseEntity.ok(categoriaBuscada.get());
        }
        else{
            return ResponseEntity.status(HttpStatus.NOT_FOUND).build();
        }
    }

    @PutMapping("/actualizar")
    public ResponseEntity<Category> actualizar(@RequestBody Category category) {
        ResponseEntity<Category> response = null;

        if (category.getId() != null && service.buscar(category.getId()).isPresent())
            response = ResponseEntity.ok(service.editar(category));
        else
            response = ResponseEntity.status(HttpStatus.NOT_FOUND).build();

        return response;
    }

}

