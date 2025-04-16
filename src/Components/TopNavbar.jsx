'use client';

import { Box, AppBar, Toolbar, IconButton } from '@mui/material';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function TopNavbar({ topLinks }) {
  const pathname = usePathname();

  return (
    <AppBar
    position="fixed"
    sx={{
      top: 0,
      left: '80px', // accounting for Sidebar width
      width: 'calc(100% - 80px)',
      backgroundColor: '#183a97',
      height: '50px',
      zIndex: 1201, // above sidebar
      display: 'flex',
      justifyContent: 'center',
    }}
    >
      <Toolbar>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
          {topLinks.map((link) => {
            const isActive = pathname === link.href || (!topLinks.some(l => l.href === pathname) && link === topLinks[0]);
            return (
              <Link href={link.href} passHref key={link.href}>
                <Box
                  sx={{
                    fontWeight: 500,
                    fontSize: '14px',
                    padding: '10px',
                    color: 'white',
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

        <Box sx={{ marginLeft: 'auto', display: 'flex', gap: 1.5, mr: '50px' }}>
          <Link href="/notifications" passHref>
            <IconButton sx={{ color: '#fff' }}>
              <NotificationsNoneOutlinedIcon />
            </IconButton>
          </Link>
          <Link href="/settings" passHref>
            <IconButton sx={{ color: '#fff' }}>
              <SettingsOutlinedIcon />
            </IconButton>
          </Link>
          <Link href="/profile" passHref>
            <IconButton sx={{ color: '#fff' }}>
              <AccountCircleIcon />
            </IconButton>
          </Link>
        </Box>
      </Toolbar>
    </AppBar>
  );
}
