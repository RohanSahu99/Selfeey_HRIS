'use client';
import React from 'react';
import {
  Box,
  Typography,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  InputAdornment,
  OutlinedInput
} from '@mui/material';
import { ChevronDown } from 'lucide-react';

const SelectField = ({
  label,
  icon,
  options,
  value,
  onChange,
  required = false,
}) => {
  return (
    <Box mb={2}>
      <Typography variant="body2" fontWeight={500} mb={0.5}>
        {label} {required && <span style={{ color: 'red' }}>*</span>}
      </Typography>
      <FormControl fullWidth variant="outlined" size="small" required={required}>
        <Select
          value={value}
          onChange={onChange}
          displayEmpty
          input={
            <OutlinedInput
              startAdornment={
                icon ? (
                  <InputAdornment position="start">
                    {icon}
                  </InputAdornment>
                ) : null
              }
              endAdornment={
                <InputAdornment position="end">
                  <ChevronDown size={18} />
                </InputAdornment>
              }
            />
          }
          renderValue={(selected) =>
            selected
              ? options.find((option) => option.value === selected)?.label
              : `Select ${label.toLowerCase()}`
          }
        >
          {options.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  );
};

export default SelectField;
