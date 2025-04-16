'use client';

import { usePathname } from 'next/navigation';
import Sidebar from '@/Components/Sidebar';
import { Box, CssBaseline, ThemeProvider } from '@mui/material';
import TopNavbar from '@/Components/TopNavbar';
import SecondaryNavbar from '@/Components/SecondNavbar';
import theme from '@/utils/theme';
import { useMemo } from 'react';

export default function DashboardLayout({ children }) {
  const pathname = usePathname();

  return (
    <Box sx={{ display: 'flex' }}>
      <Sidebar />

      <Box sx={{ flexGrow: 1 }}>
        <TopNavbar />


        <SecondaryNavbar />


        <Box
          component="main"
          sx={{
            p: 3,
            ml: '80px',
            mt:  '50px',
            backgroundColor: '#ebf5f4',
            minHeight: '100vh',
          }}
        >
          <ThemeProvider theme={theme}>
            <CssBaseline />
            {children}
          </ThemeProvider>
        </Box>
      </Box>
    </Box>
  );
}
