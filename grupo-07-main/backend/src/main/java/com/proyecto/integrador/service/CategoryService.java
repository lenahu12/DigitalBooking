package com.proyecto.integrador.service;

import com.proyecto.integrador.model.Category;
import com.proyecto.integrador.repository.CategoryRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


import java.util.List;
import java.util.Optional;

@Service
public class CategoryService {
    @Autowired
    CategoryRepository repository;

    public Optional<Category> buscar(Integer id){
        return repository.findById(id);
    }

    public List<Category> listarTodos(){
        return repository.findAll();
    }

    public Category agregar(Category nuevaCategory){
        return repository.save(nuevaCategory);
    }

    public String eliminar(Integer id){
        Optional<Category> categoriaBuscada= buscar(id);
        if (categoriaBuscada.isPresent()){
            repository.deleteById(id);
            return "Se eliminó la categoria con id: " + id;
        }
        else{
            return "No se pudo eliminar la categoria con id: " + id;
        }
    }

    public Category editar(Category c){
        Optional<Category> categoriaBuscada=buscar(c.getId());
        if (categoriaBuscada.isPresent())
            return repository.save(c);
        else
            return null;
    }

}
