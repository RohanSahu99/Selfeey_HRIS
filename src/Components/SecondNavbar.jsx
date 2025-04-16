'use client';

import { AppBar, Toolbar, Box } from '@mui/material';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function SecondaryNavbar() {
  const pathname = usePathname();
  
  // Define sublinks based on the current path
  const getSubLinks = () => {
    if (pathname.startsWith('/dashboard/myspace')) {
      return [
        { href: '/dashboard/myspace/overview', label: 'Overview' },
        { href: '/dashboard/myspace/dashboard', label: 'Dashboard' },
        { href: '/dashboard/myspace/calendar', label: 'Calendar' }
      ];
    }
    if (pathname.startsWith('/dashboard/employees')) {
      return [
        { href: '/dashboard/employees/employee', label: 'Employee' },
        { href: '/dashboard/employees/leaverequest', label: 'Leave Requests' },
        { href: '/dashboard/employees/attendance', label: 'Attendance' }
      ];
    }
    if (pathname.startsWith('/settings')) {
      return [
        { href: '/settings/profile', label: 'Profile' },
        { href: '/settings/account', label: 'Account' },
        { href: '/settings/notifications', label: 'Notifications' }
      ];
    }
    // Default empty array if no matching path
    return [];
  };

  const subLinks = getSubLinks();

  if (subLinks.length === 0) {
    return null; // Don't render the navbar if no sublinks for current path
  }

  return (
    <AppBar
      position="fixed"
      sx={{
        top: '50px', // just below TopNavbar
        left: '80px',
        width: 'calc(100% - 80px)',
        backgroundColor: 'white',
        height: '35px',
        zIndex: 1200, // just below top navbar
        display: 'flex',
        justifyContent: 'center',
        boxShadow: '0px 0.5px 0px 0px #16e4ff',
      }}
    >
      <Toolbar>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
          {subLinks.map((link) => {
            const isActive = pathname === link.href || (!subLinks.some(l => l.href === pathname) && link === subLinks[0]);
            return (
              <Link href={link.href} passHref key={link.href}>
                <Box
                  sx={{
                    fontWeight: 500,
                    fontSize: '13px',
                    padding: '5px',
                    color: 'black',
                    display: 'flex',
                    alignItems: 'center',
                    borderBottom: isActive ? '2px solid #16e4ff' : '2px solid transparent',
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
      </Toolbar>
    </AppBar>
  );
}