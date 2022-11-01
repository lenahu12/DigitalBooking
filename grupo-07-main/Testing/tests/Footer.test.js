import React from "react";
import '@testing-library/jest-dom/extend-expect';
import {render, screen, act, fireEvent, cleanup} from '@testing-library/react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "../components/Global/Footer";

let component = null;
beforeEach(()=>{
    component = render(
        <BrowserRouter>
         <Footer />
        </BrowserRouter>
    )
    expect(component.container).toBeInTheDocument();
});

test('Renderizado del footer', () => {
    const component = render(<Footer />);
    expect(component.container).toBeInTheDocument();
});

test('Correcto texto en footer', () => {
    expect(screen.getByText('©2021 DigitalBooking')).toBeInTheDocument();
});