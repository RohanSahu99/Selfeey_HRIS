'use client';

import React, { useState } from 'react';
import { Box, Tabs, Tab, Typography } from '@mui/material';
import StatCard from './Statcard';
import LeaveCards from './Leaves';
import LeaveApprovalStatusPage from './LeaveStatus';
import EmployeeProfilePage from './Profile';
import AttendancePage from './Attendance';
import GoalPage from './GoalPage';
import ActivitiesPage from './Activities';

const routes = [
    { label: 'Activities', value: 'activities' },
    { label: 'Profile', value: 'profile' },
    { label: 'Leave', value: 'leaves' },
    { label: 'Approval', value: 'approval' },
    { label: 'Attendance', value: 'attendance' },
    { label: 'Goal', value: 'goals' },
];

export default function HorizontalTabBar() {
    const [selectedTab, setSelectedTab] = useState('activities');

    const handleChange = (event, newValue) => {
        setSelectedTab(newValue);
    };

    const renderTabContent = () => {
        switch (selectedTab) {
            case 'activities':
                return <ActivitiesPage/>;
            case 'profile':
                return <EmployeeProfilePage/>;
            case 'leaves':
                return <LeaveCards />;
            case 'approval':
                return <LeaveApprovalStatusPage/>;
            case 'attendance':
                return <AttendancePage/>;
            case 'goals':
                return <GoalPage/>;
            default:
                return null;
        }
    };

    return (
        <Box sx={{ width: '100%' }}>
            <Box sx={{
                position: 'sticky',
                top: 0,
                zIndex: 1100,
                backgroundColor: 'background.paper',
                boxShadow: '0 2px 10px rgba(0,0,0,0.08)',
                borderRadius: '12px',
                mb: 3,
                mx: 'auto',
                maxWidth: '100%',
                overflow: 'hidden'
            }}>
                <Tabs
                    value={selectedTab}
                    onChange={handleChange}
                    variant="scrollable"
                    scrollButtons="auto"
                    allowScrollButtonsMobile
                    sx={{
                        '& .MuiTabs-indicator': {
                            height: 3,
                            borderRadius: '3px 3px 0 0',
                            backgroundColor: 'primary.main',
                        },
                        '& .MuiTabs-scroller': {
                            overflow: 'visible !important',
                        }
                    }}
                >
                    {routes.map((route) => (
                        <Tab
                            key={route.value}
                            label={
                                <Typography variant="subtitle2" sx={{ 
                                    fontWeight: selectedTab === route.value ? 600 : 500,
                                    textTransform: 'capitalize',
                                    px: 1
                                }}>
                                    {route.label}
                                </Typography>
                            }
                            value={route.value}
                            sx={{
                                minHeight: 56,
                                minWidth: 100,
                                px: 2,
                                position: 'relative',
                                '&:after': {
                                    content: '""',
                                    position: 'absolute',
                                    bottom: 0,
                                    left: '50%',
                                    transform: 'translateX(-50%)',
                                    width: selectedTab === route.value ? '80%' : 0,
                                    height: 3,
                                    backgroundColor: 'primary.main',
                                    transition: 'all 0.3s ease',
                                },
                                '&:hover': {
                                    '&:after': {
                                        width: '80%',
                                        backgroundColor: selectedTab === route.value ? 'primary.main' : 'action.hover',
                                    },
                                    backgroundColor: 'transparent',
                                },
                                color: selectedTab === route.value ? 'primary.main' : 'text.secondary',
                            }}
                        />
                    ))}
                </Tabs>
            </Box>

            {/* Content Below Tabs */}
            <Box sx={{ 
                mt: 2,
                p: 3,
                borderRadius: 2,
                backgroundColor: 'background.paper',
                boxShadow: '0 1px 3px rgba(0,0,0,0.05)'
            }}>
                {renderTabContent()}
            </Box>
        </Box>
    );
}