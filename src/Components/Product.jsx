import { FavoriteBorder, Share, Visibility } from "@mui/icons-material";
import { Backdrop, Box, Button, Divider, IconButton, Typography } from "@mui/material";
import React, { useState } from "react";
import { toast } from "react-toastify";
import DetailedPage from "../Backdrop/DetailedPage";

const Product = ({ data }) => {
  const [existingCartData, setExistingCartData] = useState([]);
  const [detailed, setDetailed] = useState(false);

  // when user click on add button
  const handleClick = (productData) => {
    const cartData = JSON.parse(localStorage.getItem("Cart")) || [];

    // Check if the product is already in the cart based on its id
    const isProductInCart = cartData.some((item) => item.id === productData.id);

    if (isProductInCart) {
      toast.info("Product is already in the cart.");
      return;
    }

    // Add the new product data to the cart data
    cartData.push(productData);

    // Update local storage with the updated cart data
    localStorage.setItem("Cart", JSON.stringify(cartData));

    // Update the state to trigger a re-render
    setExistingCartData(cartData);

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
      <Box position={"absolute"} ml={"11%"} mt={"-6px"}>
        <IconButton onClick={() => setDetailed(true)} sx={{border: "1px solid"}} size="small">
          <Visibility />
        </IconButton>
      </Box>
      <Backdrop open={detailed} sx={{zIndex: 100}}>
        <DetailedPage response={data} closeBackdrop={setDetailed}/>
      </Backdrop>
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
