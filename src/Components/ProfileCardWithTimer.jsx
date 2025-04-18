import React, { useState, useEffect } from 'react';
import { Box, Typography, Button, CircularProgress, Paper, Avatar } from '@mui/material';

export default function ClockTimerCard() {
  const [checkedIn, setCheckedIn] = useState(false);
  const [startTime, setStartTime] = useState(null);
  const [time, setTime] = useState(0);
  const [timer, setTimer] = useState(null);

  const maxTime = 8 * 3600; // 8 hours

  const formatTime = (seconds) => {
    const h = Math.floor(seconds / 3600)
      .toString()
      .padStart(2, '0');
    const m = Math.floor((seconds % 3600) / 60)
      .toString()
      .padStart(2, '0');
    const s = Math.floor(seconds % 60)
      .toString()
      .padStart(2, '0');
    return `${h}:${m}:${s}`;
  };

  const handleToggle = () => {
    if (checkedIn) {
      clearInterval(timer);
      setTimer(null);
    } else {
      setStartTime(new Date());
      const interval = setInterval(() => {
        setTime((prev) => prev + 1);
      }, 1000);
      setTimer(interval);
    }
    setCheckedIn(!checkedIn);
  };

  useEffect(() => {
    return () => {
      if (timer) clearInterval(timer);
    };
  }, [timer]);

  const getFormattedStartTime = () => {
    if (!startTime) return '';
    return new Intl.DateTimeFormat('en-GB', {
      weekday: 'short',
      day: '2-digit',
      month: 'short',
      year: 'numeric',
      hour: 'numeric',
      minute: '2-digit',
    }).format(startTime);
  };

  return (
<Paper
  elevation={2}
  sx={{
    borderRadius: 4, // Slightly more rounded corners
    p: 3, // More padding
    width: 300, // Slightly wider
    mx: 'auto',
    height: "auto",
    textAlign: 'center',
    position: 'relative',
    // Visual enhancements:
    background: 'white', // Subtle gradient
    border: '1px solid rgba(0, 0, 0, 0.08)', // Light border
    // Decorative elements:
    // Typography improvements:
    fontFamily: 'HK Grotesk, Inter, sans-serif',
    color: '#2d3748',
    marginTop:'40px'
  }}
>

      <Box
        sx={{
          position: 'absolute',
          top: -30,
          left: '50%',
          transform: 'translateX(-50%)',
          width: 80,
          height: 80,
          borderRadius: '50%',
          backgroundColor: 'white',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          boxShadow: 3,
        }}
      >
        {/* Avatar or icon inside small paper */}
        <Avatar
          alt="Profile"
          src="/path-to-image.jpg"
          sx={{ width: 70, height: 70 }}
        />
      </Box>
      {/* Check-in Time */}
      <Typography variant="subtitle2" fontWeight={600} sx={{ marginTop: "50px" }}>
        {checkedIn ? 'Check in at' : 'Not checked in'}
      </Typography>
      {checkedIn && (
        <Typography variant="caption" color="text.secondary">
          {getFormattedStartTime()}
        </Typography>
      )}

   {/* Circular Timer */}
<Box sx={{ position: 'relative', mt: 1, mb: 2 }}>
  {/* Background Ring */}
  <CircularProgress
    variant="determinate"
    value={100}
    size={70}
    thickness={2}
    sx={{
      color: '#e0e0e0',
      position: 'absolute',
    }}
  />
  {/* Progress Ring */}
  <CircularProgress
    variant="determinate"
    value={(time / maxTime) * 100}
    size={70}
    thickness={2}
    sx={{
      color: '#1976d2',
    }}
  />
  <Box
    sx={{
      top: 0,
      left: 0,
      bottom: 0,
      right: 0,
      position: 'absolute',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontWeight: 500,
      fontSize: '12px', // reduced font size
      fontFamily: 'cursive',
      color: "#d22eff"
    }}
  >
    {formatTime(time)}
  </Box>
</Box>


      {/* Toggle Button */}
      <Button
        variant="contained"
        onClick={handleToggle}
        sx={{
          backgroundColor: '#d22eff',
          borderRadius: '6px',
          textTransform: 'none',
          px: 2,
          fontWeight: 500,
          '&:hover': {
            backgroundColor: '#1976d2',
          },
        }}
      >
        {checkedIn ? 'Check Out' : 'Check In'}
      </Button>
    </Paper>
  );
}
