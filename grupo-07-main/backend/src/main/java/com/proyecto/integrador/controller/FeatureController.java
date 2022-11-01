package com.proyecto.integrador.controller;

import com.proyecto.integrador.model.Feature;
import com.proyecto.integrador.service.FeatureService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/caracteristicas")

public class FeatureController {
    @Autowired
    FeatureService service;

    @PostMapping("/agregar")
    public String agregar(@RequestBody Feature feature) {
        service.agregar(feature);
        return "Característica agregada con exito";
    }

    @DeleteMapping("/eliminar/{id}")
    public ResponseEntity<String> eliminar(@PathVariable Integer id){
        service.eliminar(id);
        return ResponseEntity.ok("Característica eliminada");
    }

    @GetMapping
    public ResponseEntity<List<Feature>> listarTodos() {
        return ResponseEntity.ok(service.listarTodos());
    }

    @GetMapping("/buscar/{id}")
    public ResponseEntity<Feature> buscar(@PathVariable Integer id){
        Optional<Feature> caracteristicaBuscada = service.buscar(id);
        if (caracteristicaBuscada.isPresent()){
            return ResponseEntity.ok(caracteristicaBuscada.get());
        }
        else{
            return ResponseEntity.status(HttpStatus.NOT_FOUND).build();
        }
    }

    @PutMapping("/actualizar")
    public ResponseEntity<Feature> actualizar(@RequestBody Feature feature) {
        ResponseEntity<Feature> response = null;

        if (feature.getId() != null && service.buscar(feature.getId()).isPresent())
            response = ResponseEntity.ok(service.editar(feature));
        else
            response = ResponseEntity.status(HttpStatus.NOT_FOUND).build();

        return response;
    }

}

