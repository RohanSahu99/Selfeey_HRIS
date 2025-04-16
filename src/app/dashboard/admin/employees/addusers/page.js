'use client';

import { useState } from 'react';
import {
    Box,
    Grid,
    Typography,
    TextField,
    MenuItem,
    FormControl,
    InputLabel,
    Select,
    Button,
    InputAdornment
} from '@mui/material';
import { User, Mail, Phone, Briefcase, Users, Calendar, Key, Clock, MapPin, IndianRupee } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { ArrowLeft } from 'lucide-react'; 

export default function AddRecruiterPage() {
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        mobile: '',
        empId: '',
        role: '',
        department: '',
        reportingManager: '',
        username: '',
        password: '',
        confirmPassword: '',
        accessLevel: '',
        joiningDate: '',
        workingHours: '',
        location: '',
        salary:''
    });
    const router = useRouter()

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form submitted:', formData);
        // Add your API call or form processing logic here
    };

    const roleOptions = [
        { value: 'recruiter', label: 'Recruiter' },
        { value: 'senior_recruiter', label: 'Senior Recruiter' },
        { value: 'hr_manager', label: 'HR Manager' },
        { value: 'talent_acquisition', label: 'Talent Acquisition Specialist' },
    ];

    const departmentOptions = [
        { value: 'hr', label: 'Human Resources' },
        { value: 'it', label: 'Information Technology' },
        { value: 'engineering', label: 'Engineering' },
        { value: 'marketing', label: 'Marketing' },
        { value: 'finance', label: 'Finance' },
    ];

    const accessLevelOptions = [
        { value: 'admin', label: 'Admin' },
        { value: 'manager', label: 'Manager' },
        { value: 'standard', label: 'Standard' },
        { value: 'limited', label: 'Limited' },
    ];

    return (
        <Box sx={{ minHeight: '100vh', width: '100%' }}>
            <Box sx={{ maxWidth: 1200, mx: 'auto', px: 4, }}>

            <Button
                    startIcon={<ArrowLeft size={20} />}
                    onClick={() => router.back()}
                    sx={{ mb: 2 }}
                >
                    Back
                </Button>

                <Box sx={{ backgroundColor: 'white', boxShadow: 2, borderRadius: 2, p: 4 }}>
                    <Box sx={{ pb: 2, mb: 2 }}>
                        <Typography variant="h5" fontWeight={600} color="text.primary">
                            Add New Recruiter
                        </Typography>
                        <Typography variant="body1" color="text.secondary">
                            Fill in the details below to add a new recruiter
                        </Typography>
                    </Box>

                    <form onSubmit={handleSubmit}>

                        <Box sx={{ flexGrow: 1 }}>
                            <Grid container spacing={2}>
                                <Grid size={{ xs: 12, md: 12 }}>
                                    <Typography variant="h6" fontWeight={500} color="text.primary" gutterBottom>
                                        <User size={20} style={{ marginRight: 8 }} />
                                        Personal Information
                                    </Typography>
                                </Grid>
                                <Grid size={{ xs: 12, md: 6 }}>
                                    <TextField
                                        label="Full Name"
                                        fullWidth
                                        value={formData.fullName}
                                        onChange={handleChange}
                                        name="fullName"
                                        required
                                        InputProps={{
                                            startAdornment: (
                                                <InputAdornment position="start">
                                                    <User size={20} />
                                                </InputAdornment>
                                            ),
                                        }}
                                    />
                                </Grid>

                                <Grid size={{ xs: 12, md: 6 }}>
                                    <TextField
                                        label="Email"
                                        type="email"
                                        fullWidth
                                        value={formData.email}
                                        onChange={handleChange}
                                        name="email"
                                        required
                                        InputProps={{
                                            startAdornment: (
                                                <InputAdornment position="start">
                                                    <Mail size={20} />
                                                </InputAdornment>
                                            ),
                                        }}
                                    />
                                </Grid>
                                <Grid size={{ xs: 12, md: 6 }}>
                                    <TextField
                                        label="Mobile"
                                        type="tel"
                                        fullWidth
                                        value={formData.mobile}
                                        onChange={handleChange}
                                        name="mobile"
                                        required
                                        InputProps={{
                                            startAdornment: (
                                                <InputAdornment position="start">
                                                    <Phone size={20} />
                                                </InputAdornment>
                                            ),
                                        }}
                                    />
                                </Grid>
                                <Grid size={{ xs: 12, md: 6 }}>
                                    <TextField
                                        label="Employee ID"
                                        fullWidth
                                        value={formData.empId}
                                        onChange={handleChange}
                                        name="empId"
                                        required
                                        InputProps={{
                                            startAdornment: (
                                                <InputAdornment position="start">
                                                    <Briefcase size={20} />
                                                </InputAdornment>
                                            ),
                                        }}
                                    />
                                </Grid>
                                <Grid size={{ xs: 12, md: 12 }}>
                                    <Typography variant="h6" fontWeight={500} color="text.primary" gutterBottom sx={{ mt: 2 }}>
                                        <Briefcase size={20} style={{ marginRight: 8 }} />
                                        Professional Information
                                    </Typography>
                                </Grid>
                                <Grid size={{ xs: 12, md: 6 }}>
                                    <FormControl fullWidth required>
                                        <InputLabel>Role</InputLabel>
                                        <Select
                                            value={formData.role}
                                            onChange={handleChange}
                                            name="role"
                                            label="Role"
                                        >
                                            {roleOptions.map((option) => (
                                                <MenuItem key={option.value} value={option.value}>
                                                    {option.label}
                                                </MenuItem>
                                            ))}
                                        </Select>
                                    </FormControl>
                                </Grid>
                                <Grid size={{ xs: 12, md: 6 }}>
                                    <FormControl fullWidth required>
                                        <InputLabel>Department/Team</InputLabel>
                                        <Select
                                            value={formData.department}
                                            onChange={handleChange}
                                            name="department"
                                            label="Department/Team"
                                        >
                                            {departmentOptions.map((option) => (
                                                <MenuItem key={option.value} value={option.value}>
                                                    {option.label}
                                                </MenuItem>
                                            ))}
                                        </Select>
                                    </FormControl>
                                </Grid>

                                <Grid size={{ xs: 12, md: 6 }}>
                                    <TextField
                                        label="Reporting Manager"
                                        fullWidth
                                        value={formData.reportingManager}
                                        onChange={handleChange}
                                        name="reportingManager"
                                        required
                                        InputProps={{
                                            startAdornment: (
                                                <InputAdornment position="start">
                                                    <User size={20} />
                                                </InputAdornment>
                                            ),
                                        }}
                                    />
                                </Grid>

                                <Grid size={{ xs: 12, md: 6 }}>
                                    <TextField
                                        label="Joining Date"
                                        type="date"
                                        fullWidth
                                        value={formData.joiningDate}
                                        onChange={handleChange}
                                        name="joiningDate"
                                        required
                                        InputProps={{
                                            startAdornment: (
                                                <InputAdornment position="start">
                                                    <Calendar size={20} />
                                                </InputAdornment>
                                            ),
                                        }}
                                        InputLabelProps={{ shrink: true }}
                                    />
                                </Grid>
                                <Grid size={{ xs: 12, md: 6 }}>
                                    <TextField
                                        label="Salary"
                                        type="number"
                                        fullWidth
                                        value={formData.salary}
                                        onChange={handleChange}
                                        name="salary"
                                        required
                                        inputProps={{ min: 0 }}
                                        InputProps={{
                                            startAdornment: (
                                                <InputAdornment position="start">
                                                    <IndianRupee size={20} />
                                                </InputAdornment>
                                            ),
                                        }}
                                    />

                                </Grid>


                                <Grid size={{ xs: 12, md: 12 }}>
                                    <Typography variant="h6" fontWeight={500} color="text.primary" gutterBottom sx={{ mt: 2 }}>
                                        <Key size={20} style={{ marginRight: 8 }} />
                                        Account Information
                                    </Typography>
                                </Grid>
                                <Grid size={{ xs: 12, md: 6 }}>
                                    <TextField
                                        label="Username"
                                        fullWidth
                                        value={formData.username}
                                        onChange={handleChange}
                                        name="username"
                                        required
                                        InputProps={{
                                            startAdornment: (
                                                <InputAdornment position="start">
                                                    <User size={20} />
                                                </InputAdornment>
                                            ),
                                        }}
                                    />
                                </Grid>
                                <Grid size={{ xs: 12, md: 6 }}>
                                    <TextField
                                        label="Password"
                                        type="password"
                                        fullWidth
                                        value={formData.password}
                                        onChange={handleChange}
                                        name="password"
                                        required
                                        InputProps={{
                                            startAdornment: (
                                                <InputAdornment position="start">
                                                    <Key size={20} />
                                                </InputAdornment>
                                            ),
                                        }}
                                    />
                                </Grid>
                                <Grid size={{ xs: 12, md: 6 }}>
                                    <TextField
                                        label="Confirm Password"
                                        type="password"
                                        fullWidth
                                        value={formData.confirmPassword}
                                        onChange={handleChange}
                                        name="confirmPassword"
                                        required
                                        InputProps={{
                                            startAdornment: (
                                                <InputAdornment position="start">
                                                    <Key size={20} />
                                                </InputAdornment>
                                            ),
                                        }}
                                    />
                                </Grid>

                                <Grid size={{ xs: 12, md: 6 }}>
                                    <FormControl fullWidth required>
                                        <InputLabel>Access Level</InputLabel>
                                        <Select
                                            value={formData.accessLevel}
                                            onChange={handleChange}
                                            name="accessLevel"
                                            label="Access Level"
                                        >
                                            {accessLevelOptions.map((option) => (
                                                <MenuItem key={option.value} value={option.value}>
                                                    {option.label}
                                                </MenuItem>
                                            ))}
                                        </Select>
                                    </FormControl>
                                </Grid>

                                <Grid size={{ xs: 12, md: 12 }}>
                                    <Typography variant="h6" fontWeight={500} color="text.primary" gutterBottom sx={{ mt: 2 }}>
                                        <MapPin size={20} style={{ marginRight: 8 }} />
                                        Additional Information
                                    </Typography>
                                </Grid>

                                <Grid size={{ xs: 12, md: 6 }}>
                                    <TextField
                                        label="Working Hours"
                                        fullWidth
                                        value={formData.workingHours}
                                        onChange={handleChange}
                                        name="workingHours"
                                        InputProps={{
                                            startAdornment: (
                                                <InputAdornment position="start">
                                                    <Clock size={20} />
                                                </InputAdornment>
                                            ),
                                        }}
                                    />
                                </Grid>

                                <Grid size={{ xs: 12, md: 6 }}>
                                    <TextField
                                        label="Location"
                                        fullWidth
                                        value={formData.location}
                                        onChange={handleChange}
                                        name="location"
                                        InputProps={{
                                            startAdornment: (
                                                <InputAdornment position="start">
                                                    <MapPin size={20} />
                                                </InputAdornment>
                                            ),
                                        }}
                                    />
                                </Grid>
                                <Grid size={{ xs: 12, md: 12 }}>
                                    <Button variant="contained" type="submit" fullWidth sx={{ mt: 4 }}>
                                        Submit
                                    </Button>
                                </Grid>
                            </Grid>
                        </Box>

                    </form>
                </Box>
            </Box>
        </Box>
    );
}