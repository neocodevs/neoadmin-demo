import { Container, Grid, Paper, Typography } from "@mui/material";
import { moviesData } from "./fixtures/moviesData";

const headers = {
  type: "Page",
  options: {
    name: "Statistics",
    route: {
      path: "/statistics",
      unAuth: false,
      auth: true,
      exact: true,
      component: () => {
        return (
          <Grid container spacing={2}>
            <Grid item sm={12} md={6}>
              <Paper
                sx={{
                  padding: "16px",
                  margin: "16px",
                  display: "flex",
                  alignItems: "center",
                  gap: "16px",
                }}
                variant="outlined"
                elevation={3}
              >
                <Typography variant="h6">Movies:</Typography>
                <Typography variant="body1">{moviesData.movies}</Typography>
              </Paper>
            </Grid>
            <Grid item sm={12} md={6}>
              <Paper
                sx={{
                  padding: "16px",
                  margin: "16px",
                  display: "flex",
                  alignItems: "center",
                  gap: "16px",
                }}
                variant="outlined"
                elevation={3}
              >
                <Typography variant="h6">Views in a year:</Typography>
                <Typography variant="body1">{moviesData.views}</Typography>
              </Paper>
            </Grid>
          </Grid>
        );
      },
    },
  },
};

export default headers;
