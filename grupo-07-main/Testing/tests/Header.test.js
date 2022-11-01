import React from "react";
import '@testing-library/jest-dom/extend-expect';
import {render, screen, act, fireEvent, cleanup} from '@testing-library/react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "../components/Global/Header";


let component = null;
beforeEach(()=>{
    component = render(
        <BrowserRouter>
         <Header />
        </BrowserRouter>
    )
    expect(component.container).toBeInTheDocument();
});


describe('Logo funcional', () => { 
    test('Renderizado del logo', () => {
        expect(screen.getByRole('img')).toBeInTheDocument();
    });

    test('onClick logo', async () =>{
        const button = screen.getByAltText('main-logo');
            act(() =>{
                fireEvent.click(button);
            });

        expect(component.container).toHaveTextContent('Iniciar Sesión');
        expect(component.container).toHaveTextContent('Crear Cuenta');
    });

    test('Renderizado de botones Iniciar Sesión y Crear Cuenta', () => {
        const buttons = screen.getAllByRole("button");
        expect(buttons).toHaveLength(4);
    })
});