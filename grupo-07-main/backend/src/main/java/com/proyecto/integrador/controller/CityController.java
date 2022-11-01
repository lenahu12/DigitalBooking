package com.proyecto.integrador.controller;

import com.proyecto.integrador.model.City;
import com.proyecto.integrador.service.CityService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/ciudades")

public class CityController {

    @Autowired
    CityService service;

    @PostMapping("/agregar")
    public String agregar(@RequestBody City city) {
        service.agregar(city);
        return "Ciudad agregada con exito";
    }

    @DeleteMapping("/eliminar/{id}")
    public ResponseEntity<String> eliminar(@PathVariable Integer id){
        service.eliminar(id);
        return ResponseEntity.ok("Ciudad eliminada");
    }

    @GetMapping
    public ResponseEntity<List<City>> listarTodos() {
        return ResponseEntity.ok(service.listarTodos());
    }

    @GetMapping("/buscar/{id}")
    public ResponseEntity<City> buscar(@PathVariable Integer id){
        Optional<City> ciudadBuscada = service.buscar(id);
        if (ciudadBuscada.isPresent()){
            return ResponseEntity.ok(ciudadBuscada.get());
        }
        else{
            return ResponseEntity.status(HttpStatus.NOT_FOUND).build();
        }
    }

    @PutMapping("/actualizar")
    public ResponseEntity<City> actualizar(@RequestBody City city) {
        ResponseEntity<City> response = null;

        if (city.getId() != null && service.buscar(city.getId()).isPresent())
            response = ResponseEntity.ok(service.editar(city));
        else
            response = ResponseEntity.status(HttpStatus.NOT_FOUND).build();

        return response;
    }
}
