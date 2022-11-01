package com.proyecto.integrador.repository;

import com.proyecto.integrador.model.Car;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;


@Repository
public interface CarRepository extends JpaRepository<Car, Integer> {

    @Query(value="SELECT * FROM cars c WHERE c.category_id = ?1", nativeQuery = true)
   List<Car> findByCategory(Integer id);

   @Query(value="SELECT * FROM cars c WHERE c.city_id = ?1", nativeQuery = true)
   List<Car> findByCity(Integer id);

    @Query(value="SELECT * FROM cars WHERE cars.city_id = ?1 AND cars.id NOT IN (SELECT bookings.car_id FROM bookings WHERE (bookings.start_date BETWEEN ?2 AND ?3) OR (bookings.end_date BETWEEN ?2 AND ?3) OR (?2 BETWEEN bookings.start_date AND bookings.end_date) OR (?3 BETWEEN bookings.start_date AND bookings.end_date))", nativeQuery = true)
    List<Car> findByDatesAndCity(Integer ciudad, String fechaInicio, String fechaFin);

    @Query(value="SELECT * FROM cars c WHERE c.city_id = ?1 AND NOT EXISTS (SELECT * from bookings b WHERE b.car_id = c.id AND (?2 BETWEEN b.start_date AND b.end_date))", nativeQuery = true)
    List<Car> findByCityAndStartDate(Integer ciudad, String fechaInicio);


    @Query(value="SELECT * FROM cars WHERE cars.id NOT IN (SELECT bookings.car_id FROM bookings WHERE (bookings.start_date BETWEEN ?1 AND ?2) OR (bookings.end_date BETWEEN ?1 AND ?2) OR (?1 BETWEEN bookings.start_date AND bookings.end_date) OR (?2 BETWEEN bookings.start_date AND bookings.end_date))", nativeQuery = true)
    List<Car> findByDates(String fechaInicio, String fechaFin);

    @Query(value="SELECT * FROM cars c WHERE NOT EXISTS (SELECT * from bookings b WHERE b.car_id = c.id AND (?1 BETWEEN b.start_date AND b.end_date))", nativeQuery = true)
    List<Car> findByStartDate(String fechaInicio);

}
