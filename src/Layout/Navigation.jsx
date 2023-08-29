import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import { Drawer, Tab, Tabs } from "@mui/material";
import { ShoppingBagOutlined } from "@mui/icons-material";
import Cart from "../Drawer/Cart";
import { Link } from "react-router-dom";

const pages = ["Products", "Pricing", "Blog"];
const settings = ["Profile", "Account", "Dashboard", "Logout"];

function ResponsiveAppBar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [open, setOpen] = React.useState(false);
  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  return (
    <div className="navigation">
      <AppBar
        position="static"
        sx={{ background: "var(--layout)", mt: -1, height: "55px" }}
      >
        <Container>
          <Toolbar
            disableGutters
            sx={{ display: "flex", justifyContent: "space-between" }}
          >
            {/* logo  */}
            <Box
              alignItems={"center"}
              display={"flex"}
              justifyItems={"center"}
              textAlign={"center"}
            >
              <Link to={'/'} className="link">
                <img
                  src="/logo.png"
                  alt="logo"
                  height={"40px"}
                  width={"auto"}
                />
                <Typography color={"#111"}>Snikers</Typography>
              </Link>
              <Box sx={{ borderBottom: 1, borderColor: "divider", ml: 3 }}>
                <Tabs
                  // value={value}
                  // onChange={handleChange}
                  aria-label="basic tabs example"
                >
                  <Link className="link" to={"/"}>
                    <Tab label="Home" />
                  </Link>
                  <Link className="link" to={"/about"}>
                    <Tab label="About" />
                  </Link>
                  <Link className="link" to={"/contact"}>
                    <Tab label="Contact" />
                  </Link>
                </Tabs>
              </Box>
            </Box>

            <Box
              sx={{
                flexGrow: 1,
                display: { xs: "flex", md: "none" },
                justifyContent: "space-between",
              }}
            >
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="inherit"
              >
                <MenuIcon />
              </IconButton>
            </Box>

            <IconButton onClick={() => setOpen(true)}>
              <ShoppingBagOutlined />
            </IconButton>
            <Drawer open={open} anchor="right">
              <Cart setOpen={setOpen} />
            </Drawer>
          </Toolbar>
        </Container>
      </AppBar>
    </div>
  );
}
export default ResponsiveAppBar;
