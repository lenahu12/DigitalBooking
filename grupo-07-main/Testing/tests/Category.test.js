import React from "react";
import "@testing-library/jest-dom/extend-expect";
import {
  render,
  screen,
} from "@testing-library/react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Category from "../components/Home/Category";


let component = null;
beforeEach(() => {
  component = render(
    <BrowserRouter>
      <Category />
    </BrowserRouter>
  );
  expect(component.container).toBeInTheDocument();
});


test("Renderizado de la imagen categoria", () => {
  expect(screen.getByRole("img")).toBeInTheDocument();
});


test("Cantidad de autos estáticos",() =>{
    expect(screen.getByText("25 Autos")).toBeInTheDocument();
});

