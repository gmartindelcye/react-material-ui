import { useState } from "react";
import {
  AppBar,
  Box,
  Button,
  Drawer,
  IconButton,
  Toolbar,
  Typography,
} from "@mui/material";
import NavListDrawer from "./NavListDrawer";
import MenuIcon from "@mui/icons-material/Menu";
import HomeIcon from "@mui/icons-material/Home";
import LoginIcon from "@mui/icons-material/Login";
import LogoutIcon from "@mui/icons-material/Logout";
import AppRegistrationIcon from "@mui/icons-material/AppRegistration";

const navLinks = [
  {
    title: "Home",
    path: "/",
    active: true,
    icon: <HomeIcon />,
  },
  {
    title: "Login",
    path: "/login",
    active: true,
    icon: <LoginIcon />,
  },
  {
    title: "Logout",
    path: "/logout",
    active: false,
    icon: <LogoutIcon />,
  },
  {
    title: "Register",
    path: "/register",
    active: false,
    icon: <AppRegistrationIcon />,
  },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            color="inherit"
            size="large"
            onClick={() => setOpen(true)}
            sx={{ display: { xs: "flex", sm: "none" } }}
            edge="start"
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            sx={{ flexGrow: 1 }}
          >
            News
          </Typography>
          <Box sx={{ display: { xs: "none", sm: "block" } }}>
            {navLinks.map((link) =>
              link.active ? (
                <Button
                  key={link.title}
                  color="inherit"
                  href={link.path}
                  sx={{
                    "&.MuiButton-root": {
                      color: link.active ? "primary" : "inherit",
                    },
                  }}
                >
                  {link.title}
                </Button>
              ) : (
                <p key={link.title}></p>
              )
            )}
          </Box>
        </Toolbar>
      </AppBar>
      <Drawer
        open={open}
        anchor="left"
        onClose={() => setOpen(false)}
        sx={{ display: { xs: "flex", sm: "none" } }}
      >
        <NavListDrawer navLinks={navLinks} />
      </Drawer>
    </>
  );
}
