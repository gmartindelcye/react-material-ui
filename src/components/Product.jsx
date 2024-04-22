import styled from "@emotion/styled";
import { Box, Button, Paper, Typography } from "@mui/material";

export default function Product() {
  const Img = styled("img")({
    width: "200",
    height: "100%",
    objectFit: "cover",
    objectPosition: "center",
  });

  return (
    <Paper
      sx={{
        display: "flex",
        alignItems: "center",
        gap: 2,
        overflow: "hidden",
        mt: 5,
      }}
    >
      <Img
        src="https://via.placeholder.com/200"
        alt="imagen"
      />
      <Box sx={{ flexGrow: 1, display: "grid", gap: 4 }}>
        <Typography variant="h4">Product Name</Typography>
        <Typography variant="body1">Product Description</Typography>
        <Button variant="contained">Add Card</Button>
      </Box>
      <Box
        sx={{ mr: 2, bgcolor: "success.main", p: 1 }}
        component="p"
      >
        <Typography
          variant="h5"
          sx={{ color: "white" }}
        >
          $19.99
        </Typography>
      </Box>
    </Paper>
  );
}
