import React from "react";
import { BrowserRouter } from "react-router-dom";
import HeaderFooterLayout from "./components/layouts/HeaderFooterLayout";
import Routing from "./routes/Routing";
import "./styles/global.css"
import "react-calendar/dist/Calendar.css";
import "./styles/Responsive/desktop.css"
import "./styles/Responsive/tablet.css"
import "./styles/Responsive/middle.css"
import "./styles/Responsive/mobile.css"
import { UserProvider } from "./context/User/UserContext";
import { CarProvider } from "./context/Car/CarContext";

const App = () => {
  return (
    <BrowserRouter>
      <UserProvider>
        <CarProvider>
        <HeaderFooterLayout children={<Routing />} />
        </CarProvider>
      </UserProvider>
    </BrowserRouter>
  );
};

export default App;
