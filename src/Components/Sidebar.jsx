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
import SettingsIcon from '@mui/icons-material/Settings';
import HomeIcon from '@mui/icons-material/Home';
import AssignmentIndIcon from '@mui/icons-material/AssignmentInd';
import BeachAccessIcon from '@mui/icons-material/BeachAccess';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';

const drawerWidth = 0;

export default function Sidebar() {
  const pathname = usePathname();

  const navItems = [
    { icon: <HomeIcon sx={{ fontSize: 27,color:"white" }} />, href: '/dashboard/myspace/overview', label: 'Home' },
    { icon: <AssignmentIndIcon sx={{ fontSize: 27,color:"white"}} />, href: '/dashboard/onboarding', label: 'Onboarding' },
    { icon: <BeachAccessIcon sx={{ fontSize: 27,color:"white" }} />, href: '/dashboard/leave/myData/leaveSummary', label: 'Leave Tracker' },
    { icon: <CalendarTodayIcon sx={{ fontSize: 27,color:"white"}} />, href: '/dashboard/attendance', label: 'Attendance' },
    { icon: <AdminPanelSettingsIcon sx={{ fontSize: 27,color:"white" }} />, href: '/dashboard/admin/employees', label: 'Admin' },
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
          backgroundColor: '#2860f5',
          color: '#fff',
          paddingTop: 2,
        },
      }}
    >
      <Typography variant="h6" sx={{ p: 2, color: '#fff' }}>
        My
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
                      backgroundColor: isActive ? '#183a97' : '#d22eff',
                      marginBottom: '10px',
                      padding: '5px',
                      '&:hover': {
                        backgroundColor: isActive
                          ? '#183a97'
                          : 'rgba(255, 255, 255, 0.2)',
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
