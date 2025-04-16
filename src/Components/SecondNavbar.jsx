'use client';

import { AppBar, Toolbar, Box } from '@mui/material';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function SecondaryNavbar({ subLinks }) {
  const pathname = usePathname();

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
