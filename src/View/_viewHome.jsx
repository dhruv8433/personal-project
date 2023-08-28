import React from "react";
import Home from "../Components/Home";
import { Container } from "@mui/material";
import Products from "../Components/Products";
import Advertisement from "../Components/Advertisement ";

const _viewHome = () => {
  return (
    <>
      <Container>
        <Home />
      </Container>
      <Products />
      <Advertisement />
    </>
  );
};

export default _viewHome;
