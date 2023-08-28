import React from "react";
import { BrowserRouter, Route, Routes as RoutesNav } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import AboutPage from "./Pages/AboutPage";
import ContactPage from "./Pages/ContactPage";

const Routes = () => {
  return (
    <div>
      <BrowserRouter>
        <RoutesNav>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </RoutesNav>
      </BrowserRouter>
    </div>
  );
};

export default Routes;
