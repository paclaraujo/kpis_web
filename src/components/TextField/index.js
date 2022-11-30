import React from "react";

import { styled } from "@mui/material/styles";

import { TextField } from "@mui/material";

const StyledTextField = styled(TextField)({
  "& label.Mui-focused": {
    color: "#667085",
  },
  "& .MuiOutlinedInput-root": {
    "&.Mui-focused fieldset": {
      borderColor: "#ffc107",
    },
  },
});

function CustomTextField({ value, onChange, error, label }) {
  return (
    <StyledTextField
      error={!!error}
      label={label}
      variant="outlined"
      size="small"
      value={value}
      onChange={(e) => onChange(e)}
      helperText={error}
    />
  );
}
export default CustomTextField;
