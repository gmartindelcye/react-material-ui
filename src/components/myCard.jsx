import {
  Card,
  CardMedia,
  CardContent,
  CardActions,
  CardActionArea,
  Typography,
  Button,
} from "@mui/material";

export default function MyCard() {
  return (
    <Card
      sx={{
        transition: "0.2s",
        "&:hover": {
          transform: "scale(1.05)",
        },
      }}
    >
      <CardActionArea>
        <CardMedia
          component="img"
          image="https://via.placeholder.com/1000x200"
          height="200"
          alt="imagen"
        />
        <CardContent>
          <Typography variant="h5">Card Title</Typography>
          <Typography
            variant="body1"
            color="text.secondary"
            component="p"
          >
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorem
            sapiente, harum repellendus minima explicabo, esse nisi, officia
            debitis unde fuga veritatis velit quos ratione. Mollitia quaerat
            maiores deleniti suscipit temporibus.
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button variant="contained">Add</Button>
        <Button color="error">Remove</Button>
      </CardActions>
    </Card>
  );
}
