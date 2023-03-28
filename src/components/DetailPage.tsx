import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Grid,
  Pagination,
  Typography,
} from "@mui/material";
import {
  MakeGenerics,
  useMatch,
  useMatchRoute,
  useNavigate,
  useRouter,
} from "@tanstack/react-location";
import React, { useEffect, useState } from "react";

const DetailPage = () => {
  const {
    data: { movieDetail },
  } = useMatch();

  const genres = movieDetail.genres.map((ele) => ele.name).join(", ");
  return (
    <Card sx={{ display: "flex" }} style={{ padding: "8px" }}>
      {console.log("movieDetail", movieDetail)}
      <Box sx={{ display: "flex", flexDirection: "column" }}>
        <CardContent sx={{ flex: "1 0 auto" }}>
          <Typography component="div" variant="h5">
            {movieDetail.title}
          </Typography>
          <Typography
            variant="subtitle1"
            color="text.secondary"
            component="div"
          >
            {movieDetail.overview}
          </Typography>

          <Typography
            variant="subtitle1"
            color="text.secondary"
            component="div"
          >
            Rating : {Math.round(movieDetail.vote_average * 10) / 10}
          </Typography>
        </CardContent>
        <Box sx={{ display: "flex", alignItems: "center", pl: 1, pb: 1 }}>
          <Typography
            variant="subtitle1"
            color="text.secondary"
            component="div"
          >
            Genres: {genres}
          </Typography>
        </Box>
      </Box>
      <CardMedia
        component="img"
        sx={{ width: 250 }}
        image={"https://image.tmdb.org/t/p/w500" + movieDetail.poster_path}
        alt="green iguana"
      />
    </Card>
  );
};
export default DetailPage;
