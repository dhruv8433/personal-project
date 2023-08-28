import { FavoriteBorder, Share } from "@mui/icons-material";
import { Box, Button, Divider, IconButton, Typography } from "@mui/material";
import React, { useState } from "react";
import { toast } from "react-toastify";

const Product = ({ data }) => {
  const [existingCartData, setExistingCartData] = useState([]);
  // when user click on add button
  const handleClick = (productData) => {
    const Cart = localStorage.getItem("Cart");

    if (Cart) {
      const existingCartData = JSON.parse(localStorage.getItem("Cart")) || [];
      setExistingCartData(existingCartData);

      // Check if the product is already in the cart based on its id
      const isProductInCart = existingCartData.some(
        (item) => item.id === productData.id
      );

      if (isProductInCart) {
        toast.info("Product is already in the cart.");
        return;
      }
    }
    setExistingCartData(data)
    // Add the new product data to the array
    existingCartData.push(productData);

    // Update local storage with the updated array
    localStorage.setItem("Cart", JSON.stringify(existingCartData));

    toast.success("Product added to cart!");
  };

  const availableSoon = () => {
    toast.info("This Feature Available Soon");
  };

  return (
    <Box
      overflow={"hidden"}
      mb={1}
      border={"1px solid"}
      width={"max-content"}
      p={2}
      borderRadius={2}
      sx={{ background: "white", cursor: "pointer" }}
    >
      <Box
        width={200}
        flexWrap={"wrap"}
        height={200}
        justifyContent={"center"}
        display={"flex"}
        alignItems={"center"}
      >
        <img
          src={data.image}
          style={{ maxHeight: "100%", maxWidth: "100%" }}
          alt="Product Image"
        />
      </Box>
      <Box>
        <Typography
          variant="subtitle1"
          flexWrap={"wrap"}
          component="div"
          sx={{ lineHeight: 1.2 }}
        >
          <strong>{data.name}</strong>
        </Typography>
        <Typography className="product-price">${data.price}</Typography>
        <Typography>{data.desc}</Typography>
      </Box>
      <Box
        display={"flex"}
        justifyContent={"space-between"}
        border={"1px dashed"}
      >
        <IconButton onClick={availableSoon}>
          <FavoriteBorder />
        </IconButton>
        <Divider flexItem orientation="vertical" sx={{ height: "inherit" }} />
        <Button fullWidth onClick={() => handleClick(data)}>
          Add
        </Button>
        <Divider flexItem orientation="vertical" sx={{ height: "inherit" }} />
        <IconButton onClick={availableSoon}>
          <Share />
        </IconButton>
      </Box>
    </Box>
  );
};

export default Product;
