import { Grid, Paper, Typography } from "@mui/material";
import { Bar } from "react-chartjs-2";
import { CategoryScale } from "chart.js";
import Chart from "chart.js/auto";

import { moviesData } from "./fixtures/moviesData";

const months = moviesData.viewsPerMonth.map((d) => d.month);
const views = moviesData.viewsPerMonth.map((d) => d.views);

const chartData = {
  labels: months,
  datasets: [
    {
      label: "Views per month",
      data: views,
      backgroundColor: "rgba(75,192,192,0.4)",
      borderColor: "rgba(75,192,192,1)",
      borderWidth: 1,
    },
  ],
};

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
        Chart.register(CategoryScale);

        return (
          <>
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
            <Bar
              data={chartData}
              options={{
                plugins: {
                  title: {
                    display: true,
                    text: "Movies views per month",
                  },
                  legend: {
                    display: false,
                  },
                },
              }}
            />
          </>
        );
      },
    },
  },
};

export default headers;
