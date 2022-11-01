package com.proyecto.integrador.service;

import com.proyecto.integrador.model.City;
import com.proyecto.integrador.repository.CityRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class CityService {
    @Autowired
    CityRepository repository;

    public Optional<City> buscar(Integer id){
        return repository.findById(id);
    }

    public List<City> listarTodos(){
        return repository.findAll();
    }

    public City agregar(City nuevaCity){
        return repository.save(nuevaCity);
    }

    public String eliminar(Integer id){
        Optional<City> ciudadBuscada= buscar(id);
        if (ciudadBuscada.isPresent()){
            repository.deleteById(id);
            return "Se eliminó la ciudad con id: " + id;
        }
        else{
            return "No se pudo eliminar la ciudad con id: " + id;
        }
    }

    public City editar(City c){
        Optional<City> ciudadBuscada=buscar(c.getId());
        if (ciudadBuscada.isPresent())
            return repository.save(c);
        else
            return null;
    }
}
