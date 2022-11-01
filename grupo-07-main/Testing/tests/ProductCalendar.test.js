import React from "react";
import '@testing-library/jest-dom/extend-expect';
import {render, screen, act, fireEvent, cleanup} from '@testing-library/react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProductCalendar from "../components/Products/ProductCalendar";


let component = null;
beforeEach(()=>{
    component = render(
        <BrowserRouter>
         <ProductCalendar />
        </BrowserRouter>
    )
    expect(component.container).toBeInTheDocument();
});

test('Titulo correcto', () => {
    expect(screen.getByText('Fechas disponibles')).toBeInTheDocument();
});

test('Texto correcto', () => {
    expect(screen.getByText('Agregá tus fechas de viaje para obtener precios exactos')).toBeInTheDocument();
});

