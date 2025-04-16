'use client';

import { Box, AppBar, Toolbar, IconButton } from '@mui/material';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Bell, UserCircle, Gear } from 'phosphor-react';

export default function TopNavbar() {
  const pathname = usePathname();

  // Determine which links to show based on the current path
  const getNavLinks = () => {
    if (pathname.startsWith('/dashboard/myspace') || pathname.startsWith('/dashboard/employees')) {
      return [
        { href: '/dashboard/myspace/overview', label: 'MySpace' },
        { href: '/dashboard/employees/employee', label: 'Employees' }
      ];
    }
    if (pathname.startsWith('/dashboard/leave')) {
      return [
        { href: '/dashboard/leave/myData/leaveSummary', label: 'My Data' },
        { href: '/dashboard/leave/holidays', label: 'Holidays' }
      ];
    }
    if (pathname.startsWith('/dashboard/admin')) {
      return [
        { href: '/dashboard/admin/employees', label: 'Users' },
        { href: '/dashboard/admin/events', label: 'Events & Holidays' },
        { href: '/dashboard/admin/leaveRequest', label: 'Leave Requests' },
        { href: '/dashboard/admin/recruitment', label: 'Recruitments' },
        { href: '/dashboard/admin/analytics', label: 'Analytics' }
      ];
    }
    if (pathname.startsWith('/dashboard/onboarding')) {
      return [
        { href: '/dashboard/onboarding', label: 'Onboarding' }
      ];
    }
  };

  const navLinks = getNavLinks();

  return (
    <AppBar
      position="fixed"
      sx={{
        top: 0,
        left: '80px', // accounting for Sidebar width
        width: 'calc(100% - 80px)',
        backgroundColor: 'white',
        height: '50px',
        zIndex: 1201, // above sidebar
        display: 'flex',
        justifyContent: 'center',
        boxShadow: '0 0.5px 0 rgba(0, 0, 0, 0.2)', 
      }}
    >
      <Toolbar>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
          {navLinks?.map((link) => {
            const isActive = pathname === link.href || pathname.startsWith(`${link.href}/`);

            return (
              <Link href={link.href} passHref key={link.href}>
                <Box
                  sx={{
                    fontWeight: 500,
                    fontSize: '14px',
                    padding: '10px',
                    color: 'black',
                    display: 'flex',
                    alignItems: 'center',
                    borderBottom: isActive
                      ? '2px solid #16e4ff'
                      : '2px solid transparent',
                    '&:hover': {
                      borderBottom: '2px solid #16e4ff',
                    },
                    transition: 'border-bottom 0.4s ease-in-out',
                  }}
                >
                  {link.label}
                </Box>
              </Link>
            );
          })}
        </Box>

        <Box sx={{ marginLeft: 'auto', display: 'flex', gap: 1.5, mr: '50px' }}>
          <Link href="/notifications" passHref>
            <IconButton sx={{ color: 'black' }}>
              <Bell />
            </IconButton>
          </Link>
          <Link href="/settings" passHref>
            <IconButton sx={{ color: 'black' }}>
              <Gear />
            </IconButton>
          </Link>
          <Link href="/profile" passHref>
            <IconButton sx={{ color: 'black' }}>
              <UserCircle />
            </IconButton>
          </Link>
        </Box>
      </Toolbar>
    </AppBar>
  );
}