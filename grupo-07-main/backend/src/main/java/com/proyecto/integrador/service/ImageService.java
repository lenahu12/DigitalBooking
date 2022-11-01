package com.proyecto.integrador.service;

import com.proyecto.integrador.model.Image;
import com.proyecto.integrador.repository.ImageRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ImageService {
    @Autowired
    ImageRepository repository;

    public Optional<Image> buscar(Integer id){
        return repository.findById(id);
    }

    public List<Image> listarTodos(){
        return repository.findAll();
    }

    public Image agregar(Image nuevaImagen){
        return repository.save(nuevaImagen);
    }

    public String eliminar(Integer id){
        Optional<Image> ImagenBuscada= buscar(id);
        if (ImagenBuscada.isPresent()){
            repository.deleteById(id);
            return "Se eliminó la Imagen con id: " + id;
        }
        else{
            return "No se pudo eliminar la Imagen con id: " + id;
        }
    }

    public Image editar(Image c){
        Optional<Image> ImagenBuscada=buscar(c.getId());
        if (ImagenBuscada.isPresent())
            return repository.save(c);
        else
            return null;
    }
    public List<Image> traerImagenes(Integer Car_id){
        return repository.findImages(Car_id);
    }
}
