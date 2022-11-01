package com.proyecto.integrador.service;

import com.proyecto.integrador.model.Rating;
import com.proyecto.integrador.repository.RatingRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class RatingService {

    @Autowired
    RatingRepository repository;

    public Optional<Rating> buscar(Integer id){
        return repository.findById(id);
    }

    public List<Rating> listarTodos(){
        return repository.findAll();
    }

    public Rating agregar(Rating nuevaRating){
        return repository.save(nuevaRating);
    }

    public String eliminar(Integer id){
        Optional<Rating> RatingBuscada= buscar(id);
        if (RatingBuscada.isPresent()){
            repository.deleteById(id);
            return "Se eliminó la Puntuacion con id: " + id;
        }
        else{
            return "No se pudo eliminar la Puntuacion con id: " + id;
        }
    }

    public Rating editar(Rating c){
        Optional<Rating> RatingBuscada=buscar(c.getId());
        if (RatingBuscada.isPresent())
            return repository.save(c);
        else
            return null;
    }

}
