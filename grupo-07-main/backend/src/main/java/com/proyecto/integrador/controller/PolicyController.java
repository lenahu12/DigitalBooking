package com.proyecto.integrador.controller;

import com.proyecto.integrador.model.Policy;
import com.proyecto.integrador.service.PolicyService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/politicas")

public class PolicyController {

    @Autowired
    PolicyService service;

    @PostMapping("/agregar")
    public String agregar(@RequestBody Policy policy) {
        service.agregar(policy);
        return "Politica agregada con exito";
    }

    @DeleteMapping("/eliminar/{id}")
    public ResponseEntity<String> eliminar(@PathVariable Integer id){
        service.eliminar(id);
        return ResponseEntity.ok("Politica eliminada");
    }

    @GetMapping
    public ResponseEntity<List<Policy>> listarTodos() {
        return ResponseEntity.ok(service.listarTodos());
    }

    @GetMapping("/buscar/{id}")
    public ResponseEntity<Policy> buscar(@PathVariable Integer id){
        Optional<Policy> politicaBuscada = service.buscar(id);
        if (politicaBuscada.isPresent()){
            return ResponseEntity.ok(politicaBuscada.get());
        }
        else{
            return ResponseEntity.status(HttpStatus.NOT_FOUND).build();
        }
    }

    @PutMapping("/actualizar")
    public ResponseEntity<Policy> actualizar(@RequestBody Policy policy) {
        ResponseEntity<Policy> response = null;

        if (policy.getId() != null && service.buscar(policy.getId()).isPresent())
            response = ResponseEntity.ok(service.editar(policy));
        else
            response = ResponseEntity.status(HttpStatus.NOT_FOUND).build();

        return response;
    }

}
