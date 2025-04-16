'use client';

import React from 'react';
import {
  Box,
  Typography,
  Paper,
  Grid,
  Avatar,
  Chip,
  Button,
} from '@mui/material';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import EventAvailableIcon from '@mui/icons-material/EventAvailable';
import EventBusyIcon from '@mui/icons-material/EventBusy';

const leaveRequests = [
  {
    id: 1,
    name: 'Alice Johnson',
    avatar: '/avatars/alice.jpg',
    type: 'Casual Leave',
    from: '2025-04-20',
    to: '2025-04-22',
    status: 'Approved',
  },
  {
    id: 2,
    name: 'Bob Smith',
    avatar: '/avatars/bob.jpg',
    type: 'Sick Leave',
    from: '2025-04-18',
    to: '2025-04-19',
    status: 'Pending',
  },
  {
    id: 3,
    name: 'Charlie Adams',
    avatar: '/avatars/charlie.jpg',
    type: 'Maternity Leave',
    from: '2025-04-10',
    to: '2025-04-30',
    status: 'Rejected',
  },
];

const statusColors = {
  Approved: 'success',
  Pending: 'warning',
  Rejected: 'error',
};

export default function LeaveApprovalStatusPage() {
  return (
    <Box>

      <Grid spacing={3}>
        {leaveRequests.map((request) => (
          <Grid item xs={12} key={request.id}>
            <Paper
              elevation={2}
              sx={{
                p: 1  ,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                borderRadius: 3,
                marginBottom:"20px"
              }}
            >
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <Avatar
                  src={request.avatar}
                  alt={request.name}
                  sx={{ width: 56, height: 56, mr: 2 }}
                />
                <Box>
                  <Typography variant="subtitle1" >
                    {request.name}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {request.type}
                  </Typography>
                  <Box sx={{ display: 'flex', alignItems: 'center', mt: 1 }}>
                    <CalendarMonthIcon fontSize="small" sx={{ mr: 0.5 }} />
                    <Typography variant="body2">
                      {request.from} → {request.to}
                    </Typography>
                  </Box>
                </Box>
              </Box>

              <Box sx={{ textAlign: 'right' }}>
                <Chip
                  label={request.status}
                  color={statusColors[request.status]}
                  sx={{ mb: 1 }}
                />

                {request.status === 'Pending' && (
                  <Box>
                    <Button
                      size="small"
                      variant="contained"
                      color="success"
                      sx={{ mr: 1 }}
                      startIcon={<EventAvailableIcon />}
                    >
                      Approve
                    </Button>
                    <Button
                      size="small"
                      variant="outlined"
                      color="error"
                      startIcon={<EventBusyIcon />}
                    >
                      Reject
                    </Button>
                  </Box>
                )}
              </Box>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
