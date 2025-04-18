'use client'

import React, { useState } from 'react'
import {
  Box,
  Container,
  Paper,
  Typography,
  TextField,
  Button,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from '@mui/material'
import { useRouter } from 'next/navigation';
import baseUrl from '@/utils/config';


export default function SignupPage() {
    const [errors, setErrors] = useState({});
    const router = useRouter()
  const [formData, setFormData] = useState({
    organizationName: '',
    organizationEmail: '',
    organizationPhone: '',
    website: '',
    organizationAddress: '',
    registrationType: '',
    industry: '',
    gst: '',
    organizationSize: '',
  })

  const handleChange = (event) => {
    const { name, value } = event.target
  
    let error = ''
  
    if (name === 'organizationEmail') {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
      if (!emailRegex.test(value)) {
        error = 'Invalid email address'
      }
    }
  
    if (name === 'organizationPhone') {
      const phoneRegex = /^[6-9]\d{9}$/
      if (!phoneRegex.test(value)) {
        error = 'Invalid Indian phone number'
      }
    }
  
    if (name === 'gst') {
      const gstRegex = /^[0-9]{2}[A-Z]{5}[0-9]{4}[A-Z]{1}[1-9A-Z]{1}Z[0-9A-Z]{1}$/
      if (!gstRegex.test(value)) {
        error = 'Invalid GST number'
      }
    }
  
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  
    setErrors((prev) => ({
      ...prev,
      [name]: error,
    }))
  }
  
  const handleSubmit = async (event) => {
    event.preventDefault()

    try {
       const token = localStorage.getItem('token')
      const response = await fetch(`${baseUrl}regsiter_org`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        alert('Organization registered successfully!')
            router.push('/dashboard/myspace/overview')
      } else {
        alert('Failed to register organization.')
      }
    } catch (error) {
      console.error('Error:', error)
      alert('An error occurred while submitting the form.')
    }
  }

  return (
    <Box sx={{ pt: '64px', pb: 4, px: 2 }}>
      <Container maxWidth="sm">
        <Paper elevation={0} sx={{ p: 3 }}>
          <Box sx={{ mb: 2, textAlign: 'left' }}>
            <img
              src="/selfeeylogobg2.png"
              alt="Brand Logo"
              style={{ maxWidth: 150, height: 'auto' }}
            />
          </Box>

          <Typography variant="h5" gutterBottom sx={{ fontWeight: 600 }}>
            Organization Details
          </Typography>

          <Box component="form" onSubmit={handleSubmit}>
            {/* Organization Name */}
            <CustomInput
              label="Organization Name *"
              name="organizationName"
              value={formData.organizationName}
              onChange={handleChange}
            />

            {/* Email */}
            <CustomInput
              label="Email *"
              name="organizationEmail"
              type="email"
              value={formData.organizationEmail}
              onChange={handleChange}
              error={errors.organizationEmail}
            />

            {/* Phone */}
            <CustomInput
              label="Phone Number *"
              name="organizationPhone"
              value={formData.organizationPhone}
              onChange={handleChange}
              error={errors.organizationPhone}
            />

            {/* Website */}
            <CustomInput
              label="Website URL *"
              name="website"
              value={formData.website}
              onChange={handleChange}
            />

            {/* Address */}
            <CustomInput
              label="Address *"
              name="organizationAddress"
              value={formData.organizationAddress}
              onChange={handleChange}
            />

            {/* Industry */}
            <CustomInput
              label="Industry *"
              name="industry"
              value={formData.industry}
              onChange={handleChange}
            />

            {/* GST */}
            <CustomInput
              label="GST Number *"
              name="gst"
              value={formData.gst}
              onChange={handleChange}
              error={errors.gst}
            />

            {/* Organization Size */}
            <Box sx={{ mt: 2 }}>
              <Typography variant="body2" sx={{ mb: 1 }}>
                Organization Size *
              </Typography>
              <FormControl fullWidth size="small" sx={inputStyles}>
                <InputLabel id="org-size-label">Select Organization Size</InputLabel>
                <Select
                  labelId="org-size-label"
                  name="organizationSize"
                  value={formData.organizationSize}
                  label="Select Organization Size"
                  onChange={handleChange}
                >
                  <MenuItem value=""><em>None</em></MenuItem>
                  <MenuItem value="1-5">1 – 5</MenuItem>
                  <MenuItem value="6-15">6 – 15</MenuItem>
                  <MenuItem value="16-30">16 – 30+</MenuItem>
                </Select>
              </FormControl>
            </Box>

            {/* Registration Type */}
            <Box sx={{ mt: 2 }}>
              <Typography variant="body2" sx={{ mb: 1 }}>
                Registration Type *
              </Typography>
              <FormControl fullWidth size="small" sx={inputStyles}>
                <InputLabel id="reg-type-label">Select Registration Type</InputLabel>
                <Select
                  labelId="reg-type-label"
                  name="registrationType"
                  value={formData.registrationType}
                  label="Select Registration Type"
                  onChange={handleChange}
                >
                  <MenuItem value=""><em>None</em></MenuItem>
                  <MenuItem value="private">Private Limited</MenuItem>
                  <MenuItem value="public">Public Limited</MenuItem>
                  <MenuItem value="ngo">NGO</MenuItem>
                  <MenuItem value="partnership">Partnership</MenuItem>
                  <MenuItem value="proprietorship">Proprietorship</MenuItem>
                </Select>
              </FormControl>
            </Box>

            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{
                mt: 3,
                py: 1.5,
                borderRadius: 0,
                bgcolor: '#2860f5',
                fontWeight: 600,
              }}
            >
              SUBMIT
            </Button>
          </Box>
        </Paper>
      </Container>
    </Box>
  )
}

// Custom input component for reuse
function CustomInput({ label, name, type = 'text', value, onChange, error }) {
    return (
      <Box sx={{ mt: 2 }}>
        <Typography variant="body2" sx={{ mb: 1 }}>{label}</Typography>
        <TextField
          fullWidth
          name={name}
          type={type}
          size="small"
          value={value}
          onChange={onChange}
          error={Boolean(error)}
          helperText={error}
          sx={inputStyles}
        />
      </Box>
    )
  }
  

// Common styles for all inputs
const inputStyles = {
  '& .MuiOutlinedInput-root': {
    borderRadius: 0,
    '& fieldset': { borderColor: 'black' },
    '&.Mui-focused fieldset': {
      borderColor: 'purple',
      borderWidth: '1.3px',
    },
  },
}
