'use client';

import React from 'react';
import {
  Box,
  Grid,
  Typography,
  Paper,
  Avatar,
  Divider,
  Button,
} from '@mui/material';
import EmailIcon from '@mui/icons-material/Email';
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid';
import WorkIcon from '@mui/icons-material/Work';
import HomeIcon from '@mui/icons-material/Home';

export default function EmployeeProfilePage() {
  const employee = {
    name: 'John Doe',
    email: 'john.doe@example.com',
    phone: '+1 123 456 7890',
    position: 'Senior Recruiter',
    department: 'Talent Acquisition',
    location: 'New York, USA',
    profileImage: '/profile.jpg',
  };

  return (
    <Box >
      <Paper
        elevation={2}
        sx={{
          borderRadius: 4,
          p: 4,
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'flex-start',
          flexDirection: { xs: 'column', md: 'row' },
          gap: 4,
        }}
      >
        {/* Left - Profile Image and Name */}
        <Box sx={{ textAlign: 'center', minWidth: '250px' }}>
          <Avatar
            src={employee.profileImage}
            alt={employee.name}
            sx={{
              width: 90,
              height: 90,
              mx: 'auto',
              mb: 2,
              boxShadow: 3,
            }}
          />
          <Typography variant="h6" >
            {employee.name}
          </Typography>
          <Typography variant="body1" color="text.secondary">
            {employee.position}
          </Typography>
          <Button
            variant="outlined"
            sx={{ mt: 2, borderRadius: '20px', textTransform: 'none' }}
          >
            Edit Profile
          </Button>
        </Box>

        {/* Right - Details */}
        <Box sx={{ flex: 1 }}>
          <Typography variant="h6" gutterBottom>
            Contact Information
          </Typography>
          <Divider sx={{ mb: 2 }} />

          <Box sx={{ mb: 2 }}>
            <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
              <EmailIcon sx={{ mr: 1, color: 'primary.main' }} />
              <Typography>{employee.email}</Typography>
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <PhoneAndroidIcon sx={{ mr: 1, color: 'primary.main' }} />
              <Typography>{employee.phone}</Typography>
            </Box>
          </Box>

          <Typography variant="h6" gutterBottom>
            Job Information
          </Typography>
          <Divider sx={{ mb: 2 }} />

          <Box>
            <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
              <WorkIcon sx={{ mr: 1, color: 'primary.main' }} />
              <Typography>{employee.department}</Typography>
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <HomeIcon sx={{ mr: 1, color: 'primary.main' }} />
              <Typography>{employee.location}</Typography>
            </Box>
          </Box>
        </Box>
      </Paper>
    </Box>
  );
}
