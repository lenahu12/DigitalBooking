import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../views/Home";
import SignUp from "../views/SignUp";
import Login from "../views/Login";
import HomeLogged from "../views/HomeLogged";
import Product from "../views/Product";
import Booking from "../views/Booking";
import { CategoryProvider } from "../context/Category/CategoryContext";
import { ReservationProvider } from "../context/Reservation/ReservationContext";
import { CityProvider }  from "../context/City/CityContext";
import { BrowserCalendarProvider } from "../context/BrowserCalendar/BrowserCalendarContext";
import Admin from "../views/Admin";
import { CreateCarProvider } from "../context/Admin/CreateCarContext";
import { CreatePoliciesProvider } from "../context/Admin/CreatePoliciesContext";
import { AddImagesProvider } from "../context/Admin/AddImagesContext";
import { AddFeaturesProvider } from "../context/Admin/AddFeaturesContext";


const Routing = () => {
  return (
      <CategoryProvider>
        <CityProvider>
          <BrowserCalendarProvider>
            <ReservationProvider>
              <CreateCarProvider>
                <CreatePoliciesProvider>
                  <AddImagesProvider>
                    <AddFeaturesProvider>
                      <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/administracion" element={<Admin/>}/>
                        <Route path="/signup" element={<SignUp />} />
                        <Route path="/login" element={<Login />} />
                        <Route path="/home-logged" element={<HomeLogged />} />
                        <Route path="/autos/:productId" element={<Product />} />
                        <Route path="/autos/:productId/reserva" element={<Booking />} />
                        <Route path="*" element={<Home />} />
                      </Routes>
                    </AddFeaturesProvider>
                  </AddImagesProvider>
                </CreatePoliciesProvider>
              </CreateCarProvider>
            </ReservationProvider>
          </BrowserCalendarProvider>
        </CityProvider>
      </CategoryProvider>
  );
};

export default Routing;
