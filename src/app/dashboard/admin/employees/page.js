'use client'
import React, { useState } from 'react';
import {
    Box, Typography, Button, IconButton, Dialog, DialogTitle,
    DialogContent, DialogActions, TextField, Select, MenuItem,Tooltip   
} from '@mui/material';
import { Edit, Delete, Add } from '@mui/icons-material';
import Link from 'next/link';
import {
    ExportButton,
    ParentContainer,
    SearchContainer,
    SearchField,
    StyledDataGrid,
    StyledPaper,
} from "../../../../styles/trackerTable";


const initialUsers = [
    { id: 1, name: 'Alice HR', email: 'alice@example.com', role: 'HR' },
    { id: 2, name: 'Bob Employee', email: 'bob@example.com', role: 'Employee' },
];

export default function AdminUserManagementPage() {
    const [users, setUsers] = useState(initialUsers);
    const [open, setOpen] = useState(false);
    const [editIndex, setEditIndex] = useState(null);
    const [formData, setFormData] = useState({ name: '', email: '', role: 'HR' });


    
    const columns = [
      { field: 'id', headerName: 'ID', width: 90 },
      { field: 'firstName', headerName: 'First name', width: 200 },
      { field: 'lastName', headerName: 'Last name', width: 200 },
      {
        field: 'age',
        headerName: 'Age',
        type: 'number',
        width: 200,
      },
      {
        field: 'actions',
        headerName: 'Action',
        width: 250,
        renderCell: (params) => (
          <div>
            <Tooltip title="Edit">
              <IconButton
                color="primary"
                onClick={() => handleEdit(params.row)}
              >
                <Edit />
              </IconButton>
            </Tooltip>
            <Tooltip title="Delete">
              <IconButton
                color="error"
                onClick={() => handleDelete(params.row)}
              >
                <Delete />
              </IconButton>
            </Tooltip>
          </div>
        ),
      },
    ];
    

    const rows = [
        { id: 1, lastName: 'Doe', firstName: 'John', age: 25 },
        { id: 2, lastName: 'Smith', firstName: 'Anna', age: 30 },
        { id: 3, lastName: 'Lee', firstName: 'Chris', age: 22 },
        { id: 4, lastName: 'Kumar', firstName: 'Raj', age: 29 },
        { id: 5, lastName: 'Garcia', firstName: 'Maria', age: 35 },
    ];

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


    const handleClose = () => {
        setOpen(false);
        setEditIndex(null);
    };

    const handleSave = () => {
        if (editIndex !== null) {
            const updatedUsers = [...users];
            updatedUsers[editIndex] = formData;
            setUsers(updatedUsers);
        } else {
            setUsers([...users, { ...formData, id: Date.now() }]);
        }
        handleClose();
    };

    const handleDelete = (index) => {
        const updated = [...users];
        updated.splice(index, 1);
        setUsers(updated);
    };



    return (
        <Box sx={{ maxWidth: 1100, mx: 'auto' }}>
            <Typography variant="h5" fontWeight={600} mb={1}>Manage Accounts</Typography>
            <Link href='/dashboard/admin/employees/addemployee'>
                <Button
                    variant="contained"
                    startIcon={<Add />}
                    sx={{ mb: 1 }}

                >
                    Add User
                </Button>
            </Link>


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
                            aria-label="Search jobseekers"
                        />
                        <ExportButton
                            variant="contained"
                            color="primary"
                            onClick={handleDownloadCSV}
                            // disabled={!filteredRows.length}
                            sx={{ backgroundColor: "#1976d2", borderRadius: "5px" }}
                        >
                            Export To Excel
                        </ExportButton>
                    </SearchContainer>

                    <Box sx={{ width: '100%', overflowX: 'auto' }}>
                        <Box sx={{ minWidth: 1200 }}>
                            <StyledDataGrid
                                rows={rows}
                                columns={columns} // Use modified columns with clickable names
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

            {/* Create/Edit Dialog */}
            <Dialog open={open} onClose={handleClose}>
                <DialogTitle>{editIndex !== null ? 'Edit User' : 'Add User'}</DialogTitle>
                <DialogContent sx={{ display: 'flex', flexDirection: 'column', gap: 2, mt: 1 }}>
                    <TextField
                        label="Full Name"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        fullWidth
                    />
                    <TextField
                        label="Email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        fullWidth
                    />
                    <Select
                        value={formData.role}
                        onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                        fullWidth
                    >
                        <MenuItem value="HR">HR</MenuItem>
                        <MenuItem value="Employee">Employee</MenuItem>
                    </Select>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Cancel</Button>
                    <Button variant="contained" onClick={handleSave}>
                        {editIndex !== null ? 'Update' : 'Create'}
                    </Button>
                </DialogActions>
            </Dialog>
        </Box>
    );
}
