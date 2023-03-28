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
import React, { useEffect, useMemo, useState } from "react";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";

const MovieCard = (props) => {
  const { movie, myFavs, setMyFavs } = props;
  const [onHover, setOnHover] = useState(false);
  //   const [isFavourite, setIsFavourite] = useState(false);
  const isSelected = useMemo(
    () => myFavs?.find((ele) => (ele.id === movie.id ? true : false)),
    [myFavs]
  );

  const addToFav = (element) => {
    let movieArr = [...myFavs];
    let isMoviePresent = movieArr.find((ele) => ele.id === element.id);
    if (!isMoviePresent) {
      movieArr.push(element);
      //   setIsFavourite(true);
    } else {
      movieArr = movieArr.filter((ele) => ele.id != element.id);
      //   setIsFavourite(false);
    }
    setMyFavs(movieArr);
  };

  return (
    <Card sx={{ maxWidth: 345 }} style={{ height: "100%" }}>
      <CardActionArea>
        <Link
          to={`/details/${movie.id}`}
          activeOptions={{ exact: true }}
          style={{ textDecoration: "none" }}
        >
          <CardMedia
            component="img"
            height="100%"
            image={"https://image.tmdb.org/t/p/w500" + movie.poster_path}
            alt="green iguana"
          />
        </Link>
        <CardActions disableSpacing>
          <IconButton
            onMouseEnter={() => setOnHover(true)}
            onMouseLeave={() => setOnHover(false)}
            aria-label="add to favorites"
            onClick={() => addToFav(movie)}
          >
            {isSelected ? ( // isFavourite can be used but wanted to learn useMemo
              <FavoriteIcon />
            ) : onHover ? (
              <FavoriteIcon />
            ) : (
              <FavoriteBorderIcon />
            )}
          </IconButton>
        </CardActions>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {movie.title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {movie.overview}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};
export default MovieCard;
