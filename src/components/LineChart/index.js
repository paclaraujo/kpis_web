import React from "react";

import { Card, Typography } from "@mui/material";

import { ResponsiveLine } from "@nivo/line";

function LineChart({ data, color, chartTitle }) {
  return (
    <Card
      sx={{
        height: "45vh",
        py: 2,
        px: 4,
      }}
    >
      <Typography
        variant="h2"
        noWrap
        component="h2"
        sx={{
          fontWeight: 600,
          fontSize: "2em",
        }}
      >
        {chartTitle}
      </Typography>
      <ResponsiveLine
        data={data}
        colors={color}
        margin={{ top: 20, right: 30, bottom: 80, left: 30 }}
        xScale={{ type: "point" }}
        yScale={{
          type: "linear",
          min: "auto",
          max: "auto",
          stacked: true,
          reverse: false,
        }}
        yFormat=" >-.2f"
        axisTop={null}
        axisRight={null}
        axisBottom={{
          orient: "bottom",
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 45,
        }}
        axisLeft={{
          orient: "left",
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
        }}
        pointSize={5}
        useMesh={true}
      />
    </Card>
  );
}
export default LineChart;
