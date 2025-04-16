'use client';

import React from 'react';
import { Box, Typography, Divider, Button } from '@mui/material';
import { ArrowLeft, PencilSimple } from 'phosphor-react';
import { useRouter } from 'next/navigation';

export default function EmployeeView({ employee }) {
  const router = useRouter();

  const {
    firstName,
    lastName,
    email,
    phone,
    employeeId,
    department,
    position,
    hireDate,
    address,
    gender,
    salary,
  } = employee || {};

  const fields = [
    { label: 'First Name', value: firstName },
    { label: 'Last Name', value: lastName },
    { label: 'Email', value: email },
    { label: 'Phone', value: phone },
    { label: 'Employee ID', value: employeeId },
    { label: 'Position', value: position },
    { label: 'Hire Date', value: hireDate },
    { label: 'Address', value: address },
    { label: 'Gender', value: gender },
    { label: 'Department', value: department },
    { label: 'Salary', value: salary },
  ];

  return (
    <Box sx={{ p: 3 }}>
      <Button
        onClick={() => router.back()}
        startIcon={<ArrowLeft size={18} />}
        sx={{ mb: 2, textTransform: 'none' }}
      >
        Back
      </Button>

      <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
        <Typography variant="h5" fontWeight="bold" gutterBottom>
          Employee Details
        </Typography>

        <Button
          variant="outlined"
          startIcon={<PencilSimple size={18} />}
          onClick={() => router.push(`/dashboard/admin/employees/edit/${employeeId}`)}
          sx={{ height: 36 }}
        >
          Edit
        </Button>
      </Box>

      <Divider sx={{ my: 2 }} />

      <Box
        sx={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'space-around',
          gap: '30px',
        }}
      >
        {fields.map(({ label, value }) => (
          <Box sx={{ width: '30%' }} key={label}>
            <Typography fontWeight={500} color="text.secondary" mb={0.5}>
              {label}
            </Typography>
            <Typography variant="body1">{value || '-'}</Typography>
          </Box>
        ))}
      </Box>
    </Box>
  );
}
