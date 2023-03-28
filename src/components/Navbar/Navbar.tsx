import reactLogo from "../../assets/react.svg";
import "./navbar.css";
import { Link } from "@tanstack/react-location";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

import { Grid } from "@mui/material";

function Navbar() {
  return (
    <Box>
      <AppBar position="static">
        <Toolbar>
          <Grid container spacing={2}>
            <Grid container spacing={2} item xs={12} sm={8} md={9}>
              <Grid item>
                <img src={reactLogo} alt="logo" />
              </Grid>
              <Grid item>
                <Typography variant="h5" fontWeight={"bold"}>
                  The Movie DB
                </Typography>
              </Grid>
            </Grid>

            <Grid item xs={12} sm={4} md={3}>
              <Button sx={{ color: "#fff" }}>
                <Link className="link" to="/" activeOptions={{ exact: true }}>
                  Home
                </Link>
              </Button>
              <Button sx={{ color: "#fff" }}>
                <Link
                  to="/Popular-movies"
                  activeOptions={{ exact: true }}
                  className="link"
                >
                  Popular
                </Link>
              </Button>
              <Button sx={{ color: "#fff" }}>
                <Link
                  to="/most-rated"
                  activeOptions={{ exact: true }}
                  className="link"
                >
                  Highest Rated
                </Link>
              </Button>
              {/* <Button sx={{ color: "#fff" }}>
                <Link
                  to="/my-favourites"
                  activeOptions={{ exact: true }}
                  className="link"
                >
                  My Favourites
                </Link>
              </Button> */}
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default Navbar;
