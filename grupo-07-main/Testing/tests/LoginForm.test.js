import React from "react";
import '@testing-library/jest-dom/extend-expect';
import {render, screen, act, fireEvent, cleanup} from '@testing-library/react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginForm from "../components/Login/LoginForm";


let component = null;
beforeEach(()=>{
    component = render(
        <BrowserRouter>
         <LoginForm />
        </BrowserRouter>
    )
    expect(component.container).toBeInTheDocument();
});

test("Iniciar Sesion",() =>{
    expect(screen.getAllByText("Iniciar Sesion")).toHaveLength(2);
});
