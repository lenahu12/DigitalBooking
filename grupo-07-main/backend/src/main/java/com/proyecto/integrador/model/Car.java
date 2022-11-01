package com.proyecto.integrador.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.*;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter

@Entity
@Table(name = "cars")

public class Car {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    @Column
    private String title;
    @Column
    private String license_plate;
    @Column
    private String description;
    @Column
    private String position;

    @ManyToOne
    @JoinColumn(name = "city_id")
    private City city;

    @ManyToOne
    @JoinColumn(name = "category_id")
    private Category category;

    @OneToMany(mappedBy = "car", cascade = CascadeType.ALL)
    private List<Image> images;

    @OneToMany(mappedBy = "car", fetch = FetchType.LAZY)
    private List<Rating> ratings;

    @OneToMany(mappedBy = "car", cascade = CascadeType.ALL)
    private List<Policy> policies;

    @OneToMany(mappedBy = "car", cascade = CascadeType.ALL)
    private List<Feature> features;

    @OneToMany(mappedBy = "car", fetch = FetchType.LAZY)
    private List<Booking> bookings = new ArrayList<>();

}
