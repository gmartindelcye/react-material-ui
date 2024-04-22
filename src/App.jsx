import { Button, Container } from "@mui/material";

export default function App() {
  return (
    <Container sx={{ border: 3, boxShadow:3, pb: 2}}>
      <h1>Hello World</h1>
      <Button variant="contained">My first button</Button>
    </Container>
  );
}