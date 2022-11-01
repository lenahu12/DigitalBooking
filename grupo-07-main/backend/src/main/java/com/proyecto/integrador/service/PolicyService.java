package com.proyecto.integrador.service;

import com.proyecto.integrador.model.Policy;
import com.proyecto.integrador.repository.PolicyRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class PolicyService {
    @Autowired
    PolicyRepository repository;

    public Optional<Policy> buscar(Integer id){
        return repository.findById(id);
    }

    public List<Policy> listarTodos(){
        return repository.findAll();
    }

    public Policy agregar(Policy nuevaPolitica){
        return repository.save(nuevaPolitica);
    }

    public String eliminar(Integer id){
        Optional<Policy> politicaBuscada= buscar(id);
        if (politicaBuscada.isPresent()){
            repository.deleteById(id);
            return "Se eliminó la politica con id: " + id;
        }
        else{
            return "No se pudo eliminar la politica con id: " + id;
        }
    }

    public Policy editar(Policy c){
        Optional<Policy> politicaBuscada=buscar(c.getId());
        if (politicaBuscada.isPresent())
            return repository.save(c);
        else
            return null;
    }
}