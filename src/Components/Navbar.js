import * as React from "react";
import "../App.css";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Logo from "../Images/Logo.png";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import { Link } from "react-router-dom";
import { useState, useContext } from "react";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { CardContext } from "../CardContext";

const navbar = [
  {
    id: "1",
    label: "Home",
    path: "/",
  },
  {
    id: "2",
    label: "About",
    path: "/about",
  },
  {
    id: "3",
    label: "Services",
    path: "/services",
  },
  {
    id: "4",
    label: "Shop",
    path: "/shop",
  },
  {
    id: "5",
    label: "Contact",
    path: "/contact",
  },
];
function Navbar() {
  const { Count } = useContext(CardContext);
  const [anchorElNav, setAnchorElNav] = useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar
      position="static"
      style={{ backgroundColor: "white", width: "100%" }}
      sx={{
        boxShadow: "none",
        padding: {
          xs: "0px",
          md: "10px 0",
          position: "fixed",
          top: "0",
          zIndex: "999",
        },
      }} // Padding for both mobile and larger screens
    >
      <Container maxWidth="xl" sx={{ width: "100%" }}>
        <Toolbar sx={{ padding: { xs: "0 10px", md: "0 30px" } }}>
          {" "}
          {/* Padding adjustment */}
          <img
            src={Logo}
            alt="logo"
            style={{ marginLeft: "1%", display: "flex", maxHeight: "40px" }} // Ensure logo doesn't overflow
          />
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "flex", md: "none" },
              justifyContent: "flex-end",
              maxWidth: "100%",
            }}
          >
            <IconButton
              size="large"
              aria-label="menu"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
              sx={{ color: "#274C5B", padding: 0 }}
            >
              <MenuIcon sx={{ fontSize: "30px" }} />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
              keepMounted
              transformOrigin={{ vertical: "top", horizontal: "center" }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{ display: { xs: "block", md: "none" }, width: "100%" }}
              disableScrollLock
              PaperProps={{
                sx: {
                  height: "100vh",
                  width: "70vw",
                  maxWidth: "100%",
                  backgroundColor: "white",
                  display:"flex",
                  justifyContent:"center",
                },
              }}
            >
              {navbar.map((page) => (
                <MenuItem
                  key={page.id}
                  component={Link}
                  to={page.path.toLowerCase()}
                  onClick={handleCloseNavMenu}
                  sx={{
                    fontFamily: "Roboto",
                    fontSize: "20px",
                    fontWeight: 700,
                    lineHeight: "23.44px",
                    textAlign: "left",
                    color: "#274C5B",
                    textDecoration: "none",
                    marginTop: "40px",
                    width: "100%",
                  }}
                >
                  {page.label}
                </MenuItem>
              ))}

              <MenuItem
                sx={{
                  marginTop: "40px",
                  display: "flex",
                  justifyContent: "flex-start",
                }}
              >
                <Box
                  sx={{
                    display: { xs: "flex", md: "none" }, // Show only on small screens
                    alignItems: "center",
                    justifyContent: "center",
                    borderRadius: "33px",
                    border: "1px solid #274C5B",
                    padding: "5px 25px 5px 3px",
                    backgroundColor: "white",
                    // mr:5
                  }}
                >
                  <ShoppingCartOutlinedIcon
                    sx={{
                      color: "white",
                      backgroundColor: "#274C5B",
                      borderRadius: "100%",
                      padding: "8px",
                    }}
                  />
                  <Typography
                    sx={{
                      color: "#274C5B",
                      marginLeft: "10px",
                      fontFamily: "Roboto",
                      fontSize: "18px",
                      fontWeight: "600",
                      textAlign: "left",
                    }}
                  >
                    Cart({Count})
                  </Typography>
                </Box>
              </MenuItem>
            </Menu>
          </Box>
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "none", md: "flex", justifyContent: "center" },
            }}
          >
            {navbar.map((page) => (
              <Button
                key={page.id}
                onClick={handleCloseNavMenu}
                component={Link} // Use Link for routing
                to={`${page.path.toLowerCase()}`} // Dynamic path based on page name
                sx={{
                  my: 2,
                  display: "block",
                  ml: page === "Home" ? 8 : 0,
                  fontFamily: "Roboto",
                  fontSize: "20px",
                  fontWeight: 700,
                  lineHeight: "23.44px",
                  textAlign: "left",
                  color: "#274C5B",
                }}
              >
                {page.label}
              </Button>
            ))}
          </Box>
          {/* Shopping cart for medium and larger screens */}
          <Box
            sx={{
              display: { xs: "none", md: "flex" }, // Show only on larger screens
              alignItems: "center",
              justifyContent: "center",
              borderRadius: "33px",
              border: "1px solid #274C5B",
              padding: "10px 25px 10px 3px",
              backgroundColor: "white",
            }}
          >
            <ShoppingCartOutlinedIcon
              sx={{
                color: "white",
                backgroundColor: "#274C5B",
                borderRadius: "100%",
                padding: "8px",
              }}
            />
            <Typography
              sx={{
                color: "#274C5B",
                marginLeft: "10px",
                fontFamily: "Roboto",
                fontSize: "18px",
                fontWeight: "600",
                textAlign: "left",
              }}
            >
              Cart({Count})
            </Typography>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default Navbar;
