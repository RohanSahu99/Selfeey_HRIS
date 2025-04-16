'use client';
import { usePathname } from 'next/navigation';
import {
  Drawer,
  List,
  ListItem,
  ListItemButton,
  Typography,
  Tooltip,
} from '@mui/material';
import Link from 'next/link';

// Lucide Icons
import { House, Users, Airplane, CalendarCheck, UserGear  } from 'phosphor-react';

const drawerWidth = 0;

export default function Sidebar() {
  const pathname = usePathname();

  const navItems = [
    { icon: <House size={24} color="black" />, href: '/dashboard/myspace/overview', label: 'Home' },
    { icon: <Users size={24}  color="black" />, href: '/dashboard/onboarding', label: 'Onboarding' },
    { icon: <Airplane size={24}  color="black" />, href: '/dashboard/leave/myData/leaveSummary', label: 'Leave Tracker' },
    { icon: <CalendarCheck size={24}  color="black" />, href: '/dashboard/attendance', label: 'Attendance' },
    { icon: <UserGear  size={24}  color="black" />, href: '/dashboard/admin/employees', label: 'Admin' },
  ];

  return (
    <Drawer
      variant="permanent"
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        '& .MuiDrawer-paper': {
          width: '80px',
          boxSizing: 'border-box',
          display: 'flex',
          alignItems: 'center',
          paddingTop: 2,
          background: 'white',
          backdropFilter: 'blur(10px)',
          WebkitBackdropFilter: 'blur(10px)',
          borderRight: '0.5px solid rgba(0, 0, 0, 0.2)',
          color: '#fff',
        },
      }}
    >
      <Typography variant="h6" sx={{ p: 2, color: 'black' }}>
        HRIS
      </Typography>
      <List>
        {navItems.map((item, index) => {
          const isActive = pathname === item.href;

          return (
            <Link
              key={index}
              href={item.href}
              style={{ textDecoration: 'none', color: 'inherit' }}
            >
              <ListItem disablePadding sx={{ justifyContent: 'center' }}>
                <Tooltip title={item.label} placement="right" arrow>
                  <ListItemButton
                    sx={{
                      justifyContent: 'center',
                      borderRadius: 2,
                      transition: 'all 0.3s ease',
                      backgroundColor: isActive ? '#FAF1E6' : 'transparent',
                      marginBottom: '10px',
                      padding: '5px',
                      '&:hover': {
                        backgroundColor: '#FAF1E6',
                        transform: 'scale(1.1)',
                      },
                    }}
                  >
                    {item.icon}
                  </ListItemButton>
                </Tooltip>
              </ListItem>
            </Link>
          );
        })}
      </List>
    </Drawer>
  );
}
