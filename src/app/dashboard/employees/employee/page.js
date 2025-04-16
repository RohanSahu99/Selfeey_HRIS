'use client';

import {
  Box,
  Button,
} from '@mui/material';
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import {
  ExportButton,
  ParentContainer,
  SearchContainer,
  SearchField,
  StyledDataGrid,
  StyledPaper,
} from "../../../../styles/trackerTable";
import Link from 'next/link';
import { PencilSimple, Trash,Eye  } from 'phosphor-react';
import { IconButton } from '@mui/material';

const mockCandidates = Array.from({ length: 25 }, (_, i) => ({
  id: i + 1,
  name: `Candidate ${i + 1}`,
  email: `candidate${i + 1}@example.com`,
  status: i % 2 === 0 ? 'Pending' : 'Onboarded',
}));

export default function OnboardingPage() {
  const [anchorEl, setAnchorEl] = useState(null);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const router = useRouter();
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

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const paginatedData = mockCandidates.slice(
    page * rowsPerPage,
    page * rowsPerPage + rowsPerPage
  );

  const columns = [
    { field: 'id', headerName: 'ID', width: 90 },
    { field: 'employeeId', headerName: 'Employee ID', width: 130 },
    { field: 'firstName', headerName: 'First Name', width: 130 },
    { field: 'lastName', headerName: 'Last Name', width: 130 },
    { field: 'email', headerName: 'Email', width: 180 },
    { field: 'phone', headerName: 'Phone', width: 140 },
    { field: 'gender', headerName: 'Gender', width: 100 },
    { field: 'department', headerName: 'Department', width: 150 },
    { field: 'position', headerName: 'Position', width: 140 },
    { field: 'hireDate', headerName: 'Hire Date', width: 120 },
    { field: 'salary', headerName: 'Salary', width: 120 },
    { field: 'address', headerName: 'Address', width: 200 },
    {
      field: 'actions',
      headerName: 'Actions',
      width: 200,
      sortable: false,
      renderCell: (params) => (
        <div>
          <IconButton
            onClick={() => console.log('Edit clicked for', params.row)}
            color="primary"
          >
            <PencilSimple size={18} />
          </IconButton>
          <IconButton
            onClick={() => console.log('Delete clicked for', params.row)}
            color="error"
          >
            <Trash size={18} />
          </IconButton>
          <Link href='/dashboard/employees/employee/view'>
          <IconButton
            color="primary"
          >
            <Eye  size={18} />
          </IconButton>
          </Link>
         
        </div>
      ),
    },
  ];

  const rows = [
    {
      id: 1,
      employeeId: 'EMP001',
      firstName: 'John',
      lastName: 'Doe',
      email: 'john.doe@example.com',
      phone: '1234567890',
      gender: 'Male',
      department: 'Engineering',
      position: 'Software Engineer',
      hireDate: '2023-01-15',
      salary: 60000,
      address: '123 Elm Street, NY',
    },
    {
      id: 2,
      employeeId: 'EMP002',
      firstName: 'Anna',
      lastName: 'Smith',
      email: 'anna.smith@example.com',
      phone: '9876543210',
      gender: 'Female',
      department: 'Marketing',
      position: 'Marketing Manager',
      hireDate: '2022-10-01',
      salary: 70000,
      address: '456 Maple Ave, CA',
    },
  ];
  

  return (
    <Box sx={{marginTop:"40px"}} >
      {/* Header Row */}
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        sx={{paddingLeft:"24px",paddingRight:"24px"}}
      >
        <Box display="flex" >
            <Link href='/dashboard/employees/employee/add'>
            <Button variant="contained" sx={{ boxShadow: 3, backgroundColor: "#1976d2" }}
          >
           Add Employee
          </Button>
            </Link>
        
        </Box>
      </Box>

      {/* Table */}
<Box sx={{maxWidth:'90vw'}}>
<ParentContainer maxWidth="lg" >
                <StyledPaper >
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
                            sx={{ backgroundColor: "#1976d2",borderRadius:"5px" }}
                        >
                            Export To Excel
                        </ExportButton>
                    </SearchContainer>
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
                </StyledPaper>
            </ParentContainer>
</Box>
    
    </Box>
  );
}
