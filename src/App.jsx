import { Container, Box } from "@mui/material";

export default function App() {
  return (
    <Container>
      <h1>App</h1>
      <Box
        sx={{
          border: 2,
          p: 5,
          borderColor: "primary.main",
          bgcolor: "#111",
          color: "white",
        }}
      >
        MUI is beautiful
      </Box>
    </Container>
  );
}
