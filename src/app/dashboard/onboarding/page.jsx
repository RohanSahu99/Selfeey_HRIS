'use client';

import {
  Box,
  Button,
  Typography,
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
} from "../../../styles/trackerTable";
import { Plus } from 'phosphor-react';

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
    { field: 'firstName', headerName: 'First name', width: 150 },
    { field: 'lastName', headerName: 'Last name', width: 150 },
    {
      field: 'age',
      headerName: 'Age',
      type: 'number',
      width: 110,
    },
    {
      field: 'fullName',
      headerName: 'Full name',
      width: 200,
      valueGetter: (params) =>
        `${params?.row.firstName || ''} ${params?.row.lastName || ''}`,
    },
  ];

  const rows = [
    { id: 1, lastName: 'Doe', firstName: 'John', age: 25 },
    { id: 2, lastName: 'Smith', firstName: 'Anna', age: 30 },
    { id: 3, lastName: 'Lee', firstName: 'Chris', age: 22 },
    { id: 4, lastName: 'Kumar', firstName: 'Raj', age: 29 },
    { id: 5, lastName: 'Garcia', firstName: 'Maria', age: 35 },
  ];
  

  return (
    <Box >
      {/* Header Row */}
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        sx={{paddingLeft:"24px",paddingRight:"24px"}}
      >
        <Typography variant="h5">
          Onboarding
        </Typography>

        <Box display="flex" gap={2}>
          <Button variant="contained" sx={{ boxShadow: 3, backgroundColor: "#1976d2" }}
           onClick={() => router.push('/dashboard/onboarding/addcandidate')}
          >
           Add Candidate
          </Button>
        </Box>
      </Box>

      {/* Table */}
      <ParentContainer maxWidth="lg">
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
  );
}
