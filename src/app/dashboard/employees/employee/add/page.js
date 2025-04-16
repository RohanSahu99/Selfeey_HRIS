'use client';

import React, { useState } from 'react';
import {
  Box,
  Button,
  MenuItem,
  Select,
  TextField,
  Typography,
  InputLabel,
  FormControl,
} from '@mui/material';
import { FloppyDisk, ArrowCounterClockwise, ArrowLeft } from 'phosphor-react';
import { useRouter } from 'next/navigation';

export default function AddEmployeeForm() {
  const router = useRouter();

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    employeeId: '',
    department: '',
    position: '',
    hireDate: '',
    address: '',
    gender: '',
    salary: '',
  });

  const departments = [
    'Engineering',
    'Marketing',
    'Human Resources',
    'Finance',
    'Operations',
    'Sales',
  ];

  const handleChange = (field) => (event) => {
    setFormData({ ...formData, [field]: event.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Employee Data:', formData);
    alert('Employee added successfully!');
  };

  const handleReset = () => {
    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      employeeId: '',
      department: '',
      position: '',
      hireDate: '',
      address: '',
      gender: '',
      salary: '',
    });
  };

  return (
    <Box sx={{ p: 3 }}>
      {/* Back Button */}
      <Button
        onClick={() => router.back()}
        startIcon={<ArrowLeft size={18} />}
        sx={{ mb: 2, textTransform: 'none' }}
      >
        Back
      </Button>

      <Typography variant="h5" fontWeight="bold" gutterBottom>
        Add Employee
      </Typography>

      <form onSubmit={handleSubmit}>
        <Box
          sx={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'space-around',
            gap: '30px',
          }}
        >
          {[
            { label: 'First Name', field: 'firstName', type: 'text' },
            { label: 'Last Name', field: 'lastName', type: 'text' },
            { label: 'Email', field: 'email', type: 'email' },
            { label: 'Phone', field: 'phone', type: 'text' },
            { label: 'Employee ID', field: 'employeeId', type: 'text' },
            { label: 'Position', field: 'position', type: 'text' },
            {
              label: 'Hire Date',
              field: 'hireDate',
              type: 'date',
              shrinkLabel: true,
            },
            { label: 'Address', field: 'address', type: 'text' },
            { label: 'Salary', field: 'salary', type: 'number' },
          ].map(({ label, field, type, shrinkLabel }) => (
            <Box sx={{ width: '30%' }} key={field}>
              <Typography fontWeight={500} mb={1}>
                {label}
              </Typography>
              <TextField
                fullWidth
                type={type}
                value={formData[field]}
                onChange={handleChange(field)}
                placeholder={`Enter ${label.toLowerCase()}`}
                InputLabelProps={shrinkLabel ? { shrink: true } : undefined}
                InputProps={{ sx: { height: 40 } }}
              />
            </Box>
          ))}

          <Box sx={{ width: '30%' }}>
            <Typography fontWeight={500} mb={1}>
              Gender
            </Typography>
            <FormControl fullWidth>
              <Select
                value={formData.gender}
                onChange={handleChange('gender')}
                displayEmpty
                sx={{ height: 40 }}
              >
                <MenuItem value="" disabled>
                  Select Gender
                </MenuItem>
                <MenuItem value="Male">Male</MenuItem>
                <MenuItem value="Female">Female</MenuItem>
                <MenuItem value="Other">Other</MenuItem>
              </Select>
            </FormControl>
          </Box>

          <Box sx={{ width: '30%' }}>
            <Typography fontWeight={500} mb={1}>
              Department
            </Typography>
            <FormControl fullWidth>
              <Select
                value={formData.department}
                onChange={handleChange('department')}
                displayEmpty
                sx={{ height: 40 }}
              >
                <MenuItem value="" disabled>
                  Select Department
                </MenuItem>
                {departments.map((dept) => (
                  <MenuItem key={dept} value={dept}>
                    {dept}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Box>
        </Box>

        {/* Buttons on next line */}
        <Box sx={{ display: 'flex', gap: 2, mt: 4 }}>
          <Button
            type="button"
            variant="outlined"
            color="secondary"
            onClick={handleReset}
            startIcon={<ArrowCounterClockwise size={18} />}
            sx={{ height: 36 }}
          >
            Reset
          </Button>
          <Button
            type="submit"
            variant="contained"
            color="primary"
            startIcon={<FloppyDisk size={18} />}
            sx={{ height: 36 }}
          >
            Save
          </Button>
        </Box>
      </form>
    </Box>
  );
}
