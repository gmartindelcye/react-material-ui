import { Alert, AlertTitle, Box, Button, Snackbar } from "@mui/material";
import { useState } from "react";
// import AddReactionIcon from "@mui/icons-material/AddReaction";

export default function Home() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <h1>Home</h1>
      <Box sx={{ display: "grid", gap: "1rem" }}>
        <Button
          variant="contained"
          onClick={() => setOpen(true)}
        >
          Open
        </Button>
        <Snackbar
          open={open}
          autoHideDuration={1000}
          onClose={() => setOpen(false)}
        >
          <Alert severity="error">
            <AlertTitle>Error</AlertTitle>
            This is an error alert
          </Alert>
        </Snackbar>
      </Box>
    </>
  );
}
