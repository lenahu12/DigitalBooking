import React from "react";
import BrowserLayout from "../components/layouts/BrowserLayout";
import CardsLayout from "../components/layouts/CardsLayout";
import CategoryLayout from "../components/layouts/CategoryLayout";

const Home = () => {
  return (
    <>
      <BrowserLayout />
      <main>
        <CategoryLayout />
        <CardsLayout />
      </main>
    </>
  );
};

export default Home;
