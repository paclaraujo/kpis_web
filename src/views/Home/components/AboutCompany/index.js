import React from "react";

import {
  createTheme,
  ThemeProvider,
  responsiveFontSizes,
} from "@mui/material/styles";

import { Typography } from "@mui/material";

const theme = responsiveFontSizes(createTheme());

function AboutCompany() {
  return (
    <ThemeProvider theme={theme}>
      <Typography component="h1" variant="h2">
        RH Insights
      </Typography>

      <Typography
        component="p"
        sx={{
          mt: 2,
          mb: 4,
          color: "#667085",
        }}
      >
        Dashboards dinâmicos para monitoriar e atuar em todos os indicadores
        chave do RH: de controle de headcount, turnover e custos a índices de
        diversidade e inclusão
      </Typography>
    </ThemeProvider>
  );
}
export default AboutCompany;
