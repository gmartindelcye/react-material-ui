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

export default function Navbar(navArrayLinks) {
  const [open, setOpen] = useState(false);
  const navLinks = navArrayLinks.navArrayLinks;

  console.log(navLinks);

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
