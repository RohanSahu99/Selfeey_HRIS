// pages/my-leaves.js
'use client';
import * as React from 'react';
import {
  Container,
  Typography,
  Card,
  CardContent,
  Grid,
  Box,
  Button,
  Modal,
  TextField,
  MenuItem,
  Paper,
} from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';

const leaveTypes = [
  { value: 'casual', label: 'Casual Leave' },
  { value: 'sick', label: 'Sick Leave' },
  { value: 'earned', label: 'Earned Leave' },
];

const leaveBalance = {
  casual: { total: 10, used: 4 },
  sick: { total: 8, used: 2 },
  earned: { total: 12, used: 6 },
};

const leaveRequests = [
  {
    id: 1,
    type: 'Casual',
    startDate: '2025-04-01',
    endDate: '2025-04-03',
    status: 'Approved',
  },
  {
    id: 2,
    type: 'Sick',
    startDate: '2025-03-15',
    endDate: '2025-03-16',
    status: 'Pending',
  },
];

const columns = [
  { field: 'id', headerName: 'ID', width: 70 },
  { field: 'type', headerName: 'Leave Type', width: 130 },
  { field: 'startDate', headerName: 'Start Date', width: 130 },
  { field: 'endDate', headerName: 'End Date', width: 130 },
  { field: 'status', headerName: 'Status', width: 120 },
];

export default function MyLeaves() {
  const [open, setOpen] = React.useState(false);
  const [formData, setFormData] = React.useState({
    leaveType: '',
    startDate: '',
    endDate: '',
    reason: '',
  });

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Leave Request Submitted:', formData);
    alert('Leave request submitted!');
    handleClose();
  };

  return (
    <Container maxWidth="lg" sx={{ mt: 1 }}>
     <Box sx={{mb:2}}
>
  <Typography variant="h5" >
    Leave Summary
  </Typography>
</Box>

      {/* Leave Balance Cards */}
      <Grid container spacing={3} sx={{ mb: 3 }}>
        {Object.entries(leaveBalance).map(([key, val]) => (
          <Grid item xs={12} sm={4} key={key}>
          <Card
  sx={{
    transition: 'transform 0.3s, box-shadow 0.3s',
    borderRadius: 3,
    boxShadow: 2,
    '&:hover': {
      transform: 'translateY(-5px)',
      boxShadow: 6,
      backgroundColor: '#f9f9ff',
    },
  }}
>
  <CardContent>
    <Typography
      variant="h6"
      gutterBottom
      sx={{ color: '#3f51b5', fontWeight: 600 }}
    >
      {key.charAt(0).toUpperCase() + key.slice(1)} Leave
    </Typography>
    <Typography variant="body1" sx={{ color: '#333' }}>
      Used: {val.used} / Total: {val.total}
    </Typography>
    <Typography sx={{ color: 'success.main', fontWeight: 500 }}>
      Remaining: {val.total - val.used}
    </Typography>
  </CardContent>
</Card>

          </Grid>
        ))}
      </Grid>

      {/* Leave Request Table */}
      <Paper elevation={3} sx={{ mb: 4, p: 2 }}>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 2 }}>
          <Typography variant="h6">My Leave Requests</Typography>
          <Button variant="contained" onClick={handleOpen}>
            Apply for Leave
          </Button>
        </Box>
        <Box sx={{ height: 350 }}>
          <DataGrid
            rows={leaveRequests}
            columns={columns}
            pageSize={5}
            rowsPerPageOptions={[5]}
            disableSelectionOnClick
          />
        </Box>
      </Paper>

      {/* Leave Request Modal */}
      <Modal open={open} onClose={handleClose}>
        <Box
          sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: 400,
            bgcolor: 'background.paper',
            borderRadius: 2,
            boxShadow: 24,
            p: 4,
          }}
        >
          <Typography variant="h6" gutterBottom>
            Apply for Leave
          </Typography>
          <Box component="form" onSubmit={handleSubmit} sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
            <TextField
              select
              label="Leave Type"
              name="leaveType"
              value={formData.leaveType}
              onChange={handleChange}
              required
            >
              {leaveTypes.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>
            <TextField
              label="Start Date"
              type="date"
              name="startDate"
              value={formData.startDate}
              onChange={handleChange}
              InputLabelProps={{ shrink: true }}
              required
            />
            <TextField
              label="End Date"
              type="date"
              name="endDate"
              value={formData.endDate}
              onChange={handleChange}
              InputLabelProps={{ shrink: true }}
              required
            />
            <TextField
              label="Reason"
              name="reason"
              multiline
              rows={3}
              value={formData.reason}
              onChange={handleChange}
              required
            />
            <Button type="submit" variant="contained">
              Submit
            </Button>
          </Box>
        </Box>
      </Modal>
    </Container>
  );
}
