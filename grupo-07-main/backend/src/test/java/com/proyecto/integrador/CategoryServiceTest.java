/*
package com.proyecto.integrador;

import com.proyecto.integrador.model.Category;
import com.proyecto.integrador.service.CategoryService;
import org.junit.FixMethodOrder;
import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.Test;
import org.junit.runners.MethodSorters;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import java.util.List;

import static org.junit.jupiter.api.Assertions.assertFalse;
import static org.junit.jupiter.api.Assertions.assertNotNull;


@FixMethodOrder(MethodSorters.NAME_ASCENDING)
@SpringBootTest
public class CategoryServiceTest {
    @Autowired
    CategoryService service;

    @Test
    public void agregarCategoria(){
        Category cat1 = new Category(0,"Categoria","prueba1","imagenPrueba1");
        assertNotNull(cat1.getId());
    }

    @Test
    public void buscar(){
        assertNotNull(service.buscar(0));
    }

    @Test
    public void listarTodos(){
        List<Category> categorias= service.listarTodos();
        assertFalse(categorias.isEmpty());
        System.out.println(categorias);
    }

    @Test
    public void eliminarCategoriaTest(){
        service.eliminar(0);
        Assertions.assertFalse(service.buscar(0).isPresent());
    }

    @Test
    public void editar(){
        Category cat1 = new Category(0,"Modificado","prueba1","imagenPrueba1");
        service.editar(cat1);
    }

}

*/
