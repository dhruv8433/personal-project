import { Box, Breadcrumbs, Container, Grid, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

function About() {
  return (
    <>
      <Box
        bgcolor={"var(--layout1)"}
        paddingTop={"15px"}
        paddingBottom={"15px"}
        mb={"20px"}
      >
        <Container maxWidth="lg">
          <Breadcrumbs aria-label="breadcrumb" className="mb-1 mt-1">
            <Link to={"/"} className="breadcrumb link">
              Home
            </Link>

            <Typography color="text.primary">About</Typography>
          </Breadcrumbs>
          <Typography variant="h4">
            <strong>About us</strong>
          </Typography>
        </Container>
      </Box>
      <Container maxWidth="lg" className="about-page" sx={{ mt: 6 }}>
        <Grid container spacing={2}>
          <Grid item xs={12} display={{ xs: "block", md: "none" }}>
            <img
              src={"./about.png"}
              alt="technology"
              className="about-page w-100 object-fit border-radius-10"
            />
          </Grid>
          <Grid item xs={12} md={6} marginTop={{ xs: "none", md: "50px" }}>
            <Box>
              {/* response from api should print here that contian html file for about us  */}
              <div>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab
                minus fugit dicta iste officia suscipit expedita quisquam optio,
                aut architecto reiciendis labore! Blanditiis dignissimos veniam,
                harum distinctio rerum nemo pariatur, delectus vel fuga nesciunt
                commodi culpa maxime fugiat! Veritatis nam harum, ut
                necessitatibus ab voluptatem velit similique recusandae pariatur
                sunt animi odio hic aut, minus quo cum. Quos quidem tenetur
                velit et architecto nihil quam molestiae nisi recusandae iste
                laborum numquam exercitationem eum totam placeat vero
                necessitatibus sequi repellat libero, voluptate perferendis
                doloremque laboriosam! Vel, debitis provident. Quos vitae
                corrupti doloribus distinctio, animi commodi architecto modi
                quidem unde sapiente ducimus!
              </div>
            </Box>
            <br />
          </Grid>
          <Grid item xs={12} md={6} display={{ xs: "none", md: "block" }}>
            <img
              src={"./about.png"}
              alt="technology"
              className="about-page w-100 object-fit border-radius-10"
            />
          </Grid>
        </Grid>
      </Container>
    </>
  );
}

export default About;
