package com.proyecto.integrador.controller;

import com.proyecto.integrador.model.Car;
import com.proyecto.integrador.service.CarService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import java.util.List;
import java.util.Optional;


@RestController
@RequestMapping("/autos")
public class CarController {

    @Autowired
    CarService autoService;


    @PostMapping("/agregar")
    public String agregar(@RequestBody Car auto) {
        autoService.agregar(auto);
        return "Auto creado con id: " + auto.getId();
    }

    @DeleteMapping("/eliminar/{id}")
    public ResponseEntity<String> eliminar(@PathVariable Integer id){
        autoService.eliminar(id);
        return ResponseEntity.ok("Auto eliminado");
    }

    @GetMapping
    public ResponseEntity<List<Car>> listarTodos() {
        return ResponseEntity.ok(autoService.listarTodos());
    }


    @GetMapping("/buscar/{id}")
    public ResponseEntity<Car> buscar(@PathVariable Integer id){
        Optional<Car> autoBuscado = autoService.buscar(id);
        return autoBuscado.map(ResponseEntity::ok).orElseGet(() -> ResponseEntity.status(HttpStatus.NOT_FOUND).build());
    }

    @PutMapping("/actualizar")
    public ResponseEntity<Car> actualizar(@RequestBody Car auto) {
        if (auto.getId() != null && autoService.buscar(auto.getId()).isPresent())
           return ResponseEntity.ok(autoService.editar(auto));
        else
             return ResponseEntity.status(HttpStatus.NOT_FOUND).build();

    }

    @GetMapping("/filtroCategoria/{idCat}")
    public ResponseEntity<List<Car>> buscarPorCategoria(@PathVariable Integer idCat){
        return ResponseEntity.ok(autoService.buscarPorCategoria(idCat));
    }



    @GetMapping("/filtroCiudad/{idCiudad}")
    public ResponseEntity<List<Car>> buscarPorCiudad(@PathVariable Integer idCiudad){
        return ResponseEntity.ok(autoService.buscarPorCiudad(idCiudad));
    }

    @GetMapping("/filtrar")
    public ResponseEntity<List<Car>> filtroMultiple(@RequestParam(required = false) Integer ciudad, @RequestParam(required = false) String fechaInicio, @RequestParam(required = false) String fechaFin) {
        if(ciudad != null){
            if((fechaInicio != null)&&(fechaFin != null)){
                return ResponseEntity.ok(autoService.buscarPorCiudadyFechas(ciudad,fechaInicio,fechaFin));
            }else if((fechaInicio != null)){
                return ResponseEntity.ok(autoService.filtroCiudadFechaInicio(ciudad, fechaInicio));
            }else{
                return ResponseEntity.ok(autoService.buscarPorCiudad(ciudad));
            }
        }else if((fechaInicio != null)&&(fechaFin != null)){
            return ResponseEntity.ok(autoService.buscarPorFechas(fechaInicio, fechaFin));
        }else if(fechaInicio != null){
            return ResponseEntity.ok(autoService.filtroFechaInicio(fechaInicio));
        }else{
            return null;
        }
    }
}
