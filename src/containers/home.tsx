import {
  Box,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  IconButton,
  Pagination,
  Typography,
} from "@mui/material";
import {
  Link,
  MakeGenerics,
  useMatch,
  useNavigate,
} from "@tanstack/react-location";
import React, { useEffect, useState } from "react";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { getMoviesData } from "../api";
import MovieCard from "../components/MovieCard";
import { useSavedFavs } from "../myHooks/useSavedFavs";

const Home = () => {
  const [allMovies, setAllMovies] = useState([]);

  const [page, setPage] = useState(1);
  const [fav, setFav] = useSavedFavs(); //custom hook

  const handleChange = (event, val) => {
    setPage(val);
  };

  useEffect(() => {
    (async () => {
      const data = await getMoviesData(page);
      setAllMovies(data);
    })(); //IIFE
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [page]);

  return (
    <Box padding={8}>
      <Grid container spacing={2} margin={8}>
        {allMovies.results?.map((ele, i) => {
          return (
            <Grid item xs={4} key={ele.id}>
              <MovieCard movie={ele} myFavs={fav} setMyFavs={setFav} />
            </Grid>
          );
        })}
      </Grid>
      <Grid item container xs={12} marginTop={16} justifyContent={"center"}>
        <Pagination
          count={100}
          page={page}
          onChange={handleChange}
          variant="outlined"
          color="secondary"
        />
      </Grid>
    </Box>
  );
};

export default Home;
