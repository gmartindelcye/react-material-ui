import { Alert, AlertTitle, Box, Snackbar } from "@mui/material";
import { useState } from "react";
// import AddReactionIcon from "@mui/icons-material/AddReaction";

export default function Home() {
  const [open, setOpen] = useState(true);

  return (
    <>
      <h1>Home</h1>
      <Box sx={{ display: "grid", gap: "1rem" }}>
        <Snackbar open={open}>
          <Alert severity="error">
            <AlertTitle>Error</AlertTitle>
            This is an error alert
          </Alert>
        </Snackbar>
      </Box>
    </>
  );
}
