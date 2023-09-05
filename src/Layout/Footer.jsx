import {
  Box,
  Container,
  Divider,
  Icon,
  IconButton,
  Typography,
} from "@mui/material";
import React from "react";
import InstagramIcon from "@mui/icons-material/Instagram";
import { LinkedIn, Twitter, WhatsApp } from "@mui/icons-material";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <div className="footer">
      <Container>
        <Box display="block" height={300} ml={"30%"}>
          <Box display={"block"} pt={5}>
            <Typography>
              <strong>Quick Links</strong>
            </Typography>
            <Divider />
            <Link className="link" to={'/'}>Home</Link>
            <Link className="link" to={'/about'}>About</Link>
            <Link className="link" to={'/contact'}>Contact</Link>
          </Box>
          <Box pt={5} textAlign={"end"}>
            <Typography>
              <strong>Follow us on social media</strong>
            </Typography>
            <Divider />
            <Box display={"flex"} justifyContent={"end"}>
              <IconButton>
                <InstagramIcon />
              </IconButton>

              <IconButton>
                <LinkedIn />
              </IconButton>
              <IconButton>
                <Twitter />
              </IconButton>
            </Box>
          </Box>
        </Box>
      </Container>
    </div>
  );
};

export default Footer;
