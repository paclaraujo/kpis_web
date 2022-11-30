import * as React from "react";

import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";

function CustomSelect({ options, handleChange, label, value }) {
  return (
    <FormControl fullWidth>
      <InputLabel id={`select-${label}`}>{label}</InputLabel>
      <Select
        labelId={`select-${label}`}
        id="demo-simple-select"
        value={value}
        label={label}
        onChange={(e) => handleChange(e)}
        size="small"
      >
        {options.map((option) => (
          <MenuItem value={option}>{option}</MenuItem>
        ))}
      </Select>
    </FormControl>
  );
}

export default CustomSelect;
