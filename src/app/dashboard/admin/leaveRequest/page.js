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

const AdminLeaveRequestsPage = () => {


    const [searchText, setSearchText] = useState("");

    const handleSearch = (event) => {
        setSearchText(event.target.value);
    };

    const handleDownloadCSV = () => {
        try {
            const csvData = jsonToCSV(filteredRows);
            const blob = new Blob([csvData], { type: "text/csv;charset=utf-8;" });
            const link = document.createElement("a");
            const url = URL.createObjectURL(blob);
            link.href = url;
            link.setAttribute("download", "seekers_data.csv");
            link.click();
            URL.revokeObjectURL(url);
        } catch (error) {
            console.error("Error generating CSV:", error);
            alert("Failed to export CSV");
        }
    };


    const handleUpdateStatus = (id, newStatus) => {
        setLeaveRequests(prev =>
            prev.map(req =>
                req.id === id ? { ...req, status: newStatus } : req
            )
        );
    };


    const renderStatusChip = (status) => {
        switch (status) {
            case 'approved':
                return <Chip label="Approved" color="success" />;
            case 'rejected':
                return <Chip label="Rejected" color="error" />;
            default:
                return <Chip label="Pending" color="warning" />;
        }
    };
    const leaveRequests = [
        {
            id: 1,
            employeeName: "Alice Johnson",
            fromDate: "2025-04-10",
            toDate: "2025-04-12",
            reason: "Personal work",
            leaveType: "Casual Leave",
            status: "pending"
        },
        {
            id: 2,
            employeeName: "Bob Smith",
            fromDate: "2025-04-15",
            toDate: "2025-04-16",
            reason: "Medical appointment",
            leaveType: "Sick Leave",
            status: "approved"
        },
        {
            id: 3,
            employeeName: "Charlie Brown",
            fromDate: "2025-04-20",
            toDate: "2025-04-22",
            reason: "Family function",
            leaveType: "Earned Leave",
            status: "rejected"
        },
        {
            id: 4,
            employeeName: "Diana Prince",
            fromDate: "2025-04-18",
            toDate: "2025-04-18",
            reason: "Urgent work",
            leaveType: "Casual Leave",
            status: "pending"
        },
        {
            id: 5,
            employeeName: "Ethan Hunt",
            fromDate: "2025-04-25",
            toDate: "2025-04-26",
            reason: "Out of town",
            leaveType: "Paid Leave",
            status: "pending"
        }
    ];


    const columns = [
        { field: 'employeeName', headerName: 'Employee', width: 200 },
        { field: 'fromDate', headerName: 'From', width: 150 },
        { field: 'toDate', headerName: 'To', width: 150 },
        { field: 'reason', headerName: 'Reason', width: 250 },
        { field: 'leaveType', headerName: 'Leave Type', width: 180 },
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
            params.row.status === 'pending' ? (
              <>
                <Button
                  variant="contained"
                  size="small"
                  color="success"
                  onClick={() => handleUpdateStatus(params.row.id, 'approved')}
                  sx={{ mr: 1 }}
                >
                  Approve
                </Button>
                <Button
                  variant="contained"
                  size="small"
                  color="error"
                  onClick={() => handleUpdateStatus(params.row.id, 'rejected')}
                >
                  Reject
                </Button>
              </>
            ) : (
              <Typography>-</Typography>
            )
          )
        }
      ];
      


    return (
        <Box sx={{ maxWidth: 1000, mx: 'auto' }}>
            <Typography variant="h5" fontWeight={600} gutterBottom>
                Leave Requests
            </Typography>

            <ParentContainer maxWidth="lg">
                <StyledPaper elevation={0}>
                    <SearchContainer>
                        <SearchField
                            variant="outlined"
                            size="small"
                            placeholder="Search..."
                            value={searchText}
                            onChange={handleSearch}
                            sx={{ width: "300px" }}
                            aria-label="Search leave requests"
                        />
                        <ExportButton
                            variant="contained"
                            color="primary"
                            onClick={handleDownloadCSV}
                            sx={{ backgroundColor: "#1976d2", borderRadius: "5px" }}
                        >
                            Export To Excel
                        </ExportButton>
                    </SearchContainer>
                    <Box sx={{ width: '100%', overflowX: 'auto' }}>
                        <Box>
                            <StyledDataGrid
                                rows={leaveRequests}
                                columns={columns}
                                initialState={{
                                    pagination: { paginationModel: { page: 0, pageSize: 5 } },
                                }}
                                pageSizeOptions={[5, 10, 25, 50]}
                                disableSelectionOnClick
                                disableColumnResize={true}
                                columnHeaderHeight={60}
                                disableColumnSelector={true}
                                disableColumnSorting={false}
                                disableDensitySelector={true}
                                disableRowSelectionOnClick={true}
                                showCellVerticalBorder={true}
                                getRowHeight={() => 80}
                            />
                        </Box>
                    </Box>

                </StyledPaper>
            </ParentContainer>
        </Box>
    );
};

export default AdminLeaveRequestsPage;
