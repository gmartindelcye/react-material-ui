import { useState, useEffect } from "react";
import { Box, Container, Typography } from "@mui/material";
import Character from "../components/Character";
import CharacterSkeleton from "../components/CharacterSkeleton";

const fakePromise = () => new Promise((resolve) => setTimeout(resolve, 2000));

export default function Home() {
  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    try {
      await fakePromise();
      const response = await fetch("https://rickandmortyapi.com/api/character");
      const data = await response.json();
      setCharacters(data.results);
      console.log(data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Container maxWidth="sm">
      <Typography
        variant="h3"
        textOverflow="center"
        mb={3}
      >
        Rick and Morty
      </Typography>
      <Box sx={{ display: "grid", gap: 2, maxWidth: 250, mx: "auto" }}>
        {loading
          ? Array.from(new Array(4)).map((_, index) => (
              <CharacterSkeleton key={index} />
            ))
          : characters.map((character) => (
              <Character
                key={character.id}
                name={(character, name)}
                image={character.image}
              />
            ))}
      </Box>
    </Container>
  );
}
