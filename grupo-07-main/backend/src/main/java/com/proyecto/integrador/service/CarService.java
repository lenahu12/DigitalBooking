package com.proyecto.integrador.service;

import com.proyecto.integrador.model.Car;
import com.proyecto.integrador.model.Feature;
import com.proyecto.integrador.model.Image;
import com.proyecto.integrador.model.Policy;
import com.proyecto.integrador.repository.CarRepository;
import com.proyecto.integrador.repository.FeatureRepository;
import com.proyecto.integrador.repository.ImageRepository;
import com.proyecto.integrador.repository.PolicyRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;


@Service
public class CarService {

    @Autowired
    CarRepository repository;
    @Autowired
    ImageRepository imageRepository;
    @Autowired
    FeatureRepository featureRepository;
    @Autowired
    PolicyRepository policyRepository;

    public Optional<Car> buscar(Integer id){
        return repository.findById(id);
    }

    public List<Car> listarTodos(){
        return repository.findAll();
    }

    public void agregar(Car nuevoAuto){
        Car carDB =  repository.save(nuevoAuto);
        for (Image image: carDB.getImages()) {
            image.setCar(carDB);
            imageRepository.save(image);
            for (Feature feature: carDB.getFeatures()) {
                feature.setCar(carDB);
                featureRepository.save(feature);
                for (Policy policy: carDB.getPolicies()) {
                    policy.setCar(carDB);
                    policyRepository.save(policy);
                }
            }
        }
    }

    public String eliminar(Integer id){
        Optional<Car> autoBuscado= buscar(id);
        if (autoBuscado.isPresent()){
            repository.deleteById(id);
            return "Se eliminó el auto con id: " + id;
        }
        else{
            return "No se pudo eliminar el auto con id: " + id;
        }
    }
    
    public Car editar(Car a){
        Optional<Car> autoBuscado=buscar(a.getId());
        if (autoBuscado.isPresent())
            return repository.save(a);
        else
            return null;
    }

    public List<Car> buscarPorCategoria(Integer id){
        return repository.findByCategory(id);
    }

    public List<Car> buscarPorCiudad(Integer id){
        return repository.findByCity(id);
    }

    private String dateFormat(String fecha){
        String[] fechaIni = fecha.split("/");
        String iniMonth = fechaIni[0];
        String iniDay = fechaIni[1];
        String iniYear = fechaIni[2];
        return iniYear +"-"+iniMonth+"-"+iniDay;
    }

    public List<Car> buscarPorCiudadyFechas(Integer ciudad, String fechaInicio, String fechaFin){
        String fechaInicioParseada = dateFormat(fechaInicio);
        String fechaFinParseada = dateFormat(fechaFin);
        return repository.findByDatesAndCity(ciudad, fechaInicioParseada, fechaFinParseada);
    }

    public List<Car> buscarPorFechas(String fechaInicio, String fechaFin){
        String fechaInicioParseada = dateFormat(fechaInicio);
        String fechaFinParseada = dateFormat(fechaFin);
        return repository.findByDates(fechaInicioParseada, fechaFinParseada);
    }

    public List<Car> filtroCiudadFechaInicio(Integer id_ciudad, String fechaInicio){
        String fechaInicioParseada = dateFormat(fechaInicio);
        return repository.findByCityAndStartDate(id_ciudad, fechaInicioParseada);
    }

    public List<Car> filtroFechaInicio(String fechaInicio){
        String fechaInicioParseada = dateFormat(fechaInicio);
        return repository.findByStartDate(fechaInicioParseada);
    }

}
