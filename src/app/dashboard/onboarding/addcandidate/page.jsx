'use client';

import React, { useState } from 'react';
import {
  Box,
  Button,
  Grid,
  MenuItem,
  Select,
  TextField,
  Typography,
  InputLabel,
  FormControl,
} from '@mui/material';

export default function AddCandidateForm() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    officialEmail: '',
    onboardingStatus: '',
    department: '',
    sourceOfHire: '',
    panNumber: '',
    aadhaarNumber: '',
    uanNumber: '',
  });

  const handleChange = (field) => (event) => {
    setFormData({ ...formData, [field]: event.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Candidate Submitted:', formData);
    // Submit logic here
  };

  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h5" fontWeight="bold" gutterBottom>
        Add Candidate
      </Typography>

      <form onSubmit={handleSubmit}>
        <Box sx={{display:"flex",flexWrap:'wrap',justifyContent:"space-around",gutterBottom:"2",gap:"30px"}}>
            <Box sx={{width:"30%"}}>
            <Typography fontWeight={500} mb={1}>
              First Name
            </Typography>
            <TextField
              fullWidth
              value={formData.firstName}
              onChange={handleChange('firstName')}
              placeholder="Enter first name"
              required
              InputProps={{ sx: { height: 40 } }}
              sx={{ maxWidth: '100%' }}
            />
            </Box>
            <Box sx={{width:"30%"}}>
            <Typography fontWeight={500} mb={1}>
              Last Name
            </Typography>
            <TextField
              fullWidth
              value={formData.lastName}
              onChange={handleChange('lastName')}
              placeholder="Enter last name"
              required
              InputProps={{ sx: { height: 40 } }}
              sx={{ maxWidth: '100%' }}
            />
            </Box>
            <Box sx={{width:"30%"}}>
            <Typography fontWeight={500} mb={1}>
              Email ID
            </Typography>
            <TextField
              fullWidth
              type="email"
              value={formData.email}
              onChange={handleChange('email')}
              placeholder="Enter personal email"
              required
              InputProps={{ sx: { height: 40 } }}
              sx={{ maxWidth: '100%' }}
            />
            </Box>
            <Box sx={{  width:"30%"}}>
            <Typography fontWeight={500} mb={1}>
              Onboarding Status
            </Typography>
            <FormControl fullWidth required>
              <Select
                value={formData.onboardingStatus}
                onChange={handleChange('onboardingStatus')}
                displayEmpty
                sx={{ height: 40 }}
              >
                <MenuItem value="" disabled>
                  Select status
                </MenuItem>
                <MenuItem value="Pending">Pending</MenuItem>
                <MenuItem value="In Progress">In Progress</MenuItem>
                <MenuItem value="Completed">Completed</MenuItem>
              </Select>
            </FormControl>
            </Box>

            <Box sx={{width:"30%"}}>
            <Typography fontWeight={500} mb={1}>
              Department
            </Typography>
            <TextField
              fullWidth
              value={formData.department}
              onChange={handleChange('department')}
              placeholder="Enter department"
              InputProps={{ sx: { height: 40 } }}
              sx={{ maxWidth: '100%' }}
            />
            </Box>

            <Box sx={{width:"30%"}}>
            <Typography fontWeight={500} mb={1}>
              Source of Hire
            </Typography>
            <TextField
              fullWidth
              value={formData.sourceOfHire}
              onChange={handleChange('sourceOfHire')}
              placeholder="Referral, Job Portal, etc."
              InputProps={{ sx: { height: 40 } }}
              sx={{ maxWidth: '100%' }}
            />
            </Box>

            <Box sx={{width:"30%"}}>
            <Typography fontWeight={500} mb={1}>
              PAN Card Number
            </Typography>
            <TextField
              fullWidth
              value={formData.panNumber}
              onChange={handleChange('panNumber')}
              placeholder="ABCDE1234F"
              InputProps={{ sx: { height: 40 } }}
              sx={{ maxWidth: '100%' }}
            />
            </Box>

            <Box sx={{width:"30%"}}>
            <Typography fontWeight={500} mb={1}>
              Aadhaar Card Number
            </Typography>
            <TextField
              fullWidth
              value={formData.aadhaarNumber}
              onChange={handleChange('aadhaarNumber')}
              placeholder="1234 5678 9012"
              InputProps={{ sx: { height: 40 } }}
              sx={{ maxWidth: '100%' }}
            />
            </Box>

            <Box sx={{width:"30%"}}>
            <Typography fontWeight={500} mb={1}>
              UAN Number
            </Typography>
            <TextField
              fullWidth
              value={formData.uanNumber}
              onChange={handleChange('uanNumber')}
              placeholder="Enter UAN"
              InputProps={{ sx: { height: 40 } }}
              sx={{ maxWidth: '100%' }} 
            />
            </Box>

            <Box>
            <Button type="submit" variant="contained" color="primary">
              Submit Candidate
            </Button>
            </Box>

        </Box>
    
      </form>
    </Box>
  );
}
