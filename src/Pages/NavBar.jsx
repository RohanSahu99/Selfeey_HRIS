"use client"
import React, { useState } from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Menu,
  MenuItem,
  Fade,
  Box,
  IconButton,
  useTheme,
} from '@mui/material';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import MenuIcon from '@mui/icons-material/Menu';
import Link from 'next/link';

const Navbar = () => {
  const theme = useTheme();
  const [anchorEl, setAnchorEl] = useState(null);
  const [nestedAnchorEl, setNestedAnchorEl] = useState(null);
  const [mobileOpen, setMobileOpen] = useState(false);

  // Handle opening of main menu
  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  // Handle opening of nested menu
  const handleNestedMenuOpen = (event) => {
    setNestedAnchorEl(event.currentTarget);
  };

  // Handle closing of menus
  const handleMenuClose = () => {
    setAnchorEl(null);
    setNestedAnchorEl(null);
  };

  // Toggle mobile menu
  const handleMobileMenuToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  return (
    <AppBar
      position="static"
      sx={{
        background: 'linear-gradient(45deg, #2196F3 30%, #21CBF3 90%)',
        boxShadow: '0 3px 5px 2px rgba(33, 203, 243, .3)',
      }}
    >
      <Toolbar sx={{ justifyContent: 'space-between' }}>
        {/* Logo */}
        <Typography
          variant="h6"
          component={Link}
          href="/"
          sx={{
            textDecoration: 'none',
            color: 'white',
            fontWeight: 'bold',
            fontSize: '1.5rem',
          }}
        >
          MyApp
        </Typography>

        {/* Desktop Menu */}
        <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 2 }}>
          <Button color="inherit" component={Link} href="/">
            Home
          </Button>

          {/* Services Menu with Nested Dropdown */}
          <Button
            color="inherit"
            onClick={handleMenuOpen}
            endIcon={<ArrowDropDownIcon />}
            sx={{
              '&:hover': {
                backgroundColor: 'rgba(255, 255, 255, 0.1)',
                transition: 'background-color 0.3s',
              },
            }}
          >
            Services
          </Button>
          <Menu
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={handleMenuClose}
            TransitionComponent={Fade}
            MenuListProps={{
              onMouseLeave: handleMenuClose,
            }}
            sx={{
              '& .MuiPaper-root': {
                backgroundColor: '#fff',
                borderRadius: '8px',
                boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
                minWidth: '200px',
              },
            }}
          >
            <MenuItem
              onClick={handleNestedMenuOpen}
              sx={{
                '&:hover': {
                  backgroundColor: theme.palette.primary.light,
                  color: 'white',
                },
              }}
            >
              Web Development
            </MenuItem>
            <Menu
              anchorEl={nestedAnchorEl}
              open={Boolean(nestedAnchorEl)}
              onClose={handleMenuClose}
              anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
              transformOrigin={{ vertical: 'top', horizontal: 'left' }}
              sx={{
                '& .MuiPaper-root': {
                  backgroundColor: '#fff',
                  borderRadius: '8px',
                  boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
                  minWidth: '200px',
                },
              }}
            >
              <MenuItem onClick={handleMenuClose}>Frontend</MenuItem>
              <MenuItem onClick={handleMenuClose}>Backend</MenuItem>
              <MenuItem onClick={handleMenuClose}>Full Stack</MenuItem>
            </Menu>
            <MenuItem
              onClick={handleMenuClose}
              sx={{
                '&:hover': {
                  backgroundColor: theme.palette.primary.light,
                  color: 'white',
                },
              }}
            >
              Mobile Development
            </MenuItem>
            <MenuItem
              onClick={handleMenuClose}
              sx={{
                '&:hover': {
                  backgroundColor: theme.palette.primary.light,
                  color: 'white',
                },
              }}
            >
              Cloud Services
            </MenuItem>
          </Menu>

          <Button color="inherit" component={Link} href="/about">
            About
          </Button>
          <Button color="inherit" component={Link} href="/contact">
            Contact
          </Button>
        </Box>

        {/* Mobile Menu Icon */}
        <IconButton
          color="inherit"
          edge="end"
          onClick={handleMobileMenuToggle}
          sx={{ display: { xs: 'block', md: 'none' } }}
        >
          <MenuIcon />
        </IconButton>
      </Toolbar>

      {/* Mobile Menu (Optional) */}
      {mobileOpen && (
        <Box
          sx={{
            display: { xs: 'block', md: 'none' },
            backgroundColor: '#fff',
            position: 'absolute',
            top: '64px',
            width: '100%',
            boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
          }}
        >
          <MenuItem component={Link} href="/" onClick={handleMobileMenuToggle}>
            Home
          </MenuItem>
          <MenuItem component={Link} href="/services" onClick={handleMobileMenuToggle}>
            Services
          </MenuItem>
          <MenuItem component={Link} href="/about" onClick={handleMobileMenuToggle}>
            About
          </MenuItem>
          <MenuItem component={Link} href="/contact" onClick={handleMobileMenuToggle}>
            Contact
          </MenuItem>
        </Box>
      )}
    </AppBar>
  );
};

export default Navbar;