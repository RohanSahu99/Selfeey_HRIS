"use client";
import { ThemeProvider, Typography } from '@mui/material'
import React from 'react'
import theme from '../utils/theme'
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { Users, Calendar, ChartBar, User, RocketLaunch } from 'phosphor-react';

function Features() {
    return (
        <ThemeProvider theme={theme}>
            <div style={{ paddingTop: "40px", marginTop: '40px', display: "flex", justifyContent: "center" }}>

                <Box sx={{ flexGrow: 1 }}>
                    <Grid container spacing={2}>
                        <Grid size={{ xs: 12, md: 12 }} sx={{ display: "flex", alignItems: "center", flexDirection: "column" }}>
                            <Typography variant='h4'>
                                All-inclusive platform for Fearless Hiring
                            </Typography>
                            <Typography variant='h6'>
                                Everything you need to get into action and achieve all your hiring goals.
                            </Typography>
                        </Grid>
                        <Grid size={{ xs: 12, md: 12 }} sx={{ display: "flex", justifyContent: "space-around", flexWrap: "wrap", gap: "50px", marginTop: "40px" }}>
                            <Card
                                sx={{
                                    maxWidth: 345,
                                    boxShadow: "none",
                                    transition: "all 0.3s ease",
                                    backgroundImage: 'linear-gradient(to right top, #d22eff, #a03feb, #7043d3, #4441b6, #183a97)',
                                    color: 'white',
                                    borderTopRightRadius: '30px',
                                    borderBottomLeftRadius: '30px',
                                }}
                            >
                                <CardContent>
                                    <Box
                                        sx={{
                                            width: "50px",
                                            height: "50px",
                                            borderRadius: "50%",
                                            display: "flex",
                                        }}
                                    >
                                        <Users size={32} weight="fill" />
                                    </Box>
                                    <Typography sx={{ fontSize: "20px", fontWeight: "600" }}>
                                        Employee Portal
                                    </Typography>
                                    <Typography variant="h6">
                                        A centralized portal for employee activities, records, and interactions.
                                    </Typography>
                                </CardContent>
                            </Card>

                            <Card
                                sx={{
                                    maxWidth: 345,
                                    backgroundColor: "#2860f5",
                                    boxShadow: "none",
                                    border: "1px solid #e0e0e0", // light gray border
                                    backgroundImage: 'linear-gradient(to right top, #d22eff, #a03feb, #7043d3, #4441b6, #183a97)',
                                    color: 'white',
                                    borderTopRightRadius: '30px',
                                    borderBottomLeftRadius: '30px',
                                }}
                            >
                                <CardContent>
                                    <Box
                                        sx={{
                                            width: "50px",
                                            height: "50px",
                                            borderRadius: "50%",
                                            display: "flex",
                                        }}
                                    >
                                        <Calendar size={32} weight="fill" />
                                    </Box>
                                    <Typography sx={{ fontSize: "20px", fontWeight: "600" }}>
                                        Attendance & leave Management
                                    </Typography>
                                    <Typography variant="h6">
                                        Automated tracking of attendance, leave requests, and approvals.
                                    </Typography>
                                </CardContent>
                            </Card>

                            <Card
                                sx={{
                                    maxWidth: 345,
                                    backgroundColor: "#2860f",
                                    boxShadow: "none",
                                    border: "1px solid #e0e0e0", // light gray border
                                    transition: "all 0.3s ease",
                                    backgroundImage: 'linear-gradient(to right top, #d22eff, #a03feb, #7043d3, #4441b6, #183a97)',
                                    color: 'white',
                                    borderTopRightRadius: '30px',
                                    borderBottomLeftRadius: '30px',
                                }}
                            >
                                <CardContent>
                                    <Box
                                        sx={{
                                            width: "50px",
                                            height: "50px",
                                            borderRadius: "50%",
                                            display: "flex",
                                        }}
                                    >
                                        <ChartBar size={32} weight="fill" />
                                    </Box>
                                    <Typography sx={{ fontSize: "20px", fontWeight: "600" }}>
                                        Performance Appraisal
                                    </Typography>
                                    <Typography variant="h6">
                                        Structured feedback, review cycles, and performance scoring tools.
                                    </Typography>
                                </CardContent>
                            </Card>

                            <Card
                                sx={{
                                    maxWidth: 345,
                                    backgroundColor: "#2860f5",

                                    boxShadow: "none",
                                    border: "1px solid #e0e0e0", // light gray border
                                    transition: "all 0.3s ease",
                                    backgroundImage: 'linear-gradient(to right top, #d22eff, #a03feb, #7043d3, #4441b6, #183a97)',
                                    color: 'white',
                                    borderTopRightRadius: '30px',
                                    borderBottomLeftRadius: '30px',
                                }}
                            >
                                <CardContent>
                                    <Box
                                        sx={{
                                            width: "50px",
                                            height: "50px",
                                            borderRadius: "50%",
                                            display: "flex",
                                        }}
                                    >
                                        <User size={32} weight="fill" />
                                    </Box>
                                    <Typography sx={{ fontSize: "20px", fontWeight: "600" }}>
                                        HR Process Automation
                                    </Typography>
                                    <Typography variant="h6">
                                        Streamline onboarding, exit processes, and internal HR workflows.
                                    </Typography>
                                </CardContent>
                            </Card>

                            <Card
                                sx={{
                                    maxWidth: 345,
                                    backgroundColor: "#2860f5",
                                    boxShadow: "none",
                                    border: "1px solid #e0e0e0", // light gray border
                                    transition: "all 0.3s ease",
                                    backgroundImage: 'linear-gradient(to right top, #d22eff, #a03feb, #7043d3, #4441b6, #183a97)',
                                    color: 'white',
                                    borderTopRightRadius: '30px',
                                    borderBottomLeftRadius: '30px',
                                }}
                            >
                                <CardContent>
                                    <Box
                                        sx={{
                                            width: "50px",
                                            height: "50px",
                                            borderRadius: "50%",
                                            display: "flex",
                                        }}
                                    >
                                        <RocketLaunch size={32} weight="fill" />
                                    </Box>
                                    <Typography sx={{ fontSize: "20px", fontWeight: "600" }}>
                                        Recruitment Dashboard
                                    </Typography>
                                    <Typography variant="h6">
                                        Monitor hiring pipeline, recruiter performance, and candidate stages
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Grid>
                    </Grid>
                </Box>
            </div>
        </ThemeProvider>

    )
}

export default Features
