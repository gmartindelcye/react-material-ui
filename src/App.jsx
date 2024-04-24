import { Route, Routes } from "react-router-dom";
import { Container } from "@mui/material";
import Navbar from "./components/navbar/Navbar";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Logout from "./pages/Logout";
import Register from "./pages/Register";
import HomeIcon from "@mui/icons-material/Home";
import LoginIcon from "@mui/icons-material/Login";
import LogoutIcon from "@mui/icons-material/Logout";
import AppRegistrationIcon from "@mui/icons-material/AppRegistration";

const navArrayLinks = [
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

export default function App() {
  return (
    <>
      <Navbar navArrayLinks={navArrayLinks} />
      <Container sx={{ mt: 5 }}>
        <Routes>
          <Route
            path="/"
            element={<Home />}
          />
          <Route
            path="login"
            element={<Login />}
          />
          <Route
            path="logout"
            element={<Logout />}
          />
          <Route
            path="register"
            element={<Register />}
          />
        </Routes>
      </Container>
    </>
  );
}
