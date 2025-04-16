'use client';

import React from 'react';
import { Box, Grid, Paper, Typography, Button } from '@mui/material';
import BeachAccessIcon from '@mui/icons-material/BeachAccess';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import EventBusyIcon from '@mui/icons-material/EventBusy';
import LocalHospitalIcon from '@mui/icons-material/LocalHospital';

const leaves = [
  {
    name: 'Annual Leave',
    available: 12,
    booked: 3,
    icon: <BeachAccessIcon fontSize="large" sx={{ color: '#1976d2' }} />,
  },
  {
    name: 'Sick Leave',
    available: 8,
    booked: 2,
    icon: <LocalHospitalIcon fontSize="large" sx={{ color: '#d32f2f' }} />,
  },
  {
    name: 'Casual Leave',
    available: 5,
    booked: 1,
    icon: <EventBusyIcon fontSize="large" sx={{ color: '#ed6c02' }} />,
  },
  {
    name: 'Maternity Leave',
    available: 90,
    booked: 10,
    icon: <CalendarMonthIcon fontSize="large" sx={{ color: '#9c27b0' }} />,
  },
];

export default function LeaveCards() {
  return (
    <Grid  spacing={3}>
      {leaves.map((leave, index) => (
        <Grid item xs={12} key={index}>
          <Paper
            elevation={2}
            sx={{
              height: '70px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              p: 1,
              borderRadius: '16px',
              marginBottom:"20px"
         
            }}
          >
            {/* Left Side */}
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
              {leave.icon}
              <Typography variant="h6" >
                {leave.name}
              </Typography>
            </Box>

            {/* Right Side */}
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 4 }}>
              <Box>
                <Typography variant="body1" fontWeight={500}>
                  Available Days: {leave.available}
                </Typography>
              
              </Box>
              <Box>
              <Typography variant="body2" color="text.secondary">
                  Booked Days: {leave.booked}
                </Typography>
              </Box>

              <Button
                variant="contained"
                sx={{
                  borderRadius: '20px',
                  textTransform: 'none',
                  fontWeight: 500,
                  px: 3,
                  backgroundColor: '#1976d2',
                  '&:hover': { backgroundColor: '#125ea6' },
                }}
              >
                Apply Leave
              </Button>
            </Box>
          </Paper>
        </Grid>
      ))}
    </Grid>
  );
}
