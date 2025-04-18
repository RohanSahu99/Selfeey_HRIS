'use client'

import { Box, AppBar, Toolbar, Typography, CssBaseline, Link as MuiLink } from '@mui/material'
import Link from 'next/link'

export default function SignupLayout({ children }) {
  
  return (
    <Box sx={{ display: 'flex', height: '100vh', overflow: 'hidden' }}>
      {/* Left Testimonial + Background */}
      <Box
        sx={{
          position: 'fixed',
          left: 0,
          top: 0,
          width: '40%',
          height: '100%',
          borderRight: '1.3px solid #ccc',
          '&::before': {
            content: '""',
            position: 'absolute',
            inset: 0,
            backgroundImage: 'url("/signupbg.jpg")',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            zIndex: 1
          },
          '&::after': {
            content: '""',
            position: 'absolute',
            inset: 0,
            backgroundColor: 'rgba(0,0,0,0.4)',
            zIndex: 2
          },
          color: 'white',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          textAlign: 'center',
          p: 4,
          zIndex: 3
        }}
      >
        <Box sx={{ maxWidth: '80%', zIndex: 3 }}>
          <Typography variant="h6" sx={{ fontWeight: 400, mb: 1, fontSize: '16px' }}>
            “Selfeey ERP has completely transformed the way we manage our operations.”
          </Typography>
          <Typography variant="body2" sx={{ fontWeight: 600, textTransform: 'uppercase', fontSize: '11px', color: '#2860f5' }}>
            Aarav Mehta, Operations Manager, Oryxis Group
          </Typography>
        </Box>
      </Box>

      {/* Right Scrollable Content */}
      <Box
        sx={{
          width: '60%',
          ml: '40%',
          height: '100vh',        // fix to viewport height :contentReference[oaicite:4]{index=4}
          overflowY: 'auto',      // scroll when content exceeds :contentReference[oaicite:5]{index=5}
          bgcolor: 'background.default'
        }}
      >
        <CssBaseline />
        {/* Navbar */}
        <AppBar
          position="fixed"
          color="transparent"
          elevation={0}
          sx={{
            width: '60%',
            right: 0,
            bgcolor: 'background.default',
            borderBottom: 1,
            borderColor: 'divider',
            zIndex: (theme) => theme.zIndex.drawer + 1
          }}
        >
          <Toolbar>
            <Typography variant="h6" sx={{ flexGrow: 1 }} />
            <Box sx={{ display: 'flex', gap: 2, fontSize: '12px', fontWeight: 500, color: '#2860f5' }}>
              <span style={{color:'black'}}>Have an HRIS account ?</span>
              <MuiLink component={Link} href="/login" color="primary" underline="none">
                Sign In
              </MuiLink>
            </Box>
          </Toolbar>
        </AppBar>

        {/* This is where the signup form (page.js) will render */}
        {children}
      </Box>
    </Box>
  )
}
