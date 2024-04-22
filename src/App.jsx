import { Button, Container, Typography } from "@mui/material";

export default function App() {
  return (
    <Container sx={{ border: 3, boxShadow:3, pb: 2}}>
      <h1>Hello World</h1>
      <Typography variant="h1" component="h2">App h1 with component</Typography>
      <Button variant="contained">My first button</Button>
    </Container>
  );
}