'use client';

import React, { useState } from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';
import timeGridPlugin from '@fullcalendar/timegrid';
import { Box, Typography, Paper } from '@mui/material';

const CalendarPage = () => {
  const [events, setEvents] = useState([
    {
      title: 'Ram Navami',
      date: '2025-04-15',
    },
    {
      title: 'Good Friday',
      date: '2025-04-21',
    },
    {
      title: 'Team Goal Deadline',
      date: '2025-04-18',
    },
  ]);

  const handleDateClick = (arg) => {
    alert(`Date clicked: ${arg.dateStr}`);
    // You can add a modal to add event here
  };

  return (
    <Box sx={{ p: 1 }}>
      <Paper elevation={3} sx={{ p: 2 }}>
        <Typography variant="h5" gutterBottom>
          Calendar
        </Typography>
        <FullCalendar
          plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
          initialView="dayGridMonth"
          dateClick={handleDateClick}
          events={events}
          height="auto"
          headerToolbar={{
            left: 'prev,next today',
            center: 'title',
            right: 'dayGridMonth,timeGridWeek,timeGridDay',
          }}
        />
      </Paper>
    </Box>
  );
};

export default CalendarPage;
