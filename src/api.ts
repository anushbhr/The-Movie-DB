import axios from "axios";

export const getMoviesData = async (page) => {
  try {
    let res = await axios({
      method: "get",
      url: `https://api.themoviedb.org/3/discover/movie?api_key=e4c52eec16cc4ceeaae7b0d400328585&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${page}&with_watch_monetization_types=flatrate`,
    });
    return res.data;
  } catch (err) {
    console.log(err);
  }
};

export const getMovieDetail = async (id) => {
  try {
    let res = await axios({
      method: "get",
      url: `https://api.themoviedb.org/3/movie/${id}?api_key=e4c52eec16cc4ceeaae7b0d400328585&language=en-US`,
    });
    return res.data;
  } catch (err) {
    console.log(err);
  }
};

export const getPopularMovies = async () => {
  try {
    let res = await axios({
      method: "get",
      url: `https://api.themoviedb.org/3/trending/all/day?api_key=e4c52eec16cc4ceeaae7b0d400328585&language=en-US`,
    });
    return res.data;
  } catch (err) {
    console.log(err);
  }
};

export const getTopRatedMovies = async () => {
  try {
    let res = await axios({
      method: "get",
      url: `https://api.themoviedb.org/3/movie/top_rated?api_key=e4c52eec16cc4ceeaae7b0d400328585&language=en-US`,
    });
    return res.data;
  } catch (err) {
    console.log(err);
  }
};
