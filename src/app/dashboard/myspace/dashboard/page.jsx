'use client';
import React from 'react';
import { 
  Box, 
  Typography, 
  Paper, 
  Grid, 
  Avatar, 
  LinearProgress,
  Chip,
  Divider,
  useTheme,
  useMediaQuery
} from '@mui/material';
import {
  CalendarToday,
  Cake,
  Work,
  EventAvailable,
  Star
} from '@mui/icons-material';
import { DataGrid } from '@mui/x-data-grid';
import { PieChart, Pie, Cell, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';
import dayjs from 'dayjs';

const Dashboard = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const isTablet = useMediaQuery(theme.breakpoints.between('sm', 'md'));

  // Fixed dimensions that adapt to screen size
  const chartHeight = isMobile ? 200 : 250;
  const calendarHeight = isMobile ? 300 : 350;
  const dataGridHeight = isMobile ? 300 : 350;


// Fixed dimensions that adapt to screen size

// Sample data - INCLUDING THE MISSING leaveSummary
const leaveData = [
  { id: 1, type: 'Annual Leave', startDate: '2023-06-01', endDate: '2023-06-05', status: 'Approved' },
  { id: 2, type: 'Sick Leave', startDate: '2023-06-10', endDate: '2023-06-11', status: 'Approved' },
  { id: 3, type: 'Personal Leave', startDate: '2023-07-15', endDate: '2023-07-16', status: 'Pending' },
];

const holidays = [
  { date: '2023-07-04', name: 'Independence Day' },
  { date: '2023-09-04', name: 'Labor Day' },
  { date: '2023-11-23', name: 'Thanksgiving' },
  { date: '2023-12-25', name: 'Christmas Day' },
];

const birthdays = [
  { name: 'John Doe', date: '2023-06-15', avatar: '/avatar1.jpg' },
  { name: 'Jane Smith', date: '2023-06-20', avatar: '/avatar2.jpg' },
  { name: 'Mike Johnson', date: '2023-06-25', avatar: '/avatar3.jpg' },
];

const goals = [
  { name: 'Sales Target', current: 75, target: 100 },
  { name: 'Projects Completed', current: 3, target: 5 },
  { name: 'Training Hours', current: 12, target: 20 },
];

// THIS WAS MISSING IN THE PREVIOUS VERSION
const leaveSummary = [
  { name: 'Annual', value: 10, total: 15, color: '#4CAF50' },
  { name: 'Sick', value: 3, total: 10, color: '#2196F3' },
  { name: 'Personal', value: 2, total: 5, color: '#FFC107' },
];

const performanceData = [
  { name: 'Jan', value: 65 },
  { name: 'Feb', value: 59 },
  { name: 'Mar', value: 80 },
  { name: 'Apr', value: 81 },
  { name: 'May', value: 56 },
  { name: 'Jun', value: 55 },
];

const leaveColumns = [
  { field: 'type', headerName: 'Leave Type', width: 150 },
  { field: 'startDate', headerName: 'Start Date', width: 120 },
  { field: 'endDate', headerName: 'End Date', width: 120 },
  { 
    field: 'status', 
    headerName: 'Status', 
    width: 120,
    renderCell: (params) => (
      <Chip 
        label={params.value} 
        color={params.value === 'Approved' ? 'success' : 'warning'} 
        size="small"
      />
    )
  },
];

// Format date with dayjs
const formatDate = (dateString) => {
  return dayjs(dateString).format('MMMM D, YYYY');
};

const formatBirthday = (dateString) => {
  return dayjs(dateString).format('MMMM D');
};


  return (
    <Box sx={{ 
      maxWidth: '1800px', // Maximum fixed width
      margin: '0 auto'   // Center the dashboard
    }}>
      <Typography variant="h5" gutterBottom>
        Employee Dashboard
      </Typography>
      
      <Grid container spacing={isMobile ? 1 : 3}>
        {/* Leave Summary */}
        <Grid item xs={12} md={6} lg={4}>
          <Paper elevation={2} sx={{ 
            p: 2, 
            height: '100%',
            minHeight: isMobile ? 'auto' : '350px',
            width:"300px"
          }}>
            <Box display="flex" alignItems="center" mb={2}>
              <EventAvailable color="primary" sx={{ mr: 1 }} />
              <Typography variant="h6">Leave Summary</Typography>
            </Box>
            <Box sx={{ 
              width: '100%', 
              height: `${chartHeight}px`,
              margin: '0 auto'
            }}>
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={leaveSummary}
                    cx="50%"
                    cy="50%"
                    innerRadius={isMobile ? 50 : 60}
                    outerRadius={isMobile ? 70 : 80}
                    paddingAngle={5}
                    dataKey="value"
                  >
                    {leaveSummary.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
            </Box>
            <Box mt={2}>
              {leaveSummary.map((item) => (
                <Box key={item.name} display="flex" alignItems="center" mb={1}>
                  <Box 
                    width={12} 
                    height={12} 
                    bgcolor={item.color} 
                    mr={1} 
                    borderRadius="50%" 
                  />
                  <Typography variant="body2">
                    {item.name}: {item.value} / {item.total} days
                  </Typography>
                </Box>
              ))}
            </Box>
          </Paper>
        </Grid>

        {/* Upcoming Holidays */}
        <Grid item xs={12} md={6} lg={4}>
          <Paper elevation={3} sx={{ 
            p: 2, 
            height: '100%',
            minHeight: isMobile ? 'auto' : '350px',
            width:"300px"
          }}>
            <Box display="flex" alignItems="center" mb={2}>
              <CalendarToday color="primary" sx={{ mr: 1 }} />
              <Typography variant="h6">Upcoming Holidays</Typography>
            </Box>
            <Box sx={{ 
              overflowY: 'auto',
              maxHeight: isMobile ? 'none' : '300px',
              pr: 1
            }}>
              {holidays.map((holiday, index) => (
                <Box key={index} mb={2}>
                  <Typography variant="subtitle1" fontWeight="bold">
                    {holiday.name}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {formatDate(holiday.date)}
                  </Typography>
                  {index < holidays.length - 1 && <Divider sx={{ my: 1 }} />}
                </Box>
              ))}
            </Box>
          </Paper>
        </Grid>

        {/* Birthdays */}
        <Grid item xs={12} md={6} lg={4}>
          <Paper elevation={3} sx={{ 
            p: 2, 
            height: '100%',
            minHeight: isMobile ? 'auto' : '350px',
             width:"300px"
          }}>
            <Box display="flex" alignItems="center" mb={2}>
              <Cake color="primary" sx={{ mr: 1 }} />
              <Typography variant="h6">Upcoming Birthdays</Typography>
            </Box>
            <Box sx={{
              overflowY: 'auto',
              maxHeight: isMobile ? 'none' : '300px'
            }}>
              {birthdays.map((person, index) => (
                <Box key={index} display="flex" alignItems="center" mb={2}>
                  <Avatar src={person.avatar} sx={{ 
                    mr: 2,
                    width: isMobile ? 40 : 56,
                    height: isMobile ? 40 : 56
                  }} />
                  <Box>
                    <Typography variant="subtitle1">{person.name}</Typography>
                    <Typography variant="body2" color="text.secondary">
                      {formatBirthday(person.date)}
                    </Typography>
                  </Box>
                </Box>
              ))}
            </Box>
          </Paper>
        </Grid>

        {/* Goals/Targets */}
        <Grid item xs={12} md={6}>
          <Paper elevation={3} sx={{ 
            p: 2,
            height: '100%',
            minHeight: isMobile ? 'auto' : '350px',
             width:"300px"
          }}>
            <Box display="flex" alignItems="center" mb={2}>
              <Star color="primary" sx={{ mr: 1 }} />
              <Typography variant="h6">Your Goals & Targets</Typography>
            </Box>
            <Box>
              {goals.map((goal, index) => (
                <Box key={index} mb={3}>
                  <Box display="flex" justifyContent="space-between" mb={1}>
                    <Typography variant="body1">{goal.name}</Typography>
                    <Typography variant="body1">
                      {goal.current} / {goal.target}
                    </Typography>
                  </Box>
                  <LinearProgress
                    variant="determinate"
                    value={(goal.current / goal.target) * 100}
                    sx={{ 
                      height: 10, 
                      borderRadius: 5,
                      width: '100%'
                    }}
                  />
                  <Typography variant="caption" color="text.secondary">
                    {Math.round((goal.current / goal.target) * 100)}% completed
                  </Typography>
                </Box>
              ))}
            </Box>
          </Paper>
        </Grid>

        {/* Performance Chart */}
        <Grid item xs={12} md={6}>
          <Paper elevation={3} sx={{ 
            p: 2,
            height: '100%',
            minHeight: isMobile ? 'auto' : '350px',
             width:"600px"
          }}>
            <Box display="flex" alignItems="center" mb={2}>
              <Work color="primary" sx={{ mr: 1 }} />
              <Typography variant="h6">Performance</Typography>
            </Box>
            <Box sx={{ 
              width: '100%', 
              height: `${chartHeight}px`,
              margin: '0 auto'
            }}>
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={performanceData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Bar dataKey="value" fill="#8884d8" name="Performance Score" />
                </BarChart>
              </ResponsiveContainer>
            </Box>
          </Paper>
        </Grid>

        {/* Leave History */}
        <Grid item xs={12}>
          <Paper elevation={3} sx={{ p: 2 }}>
            <Box display="flex" alignItems="center" mb={2}>
              <EventAvailable color="primary" sx={{ mr: 1 }} />
              <Typography variant="h6">Your Leave History</Typography>
            </Box>
            <Box sx={{ 
              height: `${dataGridHeight}px`,
              width: '100%'
            }}>
              <DataGrid
                rows={leaveData}
                columns={leaveColumns}
                pageSize={5}
                rowsPerPageOptions={[5]}
                disableSelectionOnClick
              />
            </Box>
          </Paper>
        </Grid>

  
      </Grid>
    </Box>
  );
};

export default Dashboard;