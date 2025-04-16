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
  MenuItem,
  Select,
  InputLabel,
  FormControl,
} from "@mui/material";

const dummyAttendanceData = [
  {
    id: "1",
    employeeName: "John Doe",
    date: "2025-04-15",
    status: "Present",
  },
  {
    id: "2",
    employeeName: "Jane Smith",
    date: "2025-04-15",
    status: "Absent",
  },
  {
    id: "3",
    employeeName: "Emily Clark",
    date: "2025-04-15",
    status: "Present",
  },
];

const AttendancePage = () => {
  const [attendanceData, setAttendanceData] = useState(dummyAttendanceData);
  const [openModal, setOpenModal] = useState(false);
  const [selectedAttendance, setSelectedAttendance] = useState(null);
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState("");
  const [snackbarSeverity, setSnackbarSeverity] = useState("success");

  const handleStatusChange = (id, newStatus) => {
    setAttendanceData(attendanceData.map((attendance) =>
      attendance.id === id ? { ...attendance, status: newStatus } : attendance
    ));
    setSnackbarMessage(`Attendance updated to ${newStatus}!`);
    setSnackbarSeverity("success");
    setSnackbarOpen(true);
    setOpenModal(false);
  };

  const handleModalClose = () => setOpenModal(false);

  const handleEditClick = (attendance) => {
    setSelectedAttendance(attendance);
    setOpenModal(true);
  };

  return (
    <Paper sx={{ p: 4,marginTop:"40px"}}>
      <Typography variant="h5" mb={2}>
        Employee Attendance
      </Typography>
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Employee Name</TableCell>
              <TableCell>Date</TableCell>
              <TableCell>Status</TableCell>
              <TableCell>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {attendanceData.map((attendance) => (
              <TableRow key={attendance.id}>
                <TableCell>{attendance.employeeName}</TableCell>
                <TableCell>{attendance.date}</TableCell>
                <TableCell>{attendance.status}</TableCell>
                <TableCell>
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={() => handleEditClick(attendance)}
                  >
                    Adjust
                  </Button>
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

      {/* Modal for editing attendance */}
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
            Adjust Attendance
          </Typography>
          {selectedAttendance && (
            <>
              <TextField
                label="Employee Name"
                fullWidth
                value={selectedAttendance.employeeName}
                disabled
                sx={{ mb: 2 }}
              />
              <TextField
                label="Date"
                fullWidth
                value={selectedAttendance.date}
                disabled
                sx={{ mb: 2 }}
              />

              <FormControl fullWidth sx={{ mb: 2 }}>
                <InputLabel>Status</InputLabel>
                <Select
                  value={selectedAttendance.status}
                  onChange={(e) =>
                    handleStatusChange(selectedAttendance.id, e.target.value)
                  }
                >
                  <MenuItem value="Present">Present</MenuItem>
                  <MenuItem value="Absent">Absent</MenuItem>
                  <MenuItem value="Leave">Leave</MenuItem>
                </Select>
              </FormControl>

              <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
                <Button onClick={handleModalClose} variant="outlined" sx={{ mr: 2 }}>
                  Cancel
                </Button>
                <Button
                  variant="contained"
                  color="primary"
                  onClick={() => handleStatusChange(selectedAttendance.id, selectedAttendance.status)}
                >
                  Save Changes
                </Button>
              </Box>
            </>
          )}
        </Box>
      </Modal>
    </Paper>
  );
};

export default AttendancePage;
