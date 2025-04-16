'use client';
import React, { useState, useEffect } from "react";
import {
  Paper,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Button,
  Modal,
  Box,
  TextField,
  Snackbar,
} from "@mui/material";

const dummyLeaveRequests = [
  {
    id: "1",
    employeeName: "John Doe",
    leaveType: "Sick Leave",
    startDate: "2025-04-18",
    endDate: "2025-04-20",
    status: "Pending",
  },
  {
    id: "2",
    employeeName: "Jane Smith",
    leaveType: "Vacation",
    startDate: "2025-04-22",
    endDate: "2025-04-25",
    status: "Pending",
  },
  {
    id: "3",
    employeeName: "Emily Clark",
    leaveType: "Personal",
    startDate: "2025-04-24",
    endDate: "2025-04-26",
    status: "Pending",
  },
];

const LeaveRequestsPage = () => {
  const [leaveRequests, setLeaveRequests] = useState(dummyLeaveRequests);
  const [openModal, setOpenModal] = useState(false);
  const [selectedRequest, setSelectedRequest] = useState(null);
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState("");
  const [snackbarSeverity, setSnackbarSeverity] = useState("success");

  const handleApprove = (id) => {
    setLeaveRequests(leaveRequests.map((request) =>
      request.id === id ? { ...request, status: "Approved" } : request
    ));
    setSnackbarMessage("Leave request approved!");
    setSnackbarSeverity("success");
    setSnackbarOpen(true);
  };

  const handleReject = (id) => {
    setLeaveRequests(leaveRequests.map((request) =>
      request.id === id ? { ...request, status: "Rejected" } : request
    ));
    setSnackbarMessage("Leave request rejected!");
    setSnackbarSeverity("error");
    setSnackbarOpen(true);
  };

  const handleModalClose = () => setOpenModal(false);

  return (
    <Paper sx={{ p: 4 ,marginTop:'40px'}}>
      <Typography variant="h5"  mb={2}>
        Leave Requests
      </Typography>
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Employee Name</TableCell>
              <TableCell>Leave Type</TableCell>
              <TableCell>Start Date</TableCell>
              <TableCell>End Date</TableCell>
              <TableCell>Status</TableCell>
              <TableCell>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {leaveRequests.map((request) => (
              <TableRow key={request.id}>
                <TableCell>{request.employeeName}</TableCell>
                <TableCell>{request.leaveType}</TableCell>
                <TableCell>{request.startDate}</TableCell>
                <TableCell>{request.endDate}</TableCell>
                <TableCell>{request.status}</TableCell>
                <TableCell>
                  {request.status === "Pending" ? (
                    <>
                      <Button
                        variant="contained"
                        color="success"
                        onClick={() => handleApprove(request.id)}
                        sx={{ mr: 2 }}
                      >
                        Approve
                      </Button>
                      <Button
                        variant="contained"
                        color="error"
                        onClick={() => handleReject(request.id)}
                      >
                        Reject
                      </Button>
                    </>
                  ) : (
                    <Typography variant="body2" color="textSecondary">
                      {request.status}
                    </Typography>
                  )}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      {/* Snackbar for feedback */}
      <Snackbar
        open={snackbarOpen}
        autoHideDuration={3000}
        onClose={() => setSnackbarOpen(false)}
        message={snackbarMessage}
        severity={snackbarSeverity}
      />

      {/* Modal for leave request details */}
      <Modal open={openModal} onClose={handleModalClose}>
        <Box sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: 400,
          bgcolor: "background.paper",
          p: 4,
          borderRadius: 2,
        }}>
          <Typography variant="h6" mb={2}>
            Leave Request Details
          </Typography>
          {selectedRequest && (
            <>
              <TextField
                label="Employee Name"
                fullWidth
                value={selectedRequest.employeeName}
                disabled
                sx={{ mb: 2 }}
              />
              <TextField
                label="Leave Type"
                fullWidth
                value={selectedRequest.leaveType}
                disabled
                sx={{ mb: 2 }}
              />
              <TextField
                label="Start Date"
                fullWidth
                value={selectedRequest.startDate}
                disabled
                sx={{ mb: 2 }}
              />
              <TextField
                label="End Date"
                fullWidth
                value={selectedRequest.endDate}
                disabled
                sx={{ mb: 2 }}
              />
              <TextField
                label="Status"
                fullWidth
                value={selectedRequest.status}
                disabled
                sx={{ mb: 2 }}
              />
              <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
                <Button onClick={handleModalClose} variant="outlined">
                  Close
                </Button>
              </Box>
            </>
          )}
        </Box>
      </Modal>
    </Paper>
  );
};

export default LeaveRequestsPage;
