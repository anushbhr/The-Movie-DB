import "./App.css";
import { Link, Outlet, ReactLocation, Router } from "@tanstack/react-location";
import Home from "./containers/home";
import HighestRated from "./containers/highestRated";
import Popular from "./containers/popular";

import { getMovieDetail } from "./api";
import Navbar from "./components/Navbar/Navbar";
import DetailPage from "./components/DetailPage";
import MyFavourites from "./containers/myFavourites";

const location = new ReactLocation();
const routes = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/details/:id", // to have dynamic route : is used  after : any name can be given to understand param
    element: <DetailPage />,
    loader: async ({ params }) => {
      return {
        movieDetail: await getMovieDetail(params.id),
      };
    },
  },
  { path: "/popular-movies", element: <Popular /> },
  { path: "/my-favourites", element: <MyFavourites /> },
  { path: "/most-rated", element: <HighestRated /> },
];

function App() {
  return (
    <Router location={location} routes={routes}>
      <Navbar />
      <Outlet />
    </Router>
  );
}

export default App;
