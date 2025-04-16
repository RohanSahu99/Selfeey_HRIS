'use client';
import React from 'react';
import { TextField, InputAdornment, Typography, Box } from '@mui/material';

const InputField = ({
  label,
  icon,
  type = 'text',
  placeholder,
  value,
  onChange,
  required = false,
}) => (
  <Box mb={2}>
    <Typography variant="body2" fontWeight={500} mb={0.5}>
      {label} {required && <span style={{ color: 'red' }}>*</span>}
    </Typography>
    <TextField
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      required={required}
      fullWidth
      variant="outlined"
      size="small"
      InputProps={{
        startAdornment: icon && (
          <InputAdornment position="start">{icon}</InputAdornment>
        ),
      }}
    />
  </Box>
);

export default InputField;
