'use client';

import React, { useState } from 'react';
import {
    Box,
    Typography,
    Button,
    Chip,
    Avatar,
    Paper,
    Divider,
    Stack,
    IconButton,
    Grid
} from '@mui/material';
import {
    Email,
    Phone,
    Home,
    Work,
    CalendarToday,
    Description,
    Person,
    Edit,
    ArrowBack
} from '@mui/icons-material';
import { useRouter } from 'next/navigation';
import { useParams } from 'next/navigation';

const CandidateDetailsPage = () => {
    const router = useRouter();
    const params = useParams();
    const id = params?.id;
    const [candidate, setCandidate] = useState(null);

    // Mock candidate data
    const candidates = [
        {
            id: 1,
            fullName: 'Ravi Kumar',
            email: 'ravi@example.com',
            position: 'Backend Developer',
            stage: 'Interview',
            phone: '123-456-7890',
            address: '123 Street, Bangalore, India - 560001',
            notes: 'Strong technical skills with 5 years of experience in Node.js and Python. Demonstrated excellent problem-solving abilities during the technical interview. Good cultural fit for our engineering team.',
            interviewDate: '2025-04-15',
            resumeLink: 'https://example.com/resume/ravi.pdf',
            skills: ['Node.js', 'Python', 'AWS', 'Docker', 'MongoDB'],
            experience: '5 years'
        }
    ];

    const selectedCandidate = candidates.find(candidate => candidate.id === parseInt(id));

    if (!selectedCandidate) {
        return (
            <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
                <Typography>Loading...</Typography>
            </Box>
        );
    }

    const { fullName, email, position, stage, phone, address, notes, interviewDate, resumeLink, skills, experience } = selectedCandidate;

    const handleUpdateStage = (newStage) => {
        setCandidate(prev => ({ ...prev, stage: newStage }));
    };

    const getInitials = (name) => {
        return name.split(' ').map(n => n[0]).join('').toUpperCase();
    };

    return (
        <Box sx={{ maxWidth: 1200, mx: 'auto', px: 2 }}>
            <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
                <IconButton onClick={() => router.back()} sx={{ mr: 2 }}>
                    <ArrowBack />
                </IconButton>
                <Typography variant="h5" fontWeight={600}>
                    Candidate Profile
                </Typography>
            </Box>

            <Paper elevation={3} sx={{ p: 3, borderRadius: 3 }}>
                <Grid container spacing={3}>
                    {/* Left Column - Compact Profile */}
                    <Grid item xs={12} md={4}>
                        <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
                            <Avatar sx={{ 
                                width: 56, 
                                height: 56, 
                                fontSize: 20,
                                bgcolor: 'primary.main',
                                mr: 2
                            }}>
                                {getInitials(fullName)}
                            </Avatar>
                            <Box>
                                <Typography variant="h6" fontWeight={600}>{fullName}</Typography>
                                <Typography variant="body2" color="text.secondary">{position}</Typography>
                            </Box>
                        </Box>

                        <Stack spacing={1.5} sx={{ mb: 3 }}>
                            <Box sx={{ display: 'flex', alignItems: 'flex-start' }}>
                                <Email color="action" sx={{ mr: 1.5, mt: 0.5 }} fontSize="small" />
                                <Typography variant="body2">{email}</Typography>
                            </Box>
                            <Box sx={{ display: 'flex', alignItems: 'flex-start' }}>
                                <Phone color="action" sx={{ mr: 1.5, mt: 0.5 }} fontSize="small" />
                                <Typography variant="body2">{phone}</Typography>
                            </Box>
                            <Box sx={{ display: 'flex', alignItems: 'flex-start' }}>
                                <Home color="action" sx={{ mr: 1.5, mt: 0.5 }} fontSize="small" />
                                <Typography variant="body2">{address}</Typography>
                            </Box>
                            <Box sx={{ display: 'flex', alignItems: 'flex-start' }}>
                                <Work color="action" sx={{ mr: 1.5, mt: 0.5 }} fontSize="small" />
                                <Typography variant="body2">{experience} experience</Typography>
                            </Box>
                        </Stack>

                        <Box sx={{ display: 'flex', gap: 1.5 }}>
                            <Button
                                variant="contained"
                                size="small"
                                startIcon={<Description fontSize="small" />}
                                onClick={() => window.open(resumeLink, '_blank')}
                                sx={{ flex: 1 }}
                            >
                                Resume
                            </Button>
                            <Button
                                variant="outlined"
                                size="small"
                                startIcon={<Edit fontSize="small" />}
                                sx={{ flex: 1 }}
                            >
                                Edit
                            </Button>
                        </Box>
                    </Grid>

                    {/* Right Column - Details */}
                    <Grid item xs={12} md={8}>
                        <Box sx={{ mb: 3 }}>
                            <Box sx={{ 
                                display: 'flex', 
                                justifyContent: 'space-between', 
                                alignItems: 'center',
                                mb: 2
                            }}>
                                <Box>
                                    <Typography variant="subtitle1" color="text.secondary" gutterBottom>
                                        Recruitment Status
                                    </Typography>
                                    {renderStageChip(stage)}
                                </Box>
                                
                                <Box sx={{ display: 'flex', gap: 1.5 }}>
                                    <Button
                                        variant="contained"
                                        color="primary"
                                        size="small"
                                        onClick={() => handleUpdateStage('Offer')}
                                        disabled={stage === 'Offer' || stage === 'Onboarded'}
                                    >
                                        Move to Offer
                                    </Button>
                                    <Button
                                        variant="contained"
                                        color="success"
                                        size="small"
                                        onClick={() => handleUpdateStage('Onboarded')}
                                        disabled={stage === 'Onboarded'}
                                    >
                                        Onboard
                                    </Button>
                                </Box>
                            </Box>
                            
                            <Box sx={{ display: 'flex', alignItems: 'center' }}>
                                <CalendarToday color="action" sx={{ mr: 1.5 }} fontSize="small" />
                                <Typography variant="body2">
                                    Interview: {new Date(interviewDate).toLocaleDateString('en-US', { 
                                        year: 'numeric', 
                                        month: 'short', 
                                        day: 'numeric' 
                                    })}
                                </Typography>
                            </Box>
                        </Box>

                        <Divider sx={{ my: 2 }} />

                        <Box sx={{ mb: 3 }}>
                            <Typography variant="subtitle1" gutterBottom sx={{ mb: 1.5 }}>
                                Skills & Expertise
                            </Typography>
                            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                                {skills.map((skill, index) => (
                                    <Chip 
                                        key={index} 
                                        label={skill} 
                                        variant="outlined" 
                                        color="primary"
                                        size="small"
                                    />
                                ))}
                            </Box>
                        </Box>

                        <Divider sx={{ my: 2 }} />

                        <Box>
                            <Typography variant="subtitle1" gutterBottom sx={{ mb: 1.5 }}>
                                Evaluation Notes
                            </Typography>
                            <Paper variant="outlined" sx={{ p: 2, borderRadius: 1.5 }}>
                                <Typography variant="body2" sx={{ whiteSpace: 'pre-line' }}>
                                    {notes}
                                </Typography>
                            </Paper>
                        </Box>
                    </Grid>
                </Grid>
            </Paper>
        </Box>
    );
};

const renderStageChip = (stage) => {
    const colorMap = {
        'Interview': 'warning',
        'Offer': 'primary',
        'Onboarded': 'success',
        'Rejected': 'error'
    };
    
    return (
        <Chip 
            label={stage} 
            color={colorMap[stage] || 'default'} 
            size="small"
            sx={{ fontWeight: 500 }} 
        />
    );
};

export default CandidateDetailsPage;