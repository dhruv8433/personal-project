import { CloseOutlined, DeleteRounded } from "@mui/icons-material";
import { Box, Button, Divider, IconButton, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import ProductCard from "../Components/ProductCard";
import { toast } from "react-toastify";

const Cart = ({ setOpen }) => {
  const [cartInfo, setCartInfo] = useState([]);
  const data = localStorage.getItem("Cart");

  useEffect(() => {
    if (data) {
      const parsedData = JSON.parse(data);
      setCartInfo(parsedData);
    }
  }, [data]);

  const placeOrder = () => {
    localStorage.setItem("Cart", "");
    toast.success("Order Placed Success");
  };
  return (
    <div>
      <Box width={400} p={1}>
        <Box
          display={"flex"}
          justifyContent={"space-between"}
          alignItems={"center"}
        >
          <Typography variant="h6">Cart</Typography>
          <IconButton onClick={() => setOpen(false)}>
            <CloseOutlined />
          </IconButton>
        </Box>
        <Divider />
        <Box mt={2}>
          {cartInfo.length > 0 ? (
            cartInfo.map((response) => {
              console.log(response);
              return <ProductCard response={response} />;
            })
          ) : (
            <Box display={"flex"} justifyContent={"center"} textAlign={"center"} alignItems={"center"} height={"90vh"}>
              <img src="https://cdn.dribbble.com/users/2370289/screenshots/6150406/media/22ba45c9f91f27e65e90668eac2a92b5.jpg" height={"200px"} />
            </Box>
          )}
          <Box>
            {cartInfo.length > 0 ? (
              <Button fullWidth variant="outlined" onClick={() => placeOrder()}>
                Checkout
              </Button>
            ) : (
              ""
            )}
          </Box>
        </Box>
      </Box>
    </div>
  );
};

export default Cart;
