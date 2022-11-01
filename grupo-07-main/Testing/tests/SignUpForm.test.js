import React from "react";
import '@testing-library/jest-dom/extend-expect';
import {render, screen, act, fireEvent, cleanup} from '@testing-library/react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignUpForm from "../components/SignUp/SignUpForm";


let component = null;
beforeEach(()=>{
    component = render(
        <BrowserRouter>
         <SignUpForm />
        </BrowserRouter>
    )
    expect(component.container).toBeInTheDocument();
});

test("Terminos y condiciones",() =>{
    expect(screen.getByText("Al hacer clic en el botón Registrarse, acepta nuestros Términos y Condiciones")).toBeInTheDocument();
});

test("Label ingresar",() =>{
    expect(screen.getByText("¿Ya tienes una cuenta?")).toBeInTheDocument();
});

test("Label ingresar2",() =>{
    expect(screen.getByText("Entra aquí")).toBeInTheDocument();
});

test("Label apellido",() =>{
    expect(screen.getByText("Apellido")).toBeInTheDocument();
});

test("Label nombre",() =>{
    expect(screen.getByText("Nombre")).toBeInTheDocument();
});

test("titulo",() =>{
    expect(screen.getByText("Por favor, complete este formulario para crear una cuenta.")).toBeInTheDocument();
});
