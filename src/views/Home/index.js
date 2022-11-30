import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import { FormControl, Grid } from "@mui/material";

import { Button, TextField } from "../../components";
import AboutCompany from "./components/AboutCompany";
import backgroundImage from "../../assets/background.jpg";

import { validateUser } from "../../services/userService";

function Home() {
  const navigate = useNavigate();

  const [userEmail, setUserEmail] = useState("");
  const [userEmailError, setUserEmailError] = useState("");

  const handleChange = (event) => {
    setUserEmailError("");
    setUserEmail(event.target.value);
  };

  const handleValidateUser = async () => {
    setUserEmailError("");

    if (!userEmail) {
      setUserEmailError("Insira um email para continuar.");
    } else if (!/^[a-z0-9.]+@kpis\.tech$/.test(userEmail)) {
      setUserEmailError("Insira um email válido. Ex: example@kpis.tech.");
    } else {
      try {
        const user = await validateUser(userEmail);
        return navigate(`user/${user.id}/dashboard`);
      } catch (err) {
        setUserEmailError(err.response.data.error.message);
      }
    }
  };

  return (
    <Grid
      container
      justifyContent="center"
      alignItems="center"
      sx={{
        minHeight: "100vh",
        backgroundImage: `url(${backgroundImage})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        opacity: "0.9",
        py: 4,
      }}
    >
      <Grid
        item
        xs={10}
        md={6}
        sx={{
          backgroundColor: "#fff",
          borderRadius: "5px",
          boxShadow: 2,
          opacity: "0.95",
          py: 8,
          px: 6,
        }}
      >
        <AboutCompany />
        <FormControl fullWidth>
          <TextField
            error={userEmailError}
            value={userEmail}
            onChange={(e) => handleChange(e)}
            label="Email"
          />

          <Button
            text="Analisar indicadores"
            onClick={handleValidateUser}
            styles={{ mt: 2 }}
          />
        </FormControl>
      </Grid>
    </Grid>
  );
}
export default Home;
