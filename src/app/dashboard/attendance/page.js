'use client';
import React, { useState } from 'react';
import {
  Box,
  Typography,
  Button,
  Paper,
  Grid,
  Avatar,
  Divider,
} from '@mui/material';
import {
  DateCalendar,
  PickersDay,
} from '@mui/x-date-pickers';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import dayjs from 'dayjs';

export default function AttendancePage() {
  const [attendance, setAttendance] = useState({});
  const [selectedDate, setSelectedDate] = useState(dayjs());

  const markAttendance = () => {
    const dateKey = selectedDate.format('YYYY-MM-DD');
    setAttendance((prev) => ({
      ...prev,
      [dateKey]: 'present',
    }));
  };

  const CustomDay = (props) => {
    const { day, ...other } = props;
    const dateKey = dayjs(day).format('YYYY-MM-DD');
    const isPresent = attendance[dateKey] === 'present';
    const isAbsent = attendance[dateKey] === 'absent';

    return (
      <PickersDay
        {...other}
        day={day}
        sx={{
          bgcolor: isPresent ? '#c8e6c9' : isAbsent ? '#ffcdd2' : 'inherit',
          border: isPresent
            ? '2px solid green'
            : isAbsent
            ? '2px solid red'
            : 'none',
          borderRadius: '50%',
        }}
      />
    );
  };

  // Count attendance summary
  const presentCount = Object.values(attendance).filter((status) => status === 'present').length;
  const absentCount = Object.values(attendance).filter((status) => status === 'absent').length;

  return (
    <Box sx={{ maxWidth: 1100, mx: 'auto', p: 3 }}>
      {/* Page Title */}
      <Typography variant="h5" fontWeight={600} gutterBottom>
        📊 Attendance Dashboard
      </Typography>

      {/* User Info Card */}
      <Paper sx={{ p: 3, mb: 4, borderRadius: 3, boxShadow: 3 }}>
        <Grid container spacing={2} alignItems="center">
          <Grid item>
            <Avatar
              alt="Employee"
              src="/profile.png"
              sx={{ width: 60, height: 60 }}
            />
          </Grid>
          <Grid item xs>
            <Typography variant="h6">John Doe</Typography>
            <Typography variant="body2" color="text.secondary">
              Software Engineer
            </Typography>
          </Grid>
          <Grid item>
            <Button
              variant="contained"
              color="success"
              onClick={markAttendance}
              sx={{
                textTransform: 'none',
                borderRadius: '20px',
                px: 4,
              }}
            >
              Mark Attendance
            </Button>
          </Grid>
        </Grid>
      </Paper>

      {/* Calendar and Summary */}
      <Box display="flex" gap={4} flexWrap="wrap">
        {/* Calendar */}
        <Paper
          sx={{
            p: 2,
            borderRadius: 3,
            width: { xs: '100%', md: 400 },
            boxShadow: 2,
          }}
        >
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DateCalendar
              value={selectedDate}
              onChange={(newValue) => setSelectedDate(newValue)}
              slots={{ day: CustomDay }}
            />
          </LocalizationProvider>
        </Paper>

        {/* Summary Box */}
        <Paper
          sx={{
            p: 3,
            borderRadius: 3,
            backgroundColor: '#f9f9f9',
            boxShadow: 2,
            minWidth: 250,
            flexGrow: 1,
          }}
        >
          <Typography variant="h6" fontWeight={600} mb={2}>
            📅 Monthly Summary
          </Typography>

          <Divider sx={{ mb: 2 }} />

          <Box display="flex" alignItems="center" mb={2}>
            <Typography
              variant="body1"
              sx={{ fontWeight: 500, color: 'green', mr: 1 }}
            >
              ✅ Present:
            </Typography>
            <Typography variant="body1" sx={{ fontWeight: 600 }}>
              {presentCount}
            </Typography>
          </Box>

          <Box display="flex" alignItems="center">
            <Typography
              variant="body1"
              sx={{ fontWeight: 500, color: 'red', mr: 1 }}
            >
              ❌ Absent:
            </Typography>
            <Typography variant="body1" sx={{ fontWeight: 600 }}>
              {absentCount}
            </Typography>
          </Box>
        </Paper>
      </Box>
    </Box>
  );
}
