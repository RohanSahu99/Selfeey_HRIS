'use client';

import React, { useState } from 'react';
import {
  Box,
  Typography,
  Button,
  Chip
} from '@mui/material';
import {
  ParentContainer,
  StyledPaper,
  SearchContainer,
  SearchField,
  ExportButton,
  StyledDataGrid
} from '../../../../styles/trackerTable';

const AdminAttendancePage = () => {
  const [searchText, setSearchText] = useState("");

  const handleSearch = (event) => {
    setSearchText(event.target.value);
  };

  const handleExport = () => {
    // Dummy export logic
    alert("Export to Excel coming soon!");
  };

  const [attendanceData, setAttendanceData] = useState([
    {
      id: 1,
      employeeName: 'Alice Johnson',
      date: '2025-04-15',
      checkIn: '09:00 AM',
      checkOut: '06:00 PM',
      status: 'Present'
    },
    {
      id: 2,
      employeeName: 'Bob Smith',
      date: '2025-04-15',
      checkIn: '09:30 AM',
      checkOut: '06:15 PM',
      status: 'Late'
    },
    {
      id: 3,
      employeeName: 'Charlie Brown',
      date: '2025-04-15',
      checkIn: '-',
      checkOut: '-',
      status: 'Absent'
    },
    {
      id: 4,
      employeeName: 'Diana Prince',
      date: '2025-04-15',
      checkIn: '08:50 AM',
      checkOut: '05:55 PM',
      status: 'Present'
    }
  ]);

  const handleUpdateStatus = (id, newStatus) => {
    setAttendanceData(prev =>
      prev.map(record =>
        record.id === id ? { ...record, status: newStatus } : record
      )
    );
  };

  const renderStatusChip = (status) => {
    switch (status) {
      case 'Present':
        return <Chip label="Present" color="success" />;
      case 'Absent':
        return <Chip label="Absent" color="error" />;
      case 'Late':
        return <Chip label="Late" color="warning" />;
      default:
        return <Chip label={status} />;
    }
  };

  const columns = [
    { field: 'employeeName', headerName: 'Employee', width: 200 },
    { field: 'date', headerName: 'Date', width: 150 },
    { field: 'checkIn', headerName: 'Check-In', width: 150 },
    { field: 'checkOut', headerName: 'Check-Out', width: 150 },
    {
      field: 'status',
      headerName: 'Status',
      width: 150,
      renderCell: (params) => renderStatusChip(params.row.status)
    },
    {
      field: 'actions',
      headerName: 'Actions',
      width: 250,
      renderCell: (params) => (
        <>
          <Button
            size="small"
            variant="outlined"
            color="success"
            sx={{ mr: 1 }}
            onClick={() => handleUpdateStatus(params.row.id, 'Present')}
          >
            Mark Present
          </Button>
          <Button
            size="small"
            variant="outlined"
            color="error"
            onClick={() => handleUpdateStatus(params.row.id, 'Absent')}
          >
            Mark Absent
          </Button>
        </>
      )
    }
  ];

  return (
    <Box sx={{ maxWidth: 1100, mx: 'auto' }}>
      <Typography variant="h5" fontWeight={600} gutterBottom>
        Employee Attendance
      </Typography>

      <ParentContainer maxWidth="lg">
        <StyledPaper elevation={0}>
          <SearchContainer>
            <SearchField
              variant="outlined"
              size="small"
              placeholder="Search employee..."
              value={searchText}
              onChange={handleSearch}
              sx={{ width: 300 }}
            />
            <ExportButton
              variant="contained"
              color="primary"
              onClick={handleExport}
            >
              Export To Excel
            </ExportButton>
          </SearchContainer>

          <Box sx={{ width: '100%', overflowX: 'auto' }}>
            <Box sx={{ minWidth: 1200 }}>
              <StyledDataGrid
                rows={attendanceData}
                columns={columns}
                initialState={{
                  pagination: { paginationModel: { page: 0, pageSize: 5 } }
                }}
                pageSizeOptions={[5, 10, 25]}
                disableSelectionOnClick
                getRowHeight={() => 80}
              />
            </Box>
          </Box>
        </StyledPaper>
      </ParentContainer>
    </Box>
  );
};

export default AdminAttendancePage;
