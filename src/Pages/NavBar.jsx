"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import {
  Menu as MenuIcon,
  Close as CloseIcon,
  ExpandMore as ExpandMoreIcon,
} from "@mui/icons-material";
import {
  AppBar,
  Toolbar,
  Box,
  IconButton,
  Button,
  Menu,
  MenuItem,
  Typography,
  Divider,
  List,
  ListItem,
  ListItemText,
  Collapse,
  Paper,
  Grid,
  Stack,
  styled,
  ListItemButton
} from "@mui/material";
import logo from "../../public/selfeeylogobg2.png";
import Image from "next/image";

const productCategories = [
  {
    name: "Human Resources",
    items: [
      { name: "HRIS", href: "/products/hris" },
      { name: "Recruitment", href: "/products/recruitment" },
      {
        name: "Recruiter Performance Management System (RPMS)",
        href: "/products/rpms",
      },
    ],
  },
];

const GradientButton = styled(Button)({
  background: "linear-gradient(45deg, #d22eff 0%, #2860f5 100%)",
  color: "white",
  "&:hover": {
    background: "linear-gradient(45deg, #b71de0 0%, #1e4db7 100%)",
  },
});

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [productsMenuAnchor, setProductsMenuAnchor] = useState(null);
  const [mobileProductsOpen, setMobileProductsOpen] = useState(false);

  const isProductsMenuOpen = Boolean(productsMenuAnchor);

  const handleProductsMenuOpen = (event) => {
    setProductsMenuAnchor(event.currentTarget);
  };

  const handleProductsMenuClose = () => {
    setProductsMenuAnchor(null);
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const toggleMobileProducts = () => {
    setMobileProductsOpen(!mobileProductsOpen);
  };

  const closeAllMenus = () => {
    setMobileMenuOpen(false);
    setProductsMenuAnchor(null);
    setMobileProductsOpen(false);
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position="sticky"
        sx={{
          backdropFilter: "blur(6px)",
         backgroundColor:'#ebf5f4',
          boxShadow: "none",
          borderBottom: '1px solid rgba(0, 0, 0, 0.12)'
        }}
      >
        <Toolbar sx={{ maxWidth: "1280px", margin: "0 auto", width: "100%" }}>
          {/* Logo */}
          <Box sx={{ flexGrow: { xs: 1, lg: 0 }, mr: 2 }}>
            <Image
              src={logo}
              alt="Selfeey Logo"
              width={150}
              height={70}
              style={{ objectFit: "contain" }}
            />
          </Box>

          {/* Desktop Navigation */}
          <Box
            sx={{
              display: { xs: "none", lg: "flex" },
              flexGrow: 1,
              justifyContent: "center",
            }}
          >
            <Stack direction="row" spacing={2}>
              <Button
                aria-controls="products-menu"
                aria-haspopup="true"
                onClick={handleProductsMenuOpen}
                endIcon={
                  <ExpandMoreIcon
                    sx={{
                      transform: isProductsMenuOpen ? "rotate(180deg)" : "none",
                      transition: "transform 0.2s",
                    }}
                  />
                }
                sx={{
                  color: "text.primary",
                  "&:hover": { color: "#2860f5" },
                }}
              >
                Products
              </Button>

              <Button
                component={Link}
                href="/resources"
                sx={{
                  color: "text.primary",
                  "&:hover": { color: "#2860f5" },
                }}
              >
                Resources
              </Button>

              <Button
                component={Link}
                href="/pricing"
                sx={{
                  color: "text.primary",
                  "&:hover": { color: "#2860f5" },
                }}
              >
                Pricing
              </Button>

              <Button
                component={Link}
                href="/contact"
                sx={{
                  color: "text.primary",
                  "&:hover": { color: "#2860f5" },
                }}
              >
                Contact
              </Button>
            </Stack>
          </Box>

          {/* Desktop Buttons */}
          <Box sx={{ display: { xs: "none", lg: "flex" }, gap: 2 }}>

            <Button
              component={Link}
              href='/signup'
              sx={{
                color: "blue",
                "&:hover": { color: "#2860f5" },
              }}
            >
              Sign Up
            </Button>

            {/* <GradientButton
              component={Link}
              href="/auth/signup"
              variant="contained"
            >
              Get started
            </GradientButton> */}
          </Box>

          {/* Mobile Menu Button */}
          <Box sx={{ display: { xs: "flex", lg: "none" } }}>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              onClick={toggleMobileMenu}
            >
              {mobileMenuOpen ? <CloseIcon /> : <MenuIcon />}
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>

      {/* Desktop Products Mega Menu */}
      <Menu
        id="products-menu"
        anchorEl={productsMenuAnchor}
        open={isProductsMenuOpen}
        onClose={handleProductsMenuClose}
        MenuListProps={{
          "aria-labelledby": "products-button",
        }}
        PaperProps={{
          elevation: 3,
          sx: {
            width: "100%",
            maxWidth: "1280px",
            left: "50% !important",
            transform: "translateX(-50%) !important",
            top: "64px !important",
            padding: 2,
          },
        }}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "center",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "center",
        }}
      >
        <Grid container spacing={4}>
          {productCategories.map((category) => (
            <Grid item xs={6} key={category.name}>
              <Typography
                variant="h6"
                component="h3"
                sx={{ pb: 1, borderBottom: "1px solid", borderColor: "divider" }}
              >
                {category.name}
              </Typography>
              <List>
                {category.items.map((item) => (
                  <ListItem
                    key={item.name}
                    component={Link}
                    href={item.href}
                    onClick={closeAllMenus}
                    sx={{
                      color: "text.secondary",
                      "&:hover": { color: "#2860f5", pl: 1 },
                      transition: "all 0.2s",
                    }}
                  >
                    <ListItemText primary={item.name} />
                  </ListItem>
                ))}
              </List>
            </Grid>
          ))}
        </Grid>
      </Menu>

      {/* Mobile Menu */}
      <Collapse in={mobileMenuOpen}>
        <Paper
          sx={{
            position: "fixed",
            top: "64px",
            left: 0,
            right: 0,
            zIndex: 1200,
            p: 2,
          }}
          elevation={3}
        >
          <List>
            <ListItemButton
              onClick={toggleMobileProducts}
              sx={{
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <ListItemText primary="Products" />
              <ExpandMoreIcon
                sx={{
                  transform: mobileProductsOpen ? "rotate(180deg)" : "none",
                  transition: "transform 0.2s",
                }}
              />
            </ListItemButton>

            <Collapse in={mobileProductsOpen} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                {productCategories.map((category) => (
                  <Box key={category.name}>
                    <Typography
                      variant="subtitle2"
                      sx={{ px: 2, pt: 1, color: "text.secondary" }}
                    >
                      {category.name}
                    </Typography>
                    {category.items.map((item) => (
                      <ListItemButton
                        key={item.name}
                        component={Link}
                        href={item.href}
                        onClick={closeAllMenus}
                        sx={{ pl: 4, color: "text.primary" }}
                      >
                        <ListItemText primary={item.name} />
                      </ListItemButton>
                    ))}
                  </Box>
                ))}
              </List>
            </Collapse>

            <ListItemButton
              component={Link}
              href="/resources"
              onClick={closeAllMenus}
              sx={{ color: "text.primary" }}
            >
              <ListItemText primary="Resources" />
            </ListItemButton>

            <ListItemButton
              component={Link}
              href="/pricing"
              onClick={closeAllMenus}
              sx={{ color: "text.primary" }}
            >
              <ListItemText primary="Pricing" />
            </ListItemButton>

            <ListItemButton
              component={Link}
              href="/contact"
              onClick={closeAllMenus}
              sx={{ color: "text.primary" }}
            >
              <ListItemText primary="Contact" />
            </ListItemButton>

            <ListItemButton
              component={Link}
              href="/auth/signin"
              onClick={closeAllMenus}
              sx={{ color: "text.primary" }}
            >
              <ListItemText primary="Sign in" />
            </ListItemButton>

            <ListItem sx={{ justifyContent: "center", pt: 2 }}>
              <GradientButton
                component={Link}
                href="/auth/signup"
                variant="contained"
                fullWidth
                onClick={closeAllMenus}
              >
                Get started
              </GradientButton>
            </ListItem>
          </List>
        </Paper>
      </Collapse>
    </Box>
  );
}