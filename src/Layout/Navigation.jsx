import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { Drawer, Tab, Tabs } from "@mui/material";
import { ShoppingBagOutlined } from "@mui/icons-material";
import Cart from "../Drawer/Cart";
import { Link, useLocation } from "react-router-dom";

function ResponsiveAppBar() {
  const [open, setOpen] = React.useState(false);
  const [activeTabIndex, setActiveTabIndex] = React.useState(0);

  const location = useLocation();

  const handleChange = () => {
    const pathname = location.pathname;

    if (pathname === "/") {
      setActiveTabIndex(0);
    } else if (pathname === "/about") {
      setActiveTabIndex(1);
    } else if (pathname === "/contact") {
      setActiveTabIndex(2);
    }
  };

  React.useEffect(() => {
    handleChange();
  }, [location.pathname]);

  return (
    <div className="navigation">
      <AppBar
        position="static"
        sx={{
          background: "var(--layout)",
          mt: -1,
          height: "55px",
          width: "auto",
        }}
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
              <Link to={"/"} className="link">
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
                  value={activeTabIndex}
                  onChange={handleChange}
                  indicatorColor="primary"
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
