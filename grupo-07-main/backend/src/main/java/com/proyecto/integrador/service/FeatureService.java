package com.proyecto.integrador.service;

import com.proyecto.integrador.model.Feature;
import com.proyecto.integrador.repository.FeatureRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class FeatureService {
    @Autowired
    FeatureRepository repository;

    public Optional<Feature> buscar(Integer id){
        return repository.findById(id);
    }

    public List<Feature> listarTodos(){
        return repository.findAll();
    }

    public Feature agregar(Feature nuevaCaracteristica){
        return repository.save(nuevaCaracteristica);
    }

    public String eliminar(Integer id){
        Optional<Feature> caracteristicaBuscada= buscar(id);
        if (caracteristicaBuscada.isPresent()){
            repository.deleteById(id);
            return "Se eliminó la característica con id: " + id;
        }
        else{
            return "No se pudo eliminar la característica con id: " + id;
        }
    }

    public Feature editar(Feature c){
        Optional<Feature> caracteristicaBuscada=buscar(c.getId());
        if (caracteristicaBuscada.isPresent())
            return repository.save(c);
        else
            return null;
    }
}
