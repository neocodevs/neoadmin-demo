import { Grid, Paper, styled, Typography } from "@mui/material";
import { Bar } from "react-chartjs-2";
import { CategoryScale } from "chart.js";
import Chart from "chart.js/auto";
import CountUp from "react-countup";

import { postsData } from "./fixtures/postsData";

const months = postsData.viewsPerMonth.map((d) => d.month);
const views = postsData.viewsPerMonth.map((d) => d.views);

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
    name: "Dashboard",
    route: {
      path: "/dashboard",
      unAuth: false,
      auth: true,
      exact: true,
      component: () => {
        Chart.register(CategoryScale);

        return (
          <>
            <Grid container spacing={2}>
              <Grid item sm={12} md={6}>
                <StyledPaper
                  sx={{
                    padding: "16px",
                    margin: "16px",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    gap: "16px",
                  }}
                  variant="outlined"
                  elevation={3}
                >
                  <Typography variant="h2" fontWeight="bold">
                    <CountUp end={postsData.posts} duration={2} />
                  </Typography>
                  <Typography variant="h6">Total posts</Typography>
                </StyledPaper>
              </Grid>
              <Grid item sm={12} md={6}>
                <StyledPaper
                  sx={{
                    padding: "16px",
                    margin: "16px",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    gap: "16px",
                  }}
                  variant="outlined"
                  elevation={3}
                >
                  <Typography variant="h2" fontWeight="bold">
                    <CountUp end={postsData.views} duration={2} />
                  </Typography>
                  <Typography variant="h6">Views in a year</Typography>
                </StyledPaper>
              </Grid>
            </Grid>
            <Bar
              data={chartData}
              options={{
                plugins: {
                  title: {
                    display: true,
                    text: "Posts views per month",
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

const StyledPaper = styled(Paper)(({ theme }) => ({
  background: "linear-gradient(to right, #6a11cb 0%, #2575fc 100%)",
}));