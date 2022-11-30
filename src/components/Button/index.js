import React from "react";

import { styled } from "@mui/material/styles";
import { amber } from "@mui/material/colors";

import { Button } from "@mui/material";

const StyledButton = styled(Button)(({ theme }) => ({
  color: theme.palette.getContrastText(amber[500]),
  backgroundColor: amber[500],
  "&:hover": {
    backgroundColor: amber[700],
  },
}));

function CustomButton({ text, onClick, styles }) {
  return (
    <StyledButton variant="contained" onClick={() => onClick()} sx={styles}>
      {text}
    </StyledButton>
  );
}

export default CustomButton;
