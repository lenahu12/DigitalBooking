import React from "react";
import Browser from "../components/layouts/BrowserLayout";
import CardsLayout from "../components/layouts/CardsLayout";
import CategoryLayout from "../components/layouts/CategoryLayout";

const HomeLogged = () => {
  return (
    <>
      <Browser />
      <main>
        <CategoryLayout />
        <CardsLayout />
      </main>
    </>
  );
};

export default HomeLogged;
