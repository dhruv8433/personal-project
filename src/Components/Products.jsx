import React, { useState } from "react";
import Product from "../Components/Product";
import ProductsDetails from "../JSON/Product.json";
import {
  Box,
  Button,
  Container,
  Divider,
  Grid,
  Typography,
} from "@mui/material";

const Products = () => {
  const [allProduct, setAllProduct] = useState(false);
  return (
    <div className="">
      <Box sx={{ background: "#d0e8ea", mb: 3 }}>
        <Container>
          <Box display={"flex"} justifyContent={"space-between"}>
            <Typography variant="h5">Top Rated Shoes</Typography>
            <Button onClick={() => setAllProduct(!allProduct)}>
              {allProduct ? "View Least Product" : "View All Products"}
            </Button>
          </Box>
          <Divider />
          <Box mt={3}>
            <Grid container>
              {allProduct
                ? ProductsDetails.products.map((product) => {
                    return (
                      <Grid
                        item
                        key={product.id}
                        xs={12}
                        sm={6}
                        md={3}
                        sx={{ display: "flex", justifyContent: "center" }}
                      >
                        <Product id={product.id} data={product} />
                      </Grid>
                    );
                  })
                : ProductsDetails.products.slice(0, 4).map((product) => {
                    return (
                      <Grid
                        item
                        key={product.id}
                        xs={12}
                        sm={6}
                        md={3}
                        sx={{ display: "flex", justifyContent: "center" }}
                      >
                        <Product id={product.id} data={product} />
                      </Grid>
                    );
                  })}
              {}
            </Grid>
          </Box>
        </Container>
      </Box>
    </div>
  );
};

export default Products;
