import React from "react";

import { Card, Typography } from "@mui/material";

function CustomCard({ mainInfo, legend }) {
  return (
    <Card
      sx={{
        height: "20vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Typography component="h2" sx={{ fontSize: "5em" }}>
        {mainInfo}
      </Typography>
      <Typography component="p">{legend}</Typography>
    </Card>
  );
}

export default CustomCard;
