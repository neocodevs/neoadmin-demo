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
          <Container maxWidth="sm">
            <Paper
              style={{
                padding: "16px",
                margin: "16px",
              }}
            >
              <Typography variant="h6">Movie Statistics</Typography>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <Typography variant="body1">
                    Movies: {moviesData.movies}
                  </Typography>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Typography variant="body1">
                    Views in a year: {moviesData.views}
                  </Typography>
                </Grid>
              </Grid>
              <div
                style={{
                  height: 400,
                }}
              ></div>
            </Paper>
          </Container>
        );
      },
    },
  },
};

export default headers;
