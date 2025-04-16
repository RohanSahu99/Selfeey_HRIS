'use client';

import React from 'react';
import {
  Box,
  Typography,
  Avatar,
  Paper,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Divider,
} from '@mui/material';

const attendanceData = [
  { date: '2025-04-01', checkIn: '09:05 AM', checkOut: '06:00 PM', status: 'Present' },
  { date: '2025-04-02', checkIn: '09:15 AM', checkOut: '06:05 PM', status: 'Late' },
  { date: '2025-04-03', checkIn: '—', checkOut: '—', status: 'Absent' },
  { date: '2025-04-04', checkIn: '09:00 AM', checkOut: '06:00 PM', status: 'Present' },
];

export default function AttendancePage() {
  return (
    <Box >
      <Paper elevation={3} sx={{ borderRadius: 4, p: 2, mb: 3 }}>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
          <Avatar
            alt="John Doe"
            src="/profile.jpg"
            sx={{ width: 80, height: 80, boxShadow: 2 }}
          />
          <Box>
            <Typography variant="h6" >
              John Doe
            </Typography>
            <Typography color="text.secondary" variant='body2'>Employee ID: EMP123</Typography>
            <Typography color="text.secondary"  variant='body2'>Department: HR</Typography>
          </Box>
        </Box>
      </Paper>

      <Paper elevation={2} sx={{ borderRadius: 3, p: 2 }}>
        <Typography variant="h6"  sx={{ mb: 2 }}>
          Attendance Records
        </Typography>
        <Divider sx={{ mb: 2 }} />

        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Date</TableCell>
              <TableCell>Check-In</TableCell>
              <TableCell>Check-Out</TableCell>
              <TableCell>Status</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {attendanceData.map((row, index) => (
              <TableRow key={index}>
                <TableCell>{row.date}</TableCell>
                <TableCell>{row.checkIn}</TableCell>
                <TableCell>{row.checkOut}</TableCell>
                <TableCell
                  sx={{
                    color:
                      row.status === 'Present'
                        ? 'green'
                        : row.status === 'Late'
                        ? 'orange'
                        : 'red',
                    fontWeight: 500,
                  }}
                >
                  {row.status}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Paper>
    </Box>
  );
}
