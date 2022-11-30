import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import {
  IconButton,
  Container,
  Grid,
  Typography,
  AppBar,
  Toolbar,
} from "@mui/material";
import { deepPurple, amber } from "@mui/material/colors";

import { Select, LineChart, Card } from "../../components";

import { getReport } from "../../services/reportService";

function Dashboard() {
  const navigate = useNavigate();

  const { userId } = useParams();

  const [selectOptions, setSelectOptions] = useState([]);
  const [baseYear, setBaseYear] = useState("");

  const [report, setReport] = useState({});
  const [turnover, setTurnover] = useState([]);
  const [headcount, setHeadcount] = useState([]);

  const handleChange = (event) => {
    setBaseYear(event.target.value);
  };

  const yearsOptionsArr = (initialYear) => {
    const startYear = +initialYear.substr(-4);
    const endYear = new Date().getFullYear();
    return Array.from(
      { length: endYear - startYear + 1 },
      (_, index) => startYear + index
    );
  };

  useEffect(() => {
    const getData = async () => {
      const userReport = await getReport(userId);

      setReport(userReport);
      setSelectOptions(yearsOptionsArr(userReport.headcount[0].x));
      setBaseYear(userReport.headcount[0].x.substr(-4));
    };
    getData();
  }, [userId]);

  useEffect(() => {
    if (report.turnover && report.headcount) {
      setTurnover(report.turnover.filter((item) => item.x.includes(baseYear)));
      setHeadcount(
        report.headcount.filter((item) => item.x.includes(baseYear))
      );
    }
  }, [report, baseYear]);

  return (
    <>
      <AppBar position="static" sx={{ backgroundColor: "#fff", boxShadow: 1 }}>
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <IconButton aria-label="voltar" onClick={() => navigate(`/`)}>
              <ArrowBackIcon />
            </IconButton>
          </Toolbar>
        </Container>
      </AppBar>
      <Container sx={{ mb: 4 }}>
        <Grid
          container
          sx={{ my: 4 }}
          justifyContent="space-between"
          alignItems="center"
        >
          <Grid item md={8}>
            <Typography component="h1" variant="h2" sx={{ fontSize: "3.5em" }}>
              Dashboard
            </Typography>
          </Grid>
          <Grid item>
            <Select
              md={3}
              options={selectOptions}
              handleChange={(e) => handleChange(e)}
              value={baseYear}
              label="Ano"
            />
          </Grid>
        </Grid>
        {Object.keys(report).length > 0 && (
          <>
            <Grid container spacing={2} sx={{ mb: 2 }}>
              {[
                {
                  mainInfo: report.directSubordinates,
                  legend: "liderados diretos",
                },
                {
                  mainInfo: report.indirectSubordinates,
                  legend: "liderados indiretos",
                },
                {
                  mainInfo: report.totalActiveSubordinates,
                  legend: "liderados ativos",
                },
                {
                  mainInfo: report.totalInactiveSubordinates,
                  legend: "liderados inativos",
                },
              ].map((dashInfo) => (
                <Grid item xs={6} md={3}>
                  <Card mainInfo={dashInfo.mainInfo} legend={dashInfo.legend} />
                </Grid>
              ))}
            </Grid>
            <Grid container spacing={2}>
              <Grid item xs={12} md={6}>
                {!!headcount.length && (
                  <LineChart
                    data={[{ id: "headcount", data: headcount }]}
                    color={deepPurple[900]}
                    chartTitle="Headcount"
                  />
                )}
              </Grid>
              <Grid item xs={12} md={6}>
                {!!turnover.length && (
                  <LineChart
                    data={[{ id: "turnover", data: turnover }]}
                    color={amber[500]}
                    chartTitle="Turnover"
                  />
                )}
              </Grid>
            </Grid>
          </>
        )}
      </Container>
    </>
  );
}
export default Dashboard;
