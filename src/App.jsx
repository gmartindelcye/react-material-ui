import { Container, Grid } from "@mui/material";
export default function App() {
  return (
    <Container>
      <Grid
        container
        spacing={2}
      >
        <Grid
          item
          xs={12}
          sm={6}
          md={4}
          sx={{ px: 2 }}
        >
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ducimus
          soluta qui nemo repudiandae iure alias odio quos placeat nostrum?
          Corporis eveniet totam, aperiam placeat maxime ipsum eligendi
          repudiandae officia velit.
        </Grid>
        <Grid
          item
          xs={12}
          sm={6}
          md={4}
          sx={{ px: 2 }}
        >
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ducimus
          soluta qui nemo repudiandae iure alias odio quos placeat nostrum?
          Corporis eveniet totam, aperiam placeat maxime ipsum eligendi
          repudiandae officia velit.
        </Grid>
        <Grid
          item
          xs={12}
          sm={12}
          md={4}
          sx={{ px: 2 }}
        >
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ducimus
          soluta qui nemo repudiandae iure alias odio quos placeat nostrum?
          Corporis eveniet totam, aperiam placeat maxime ipsum eligendi
          repudiandae officia velit.
        </Grid>
      </Grid>
    </Container>
  );
}
