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
import { useRouter } from 'next/navigation';
import Link from 'next/link';

const AdminRecruitmentDashboard = () => {
    const [searchText, setSearchText] = useState('');
    const router = useRouter()

    const handleSearch = (event) => {
        setSearchText(event.target.value);
    };

    const handleDownloadCSV = () => {
        try {
            const csvData = jsonToCSV(filteredCandidates);
            const blob = new Blob([csvData], { type: 'text/csv;charset=utf-8;' });
            const link = document.createElement('a');
            link.href = URL.createObjectURL(blob);
            link.setAttribute('download', 'recruitment_data.csv');
            link.click();
        } catch (error) {
            console.error('CSV export failed:', error);
            alert('Failed to export CSV');
        }
    };

    const handleStageUpdate = (id, newStage) => {
        setCandidates(prev =>
            prev.map(candidate =>
                candidate.id === id ? { ...candidate, stage: newStage } : candidate
            )
        );
    };

    const renderStageChip = (stage) => {
        const colorMap = {
            'Interview': 'warning',
            'Offer': 'primary',
            'Onboarded': 'success',
            'Rejected': 'error'
        };
        return <Chip label={stage} color={colorMap[stage] || 'default'} />;
    };

    const candidates = [
        {
            id: 1,
            fullName: 'Ravi Kumar',
            email: 'ravi@example.com',
            position: 'Backend Developer',
            stage: 'Interview'
        },
        {
            id: 2,
            fullName: 'Meena Sharma',
            email: 'meena@example.com',
            position: 'HR Executive',
            stage: 'Offer'
        },
        {
            id: 3,
            fullName: 'John Doe',
            email: 'john@example.com',
            position: 'Frontend Developer',
            stage: 'Onboarded'
        }
    ];

    const filteredCandidates = candidates.filter(candidate =>
        candidate.fullName.toLowerCase().includes(searchText.toLowerCase())
    );

    const columns = [
        { field: 'fullName', headerName: 'Candidate', flex: 1, minWidth: 180 },
        { field: 'email', headerName: 'Email', flex: 1.5, minWidth: 250 },
        { field: 'position', headerName: 'Position', flex: 1, minWidth: 150 },
        {
            field: 'stage',
            headerName: 'Stage',
            flex: 1,
            renderCell: (params) => renderStageChip(params.row.stage)
        },
        {
            field: 'actions',
            headerName: 'Actions',
            flex: 1.5,
            renderCell: (params) => (
                <Box display="flex" gap={1}>
                    <Button
                        variant="contained"
                        size="small"
                        color="success"
                        onClick={() => handleStageUpdate(params.row.id, 'Onboarded')}
                    >
                        Mark Onboarded
                    </Button>
                    <Link href={`/dashboard/admin/recruitment/details/${params.row.id}`}>
                    <Button
                        variant="outlined"
                        size="small"
                        
                    >
                        View
                    </Button>
                    </Link>
                   
                </Box>
            )
        }
    ];

    return (
        <Box sx={{ maxWidth: 1100, mx: 'auto' }}>
            <Typography variant="h5" fontWeight={600} gutterBottom>
                Recruitment & Onboarding Overview
            </Typography>

            <ParentContainer maxWidth="lg" >
                <StyledPaper elevation={0}>
                    <SearchContainer>
                        <SearchField
                            variant="outlined"
                            size="small"
                            placeholder="Search candidate..."
                            value={searchText}
                            onChange={handleSearch}
                            sx={{ width: '300px' }}
                        />
                        <ExportButton
                            variant="contained"
                            color="primary"
                            onClick={handleDownloadCSV}
                            sx={{ backgroundColor: '#1976d2', borderRadius: '5px' }}
                        >
                            Export To Excel
                        </ExportButton>
                    </SearchContainer>

                    <Box sx={{ width: '100%', overflowX: 'auto' }}>
                           <Box sx={{ minWidth: 1200 }}>
                        <StyledDataGrid
                            rows={filteredCandidates}
                            columns={columns}
                            initialState={{
                                pagination: { paginationModel: { page: 0, pageSize: 5 } }
                            }}
                            pageSizeOptions={[5, 10, 25, 50]}
                            disableSelectionOnClick
                            disableColumnResize={false}  // Allow resizing if needed
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

export default AdminRecruitmentDashboard;
