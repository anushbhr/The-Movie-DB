import { Box, Grid } from "@mui/material";

import { useEffect, useState } from "react";
import { getPopularMovies, getTopRatedMovies } from "../api";
import MovieCard from "../components/MovieCard";

const MyFavourites = () => {
  const [highestRatedMovies, setHighestRatedMovies] = useState([]);

  useEffect(() => {
    (async () => {
      const data = await getTopRatedMovies();
      console.log(data);
      setHighestRatedMovies(data);
    })(); //IIFE
  }, []);

  return (
    <Box padding={8}>
      <Grid container spacing={2} margin={8}>
        {highestRatedMovies.results?.map((ele, i) => {
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
export default MyFavourites;
