package com.proyecto.integrador.service;

import com.proyecto.integrador.model.Booking;
import com.proyecto.integrador.repository.BookingRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class BookingService {
    @Autowired
    BookingRepository repository;

    public Optional<Booking> buscar(Integer id){
        return repository.findById(id);
    }

    public List<Booking> listarTodos(){
        return repository.findAll();
    }

    public Booking agregar(Booking nuevaReserva){
        System.out.println(nuevaReserva);
        return repository.save(nuevaReserva);
    }

    public String eliminar(Integer id){
        Optional<Booking> reservaBuscada= buscar(id);
        if (reservaBuscada.isPresent()){
            repository.deleteById(id);
            return "Se eliminó la reserva con id: " + id;
        }
        else{
            return "No se pudo eliminar la reserva con id: " + id;
        }
    }

    public Booking editar(Booking b){
        Optional<Booking> reservaBuscada=buscar(b.getId());
        if (reservaBuscada.isPresent())
            return repository.save(b);
        else
            return null;
    }
}
