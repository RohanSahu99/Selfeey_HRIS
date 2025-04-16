'use client';

import { usePathname } from 'next/navigation';
import Sidebar from '@/Components/Sidebar';
import { Box, CssBaseline, ThemeProvider } from '@mui/material';
import TopNavbar from '@/Components/TopNavbar';
import SecondaryNavbar from '@/Components/SecondNavbar';
import theme from '@/utils/theme';
import { useMemo } from 'react';


// Navigation configuration - moved outside component and using Map for faster lookups
const NAV_CONFIG = new Map([
  ['/dashboard/myspace', { 
    topLinks: [
      { href: '/myspace', label: 'MySpace' },
      { href: '/organization', label: 'Organization' },
    ],
    subLinks: [
      { href: '/dashboard/myspace/overview', label: 'Overview' },
      { href: '/dashboard/myspace/dashboard', label: 'Dashboard' },
      { href: '/dashboard/myspace/calendar', label: 'Calendar' },
    ],
  }],
  ['/dashboard/onboarding', {
    topLinks: [
      { href: '/dashboard/onboarding', label: 'Onboarding' },
    ],
    subLinks: [],
  }],
  ['/dashboard/leave', {
    topLinks: [
      { href: '/dashboard/leave/myData/leaveSummary', label: 'My Data' },
      { href: '/dashboard/leave/holidays', label: 'Holidays' },
    ],
    subLinks: [
      { href: '/dashboard/leave/myData/leaveSummary', label: 'Leave Summary' },
    ],
  }],
  ['/dashboard/admin', {
    topLinks: [
      { href: '/dashboard/admin/employees', label: 'My Data' },
    ],
    subLinks: [
      { href: '/dashboard/admin/employees', label: 'Employees' },
      { href: '/dashboard/admin/leaveRequest', label: 'Leave Request' },
      { href: '/dashboard/admin/attendance', label: 'Attendance' },
      { href: '/dashboard/admin/recruitment', label: 'Recruitment' },
      { href: '/dashboard/admin/events', label: 'Holidays & Events' },
    ],
  }],
]);

// Predefined default value to avoid object creation
const DEFAULT_NAV = { topLinks: [], subLinks: [] };

// Optimized path matcher
function getNavLinks(pathname) {
  for (const [key, value] of NAV_CONFIG) {
    if (pathname.startsWith(key)) {
      return value;
    }
  }
  return DEFAULT_NAV;
}


export default function DashboardLayout({ children }) {
  const pathname = usePathname();
  // Memoize the navigation links to prevent unnecessary recalculations
  const { topLinks, subLinks } = useMemo(() => getNavLinks(pathname), [pathname]);

  return (
    <Box sx={{ display: 'flex' }}>
      <Sidebar />

      <Box sx={{ flexGrow: 1 }}>
        <TopNavbar topLinks={topLinks} />

        {subLinks.length > 0 && (
          <SecondaryNavbar subLinks={subLinks} />
        )}

        <Box
          component="main"
          sx={{
            p: 3,
            ml: '80px',
            mt: subLinks.length > 0 ? '85px' : '50px',
            backgroundColor: '#ebf5f4',
            minHeight: '100vh',
          }}
        >
          <ThemeProvider theme={theme}>
            <CssBaseline/>
          {children}
          </ThemeProvider>
        </Box>
      </Box>
    </Box>
  );
}
