import { Box, Grid } from "@mui/material";
import { useEffect, useState } from "react";
import { getPopularMovies } from "../api";
import MovieCard from "../components/MovieCard";

const Popular = () => {
  const [popularMovies, setPopularMovies] = useState([]);

  useEffect(() => {
    (async () => {
      const data = await getPopularMovies();
      setPopularMovies(data);
    })(); //IIFE
  }, []);

  return (
    <Box padding={8}>
      <Grid container spacing={2} margin={8}>
        {popularMovies.results?.map((ele, i) => {
          return (
            <Grid item xs={4} key={ele.id}>
              <MovieCard movie={ele} />
            </Grid>
          );
        })}
      </Grid>
    </Box>
  );
};
export default Popular;
