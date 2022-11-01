package com.proyecto.integrador.controller;

import com.proyecto.integrador.model.Booking;
import com.proyecto.integrador.service.BookingService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Date;
import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/reservas")
public class BookingController {
    @Autowired
    BookingService service;

    @PostMapping("/agregar")
    public String agregar(@RequestBody Booking booking) {
        service.agregar(booking);
        return "Reserva agregada con exito";
    }

    @DeleteMapping("/eliminar/{id}")
    public ResponseEntity<String> eliminar(@PathVariable Integer id){
        service.eliminar(id);
        return ResponseEntity.ok("Reserva eliminada");
    }

    @GetMapping
    public ResponseEntity<List<Booking>> listarTodos() {
        return ResponseEntity.ok(service.listarTodos());
    }

    @GetMapping("/buscar/{id}")
    public ResponseEntity<Booking> buscar(@PathVariable Integer id){
        Optional<Booking> reservaBuscada = service.buscar(id);
        if (reservaBuscada.isPresent()){
            return ResponseEntity.ok(reservaBuscada.get());
        }
        else{
            return ResponseEntity.status(HttpStatus.NOT_FOUND).build();
        }
    }

    @PutMapping("/actualizar")
    public ResponseEntity<Booking> actualizar(@RequestBody Booking booking) {
        ResponseEntity<Booking> response = null;

        if (booking.getId() != null && service.buscar(booking.getId()).isPresent())
            response = ResponseEntity.ok(service.editar(booking));
        else
            response = ResponseEntity.status(HttpStatus.NOT_FOUND).build();

        return response;
    }
}
