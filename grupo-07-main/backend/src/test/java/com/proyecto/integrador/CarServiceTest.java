/*package com.proyecto.integrador;

import com.proyecto.integrador.model.Car;
import com.proyecto.integrador.model.Category;
import com.proyecto.integrador.service.CarService;
import com.proyecto.integrador.service.CategoryService;
import org.junit.FixMethodOrder;
import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.Test;
import org.junit.runners.MethodSorters;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import static org.junit.jupiter.api.Assertions.assertFalse;
import static org.junit.jupiter.api.Assertions.assertNotNull;


import java.util.List;

@FixMethodOrder(MethodSorters.NAME_ASCENDING)
@SpringBootTest
public class CarServiceTest {
    @Autowired
    CarService service;

    @Autowired
    CategoryService categoryService;

    @Test
    public void agregarCategoria(){
        Category cat1 = categoryService.agregar(new Category(0,"cat1","descripcion","UrlImagen"));

        Car auto1 = service.agregar(new Car(0,"Fiat1","abc123","4puertas",true));
        assertNotNull(auto1.getId());
    }

    @Test
    public void buscar(){
        assertNotNull(service.buscar(0));
    }

    @Test
    public void listarTodos(){
        Category cat1 = categoryService.agregar(new Category(0,"cat1","descripcion","UrlImagen"));

        Car auto1 = service.agregar(new Car(0,"Fiat1","abc123","4puertas",true));
        List<Car> autos= service.listarTodos();
        assertFalse(autos.isEmpty());
        System.out.println(autos);
    }

    @Test
    public void eliminar(){
        service.eliminar(0);
        Assertions.assertFalse(service.buscar(0).isPresent());
    }

    @Test
    public void editar(){
        Category cat1 = categoryService.agregar(new Category(0,"cat1","descripcion","UrlImagen"));

        Car auto1 = service.agregar(new Car(0,"Fiat1","abc123","4puertas",true));

        service.editar(auto1);
    }

}*/

