package com.proyecto.integrador.controller;


import com.proyecto.integrador.model.Rating;
import com.proyecto.integrador.service.RatingService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/ratings")
public class RatingController {

    @Autowired
    RatingService service;

    @PostMapping("/agregar")
    public String agregar(@RequestBody Rating rating) {
        service.agregar(rating);
        return "Puntuacion agregada con exito";
    }

    @DeleteMapping("/eliminar/{id}")
    public ResponseEntity<String> eliminar(@PathVariable Integer id){
        service.eliminar(id);
        return ResponseEntity.ok("Puntuacion eliminada");
    }

    @GetMapping
    public ResponseEntity<List<Rating>> listarTodos() {
        return ResponseEntity.ok(service.listarTodos());
    }

    @GetMapping("/buscar/{id}")
    public ResponseEntity<Rating> buscar(@PathVariable Integer id){
        Optional<Rating> ratingBuscada = service.buscar(id);
        if (ratingBuscada.isPresent()){
            return ResponseEntity.ok(ratingBuscada.get());
        }
        else{
            return ResponseEntity.status(HttpStatus.NOT_FOUND).build();
        }
    }

    @PutMapping("/actualizar")
    public ResponseEntity<Rating> actualizar(@RequestBody Rating rating) {
        ResponseEntity<Rating> response = null;

        if (rating.getId() != null && service.buscar(rating.getId()).isPresent())
            response = ResponseEntity.ok(service.editar(rating));
        else
            response = ResponseEntity.status(HttpStatus.NOT_FOUND).build();

        return response;
    }

}
