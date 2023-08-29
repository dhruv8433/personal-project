import { CloseRounded, ShoppingBagOutlined } from "@mui/icons-material";
import {
  Box,
  Button,
  Divider,
  Grid,
  IconButton,
  Typography,
} from "@mui/material";
import React from "react";
import { toast } from "react-toastify";
import { FavoriteBorder, Share } from "@mui/icons-material";

const DetailedPage = ({ response, closeBackdrop }) => {
    
  const handleClick = (productData) => {
    const cartItem = localStorage.getItem("Cart");
    if (cartItem === null) {
      // If the cart is empty, initialize cartData as an empty array
      const cartData = [];
      cartData.push(productData);

      localStorage.setItem("Cart", JSON.stringify(cartData));
      toast.success("Product added to cart!");
    } else {
      const cartData = JSON.parse(cartItem);

      // Check if the product is already in the cart based on its id
      const isProductInCart = cartData.some(
        (item) => item.id === productData.id
      );

      if (isProductInCart) {
        toast.info("Product is already in the cart.");
        return;
      }

      // Add the new product data to the cart data
      cartData.push(productData);

      // Update local storage with the updated cart data
      localStorage.setItem("Cart", JSON.stringify(cartData));
      toast.success("Product added to cart!");
    }
  };

  const avaiilableSoon = () => {
    toast.info("This Feature Available Soon");
  };

  return (
    <div>
      <Box
        width={800}
        height={500}
        sx={{ background: "white", borderRadius: "10px" }}
      >
        <Box
          display={"flex"}
          justifyContent={"space-between"}
          alignItems={"center"}
          px={1}
        >
          <Typography>Detailed Information</Typography>
          <IconButton onClick={() => closeBackdrop(false)}>
            <CloseRounded />
          </IconButton>
        </Box>
        <Divider />
        <Grid container sx={{ height: "100%" }}>
          <Grid item xs={12} md={6}>
            <Box mt={1} alignItems={"center"} height={"100%"}>
              <img
                src={response.image}
                height={"100%"}
                width={"100%"}
                style={{ objectFit: "contain" }}
              />
            </Box>
          </Grid>
          <Grid item xs={12} md={6}>
            <Box mt={2}>
              <Typography variant="h4">{response.name}</Typography>
              <Typography variant="h5" color={"blue"}>
                ${response.price}
              </Typography>
            </Box>
            <Box mt={2}>
              <Typography>{response.description}</Typography>
              <Typography>Rating : 5</Typography>
            </Box>

            <Box p={1} mt={2}>
              <Button
                fullWidth
                variant="outlined"
                sx={{ mb: 2 }}
                endIcon={<FavoriteBorder />}
                onClick={avaiilableSoon}
              >
                Like
              </Button>
              <Button
                fullWidth
                variant="outlined"
                sx={{ mb: 2 }}
                endIcon={<ShoppingBagOutlined />}
                onClick={() => handleClick(response)}
              >
                ADD
              </Button>
              <Button
                fullWidth
                variant="outlined"
                sx={{ mb: 2 }}
                endIcon={<Share />}
                onClick={avaiilableSoon}
              >
                SHARE
              </Button>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
};

export default DetailedPage;
