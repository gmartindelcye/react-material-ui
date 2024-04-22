import { Container, Box, Button, Typography } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import SaveIcon from "@mui/icons-material/Save";
export default function App() {
  return (
    <Container>
      <Typography variant="h1" color="error">
        App
      </Typography>
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
      <Button variant="contained" color="warning">
        My button
      </Button>
      <Button variant="contained" color="success">
        Second button
      </Button>
      <Button variant="outlined" color="error">
        Outline button
      </Button>
      <Button variant="outlined" color="info" startIcon={<DeleteIcon />}>
        DELETE
      </Button>
      <Button variant="contained" color="success" endIcon={<SaveIcon />}>
        SAVE
      </Button>
    </Container>
  );
}
