'use client'
import { useState } from 'react';
import {
    Box,
    Container,
    Paper,
    Typography,
    TextField,
    FormControl,
    InputLabel,
    Select,
    MenuItem,
    Checkbox,
    Link as MuiLink,
    FormControlLabel,
    Button
} from '@mui/material'
import { useRouter } from 'next/navigation';
import baseUrl from '@/utils/config';


export default function SignupPage() {

    const router = useRouter()
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        password: '',
        phone: '',
        department: '',
        // termsAccepted: false,
    });

    const handleChange = (event) => {
        const { name, value, type, checked } = event.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: type === 'checkbox' ? checked : value,
        }));
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
    
        try {
            const response = await fetch(`${baseUrl}/registerSuperAdmin`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });
    
            const data = await response.json(); // ✅ Parse the JSON response
    
            if (response.ok) {
                const token = data.token; // ✅ Access the token from parsed data
                localStorage.setItem('token', token); // ✅ Store token
                alert("Sign up Successful");
    
                setTimeout(() => {
                    router.push('/signup/organization');
                }, 400);
            } else {
                console.error('Signup failed:', data.message || 'Unknown error');
            }
        } catch (error) {
            console.error('An error occurred:', error);
        }
    };
    


    return (
        <Box sx={{ pt: '64px', pb: 4, px: 2 }}>
            <Container maxWidth="sm">
                <Paper elevation={0} sx={{ p: 3 }}>
                    {/* Logo */}
                    <Box sx={{ mb: 2, textAlign: 'left' }}>
                        <img src="/selfeeylogobg2.png" alt="Brand Logo" style={{ maxWidth: 150 }} />
                    </Box>

                    <Typography variant="h5" gutterBottom sx={{ fontWeight: 600 }}>
                        Start your 30‑day free trial
                    </Typography>
                    <Box component="form" onSubmit={handleSubmit}>
                        <Box sx={{ mt: 2 }}>
                            <Typography variant="body2" sx={{ mb: 1 }}>
                                Full Name *
                            </Typography>
                            <TextField
                                fullWidth
                                id="fullName"
                                name="fullName"
                                type="text"
                                size="small"
                                value={formData.fullName}
                                onChange={handleChange}
                                sx={{
                                    '& .MuiOutlinedInput-root': {
                                        borderRadius: 0,
                                        '& fieldset': { borderColor: 'black' },
                                        '&.Mui-focused fieldset': {
                                            borderColor: 'purple',
                                            borderWidth: '1.3px',
                                        },
                                    },
                                }}
                            />
                        </Box>

                        <Box sx={{ mt: 2 }}>
                            <Typography variant="body2" sx={{ mb: 1 }}>
                                Email *
                            </Typography>
                            <TextField
                                fullWidth
                                id="email"
                                name="email"
                                type="email"
                                size="small"
                                value={formData.email}
                                onChange={handleChange}
                                sx={{
                                    '& .MuiOutlinedInput-root': {
                                        borderRadius: 0,
                                        '& fieldset': { borderColor: 'black' },
                                        '&.Mui-focused fieldset': {
                                            borderColor: 'purple',
                                            borderWidth: '1.3px',
                                        },
                                    },
                                }}
                            />
                        </Box>

                        <Box sx={{ mt: 2 }}>
                            <Typography variant="body2" sx={{ mb: 1 }}>
                                Password *
                            </Typography>
                            <TextField
                                fullWidth
                                id="password"
                                name="password"
                                type="password"
                                size="small"
                                value={formData.password}
                                onChange={handleChange}
                                sx={{
                                    '& .MuiOutlinedInput-root': {
                                        borderRadius: 0,
                                        '& fieldset': { borderColor: 'black' },
                                        '&.Mui-focused fieldset': {
                                            borderColor: 'purple',
                                            borderWidth: '1.3px',
                                        },
                                    },
                                }}
                            />
                        </Box>

                        <Box sx={{ mt: 2 }}>
                            <Typography variant="body2" sx={{ mb: 1 }}>
                                Phone Number *
                            </Typography>
                            <TextField
                                fullWidth
                                id="phone"
                                name="phone"
                                type="text"
                                size="small"
                                value={formData.phone}
                                onChange={handleChange}
                                sx={{
                                    '& .MuiOutlinedInput-root': {
                                        borderRadius: 0,
                                        '& fieldset': { borderColor: 'black' },
                                        '&.Mui-focused fieldset': {
                                            borderColor: 'purple',
                                            borderWidth: '1.3px',
                                        },
                                    },
                                }}
                            />
                        </Box>

                        <Box sx={{ mt: 2 }}>
                            <Typography variant="body2" sx={{ mb: 1 }}>
                                Departmnet
                            </Typography>
                            <FormControl
                                fullWidth
                                size="small"
                                sx={{
                                    '& .MuiOutlinedInput-root': {
                                        borderRadius: 0,
                                        '& fieldset': { borderColor: 'black' },
                                        '&.Mui-focused fieldset': {
                                            borderColor: 'purple',
                                            borderWidth: '1.3px',
                                        },
                                    },
                                }}
                            >
                                <InputLabel id="department">Select Department</InputLabel>
                                <Select
                                    labelId="department"
                                    id="department"
                                    name="department"
                                    value={formData.department}
                                    label="Select Department"
                                    onChange={handleChange}
                                    sx={{ height: 40 }}
                                >
                                    <MenuItem value="">
                                        <em>None</em>
                                    </MenuItem>
                                    <MenuItem value="Management">Management</MenuItem>
                                    <MenuItem value="HR">HR</MenuItem>

                                </Select>
                            </FormControl>

                            <FormControlLabel
                                control={
                                    <Checkbox
                                        checked={formData.termsAccepted}
                                        onChange={handleChange}
                                        name="termsAccepted"
                                        sx={{ p: 0.5, ml: 1 }}
                                    />
                                }
                                sx={{ mt: 3 }}
                                label={
                                    <Typography variant="body2">
                                        I agree to the{' '}
                                        <MuiLink href="#" underline="hover">
                                            Terms of Service
                                        </MuiLink>{' '}
                                        and{' '}
                                        <MuiLink href="#" underline="hover">
                                            Privacy Policy
                                        </MuiLink>
                                    </Typography>
                                }
                            />



                            <Button
                                type="submit"
                                fullWidth
                                variant="contained"
                                sx={{ mt: 3, py: 1.5, borderRadius: 0, bgcolor: '#2860f5', fontWeight: 600 }}
                            >
                                FREE SIGN UP
                            </Button>
                        </Box>
                    </Box>
                </Paper>
            </Container>
        </Box>
    )
}
