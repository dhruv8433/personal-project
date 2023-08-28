import {
  AccessTime,
  AlternateEmail,
  Call,
  LocationOnOutlined,
} from "@mui/icons-material";
import {
  Box,
  Breadcrumbs,
  Container,
  Divider,
  Grid,
  Typography,
} from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

const Contact = () => {
  return (
    <div>
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

            <Typography color="text.primary">Contact</Typography>
          </Breadcrumbs>
          <Typography variant="h4">
            <strong>Contact us</strong>
          </Typography>
        </Container>
      </Box>

      <Container>
        <Box border={"1px dashed"} borderRadius={"10px"} mb={2}>
          <Grid container>
            <Grid item xs={12} sm={12} md={4} lg={4} xl={4}>
              <Box p={{ xs: "16px", md: "20px" }} borderRight={"1px dashed"}>
                <Typography variant="h6" color="blue" fontSize={16}>
                  Let's talk
                </Typography>
                <Typography variant="h5" gutterBottom>
                  <strong>Get in touch with us</strong>
                </Typography>
                <br />
                {/* Contact Menu -> we need it later */}
                <Container>
                  <Box display="flex" marginBottom={3} marginTop={3}>
                    <Call
                      sx={{
                        height: "30px",
                        width: "30px",
                        border: "2px solid",
                        p: 1,
                        backgroundColor: "#9e9eff",
                        color: "white",
                        borderRadius: "5px",
                      }}
                    />
                    <Box ml={2}>
                      <div>
                        <Typography
                          variant="h6"
                          color={"blue"}
                          fontSize={16}
                          fontWeight={400}
                        >
                          Let's Talk
                        </Typography>
                      </div>
                      <div>
                        <Typography variant="h6" fontSize={16} fontWeight={400}>
                          +1234567890
                        </Typography>
                      </div>
                    </Box>
                  </Box>
                  <hr />

                  <Box display="flex" marginBottom={3} marginTop={3}>
                    <AlternateEmail
                      sx={{
                        height: "30px",
                        width: "30px",
                        border: "2px solid",
                        p: 1,
                        backgroundColor: "#9e9eff",
                        color: "white",
                        borderRadius: "5px",
                      }}
                    />
                    <Box ml={2}>
                      <Typography variant="p" color="blue">
                        Quick email
                      </Typography>
                      <Typography variant="h6" fontSize={16} fontWeight={400}>
                        infoxyz@gmail.com
                      </Typography>
                    </Box>
                  </Box>
                  <hr />

                  <Box display="flex" marginBottom={3} marginTop={3}>
                    <LocationOnOutlined
                      sx={{
                        height: "30px",
                        width: "30px",
                        border: "2px solid",
                        p: 1,
                        backgroundColor: "#9e9eff",
                        color: "white",
                        borderRadius: "5px",
                      }}
                    />
                    <Box ml={2}>
                      <Typography variant="p" color="blue">
                        Office Address
                      </Typography>
                      <Typography variant="h6" fontSize={16} fontWeight={400}>
                        usa
                      </Typography>
                    </Box>
                  </Box>
                  <hr />

                  <Box display="flex" marginBottom={3} marginTop={3}>
                    <AccessTime
                      sx={{
                        height: "30px",
                        width: "30px",
                        border: "2px solid",
                        p: 1,
                        backgroundColor: "#9e9eff",
                        color: "white",
                        borderRadius: "5px",
                      }}
                    />
                    <Box ml={2}>
                      <Typography variant="p" color="blue">
                        Opening Hours
                      </Typography>
                      <Typography variant="h6" fontSize={16} fontWeight={400}>
                        9:00 AM to 7:00 PM
                      </Typography>
                    </Box>
                  </Box>
                </Container>
              </Box>
            </Grid>
            <Grid item xs={12} sm={12} md={12} lg={8} xl={8}>
              <Box p={1} height={"97%"}>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d26555548.90506698!2d-116.95556271358298!3d35.66113795394092!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x54eab584e432360b%3A0x1c3bb99243deb742!2sUnited%20States!5e0!3m2!1sen!2sin!4v1693225512331!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  allowfullscreen=""
                  loading="lazy"
                  referrerpolicy="no-referrer-when-downgrade"
                  style={{border: 0, borderRadius: "10px"}}
                ></iframe>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </div>
  );
};

export default Contact;
