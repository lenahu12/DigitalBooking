package com.proyecto.integrador.controller;

import com.proyecto.integrador.model.Image;
import com.proyecto.integrador.service.ImageService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/imagenes")

public class ImageController {
    @Autowired
    ImageService service;

    @PostMapping("/agregar")
    public String agregar(@RequestBody Image image) {
        service.agregar(image);
        return "Imagen agregada con exito";
    }

    @DeleteMapping("/eliminar/{id}")
    public ResponseEntity<String> eliminar(@PathVariable Integer id){
        service.eliminar(id);
        return ResponseEntity.ok("Imagen eliminada");
    }

    @GetMapping
    public ResponseEntity<List<Image>> listarTodos() {
        return ResponseEntity.ok(service.listarTodos());
    }

    @GetMapping("/buscar/{id}")
    public ResponseEntity<Image> buscar(@PathVariable Integer id){
        Optional<Image> imagenBuscada = service.buscar(id);
        if (imagenBuscada.isPresent()){
            return ResponseEntity.ok(imagenBuscada.get());
        }
        else{
            return ResponseEntity.status(HttpStatus.NOT_FOUND).build();
        }
    }

    @PutMapping("/actualizar")
    public ResponseEntity<Image> actualizar(@RequestBody Image image) {
        ResponseEntity<Image> response = null;

        if (image.getId() != null && service.buscar(image.getId()).isPresent())
            response = ResponseEntity.ok(service.editar(image));
        else
            response = ResponseEntity.status(HttpStatus.NOT_FOUND).build();

        return response;
    }

}
