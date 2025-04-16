'use client';
import React from 'react';
import {
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  Box,
  Chip,
} from '@mui/material';
import { CalendarMonth } from '@mui/icons-material';

const holidays = [
  { id: 1, name: 'New Year\'s Day', date: '2025-01-01', type: 'Public Holiday' },
  { id: 2, name: 'Republic Day', date: '2025-01-26', type: 'National Holiday' },
  { id: 3, name: 'Holi', date: '2025-03-14', type: 'Festival' },
  { id: 4, name: 'Good Friday', date: '2025-04-18', type: 'Religious Holiday' },
  { id: 5, name: 'Independence Day', date: '2025-08-15', type: 'National Holiday' },
  { id: 6, name: 'Christmas Day', date: '2025-12-25', type: 'Festival' },
];

export default function HolidaysPage() {
  return (
    <Container maxWidth="lg" sx={{ mt: 1 }}>
      <Box
      sx={{mb:2}}
      >
        <Typography variant="h5" >
          🗓️ Company Holiday Calendar - 2025
        </Typography>
      </Box>

      <Grid container spacing={3}>
        {holidays.map((holiday) => (
          <Grid item xs={12} sm={6} md={4} key={holiday.id}>
            <Card
              sx={{
                transition: '0.3s',
                borderRadius: 3,
                boxShadow: 2,
                '&:hover': {
                  transform: 'translateY(-5px)',
                  boxShadow: 5,
                  backgroundColor: '#f5faff',
                },
              }}
            >
              <CardContent>
                <Box display="flex" alignItems="center" gap={1} mb={1}>
                  <CalendarMonth color="primary" />
                  <Typography variant="h6" fontWeight={600}>
                    {holiday.name}
                  </Typography>
                </Box>
                <Typography variant="body1" color="text.secondary" mb={1}>
                  📅 {new Date(holiday.date).toDateString()}
                </Typography>
                <Chip label={holiday.type} color="info" variant="outlined" />
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}
