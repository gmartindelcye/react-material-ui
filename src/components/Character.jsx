import { Card, CardContent, CardMedia, Typography } from "@mui/material";

export default function Character({ name, image }) {
  return (
    <Card>
      <CardMedia
        image={image}
        title={name}
        sx={{
          width: 250,
          height: 250,
          objectFit: "cover",
        }}
      />
      <CardContent>
        <Typography variant="h5">{name}</Typography>
      </CardContent>
    </Card>
  );
}
