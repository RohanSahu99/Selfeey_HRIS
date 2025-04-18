"use client";

import React, { useState,useEffect } from 'react';
import { Box, Grid, Button, Menu, MenuItem, Typography, ThemeProvider } from '@mui/material';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import CountUp from 'react-countup';
import theme from '@/utils/theme';
import Link from 'next/link';
import Features from './Features';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Navbar from './NavBar';

function HomePage() {
  // State for menu anchors
  const [featuresAnchorEl, setFeaturesAnchorEl] = useState(null);
  const [solutionsAnchorEl, setSolutionsAnchorEl] = useState(null);
  const [partnersAnchorEl, setPartnersAnchorEl] = useState(null);
  const [resourcesAnchorEl, setResourcesAnchorEl] = useState(null);
  const [hiringSubmenuAnchorEl, setHiringSubmenuAnchorEl] = useState(null);
  const [coreHRSubmenuAnchorEl, setCoreHRSubmenuAnchorEl] = useState(null);
  const [performanceSubmenuAnchorEl, setPerformanceSubmenuAnchorEl] = useState(null);

  useEffect(() => {
    AOS.init({
      duration: 1600, // animation duration
      // once: true,    // whether animation should happen only once
    });
  }, []);

  // Features menu handlers
  const handleFeaturesEnter = (event) => {
    setFeaturesAnchorEl(event.currentTarget);
  };

  const handleFeaturesLeave = () => {
    setFeaturesAnchorEl(null);
    setHiringSubmenuAnchorEl(null);
    setCoreHRSubmenuAnchorEl(null);
    setPerformanceSubmenuAnchorEl(null);
  };

  const handleFeaturesMenuEnter = () => {
    setFeaturesAnchorEl(featuresAnchorEl); // Keep main menu open
  };

  const handleFeaturesMenuLeave = () => {
    setFeaturesAnchorEl(null);
    setHiringSubmenuAnchorEl(null);
    setCoreHRSubmenuAnchorEl(null);
    setPerformanceSubmenuAnchorEl(null);
  };

  // Hiring & Onboarding submenu handlers
  const handleHiringEnter = (event) => {
    setHiringSubmenuAnchorEl(event.currentTarget);
  };

  const handleHiringLeave = () => {
    setHiringSubmenuAnchorEl(null);
  };

  const handleHiringMenuEnter = () => {
    setHiringSubmenuAnchorEl(hiringSubmenuAnchorEl); // Keep submenu open
  };

  const handleHiringMenuLeave = () => {
    setHiringSubmenuAnchorEl(null); // Close only submenu
  };

  // Core HR submenu handlers
  const handleCoreHREnter = (event) => {
    setCoreHRSubmenuAnchorEl(event.currentTarget);
  };

  const handleCoreHRLeave = () => {
    setCoreHRSubmenuAnchorEl(null);
  };

  const handleCoreHRMenuEnter = () => {
    setCoreHRSubmenuAnchorEl(coreHRSubmenuAnchorEl); // Keep submenu open
  };

  const handleCoreHRMenuLeave = () => {
    setCoreHRSubmenuAnchorEl(null); // Close only submenu
  };

  // Performance & Development submenu handlers
  const handlePerformanceEnter = (event) => {
    setPerformanceSubmenuAnchorEl(event.currentTarget);
  };

  const handlePerformanceLeave = () => {
    setPerformanceSubmenuAnchorEl(null);
  };

  const handlePerformanceMenuEnter = () => {
    setPerformanceSubmenuAnchorEl(performanceSubmenuAnchorEl); // Keep submenu open
  };

  const handlePerformanceMenuLeave = () => {
    setPerformanceSubmenuAnchorEl(null); // Close only submenu
  };

  // Solutions menu handlers
  const handleSolutionsEnter = (event) => {
    setSolutionsAnchorEl(event.currentTarget);
  };

  const handleSolutionsLeave = () => {
    setSolutionsAnchorEl(null);
  };

  const handleSolutionsMenuEnter = () => {
    setSolutionsAnchorEl(solutionsAnchorEl); // Keep menu open
  };

  const handleSolutionsMenuLeave = () => {
    setSolutionsAnchorEl(null);
  };

  // Partners menu handlers
  const handlePartnersEnter = (event) => {
    setPartnersAnchorEl(event.currentTarget);
  };

  const handlePartnersLeave = () => {
    setPartnersAnchorEl(null);
  };

  const handlePartnersMenuEnter = () => {
    setPartnersAnchorEl(partnersAnchorEl); // Keep menu open
  };

  const handlePartnersMenuLeave = () => {
    setPartnersAnchorEl(null);
  };

  // Resources menu handlers
  const handleResourcesEnter = (event) => {
    setResourcesAnchorEl(event.currentTarget);
  };

  const handleResourcesLeave = () => {
    setResourcesAnchorEl(null);
  };

  const handleResourcesMenuEnter = () => {
    setResourcesAnchorEl(resourcesAnchorEl); // Keep menu open
  };

  const handleResourcesMenuLeave = () => {
    setResourcesAnchorEl(null);
  };

  // Common button styles
  const buttonStyles = {
    textTransform: 'none',
    color: 'black',
    fontWeight: 400,
    display: 'flex',
    alignItems: 'center',
    gap: 0.5,
    // '&:hover': {
    //   backgroundColor: '#d3e3fd',
    //   color: '#2860f5',
    // },
  };

  return (
    <ThemeProvider theme={theme}>
      <Box 
       sx={{
          minHeight: 'calc(100vh - 70px)',
          height: "100vh", 
          padding: 0, margin: 0
       }}>
     
<Navbar/>
        <Box
        
        >
          <Box sx={{ display: "flex", alignItems: "center", flexDirection: "column",paddingTop:"30px" }}>
            <Typography variant="h2" sx={{ fontWeight: "600" }} data-aos="fade-right" >
              HR software
            </Typography>
            <Typography variant="h2" sx={{ fontWeight: "600" }} data-aos="fade-left" >
              for every business
            </Typography>
          </Box>

          <Box sx={{ display: "flex", justifyContent: "center", marginTop: "30px" }}>
            <Typography sx={{ fontSize: "16px", width: "50%", textAlign: "center" }}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam, rem ratione dolor voluptatum, ea quos a corporis doloremque, voluptates ad veritatis obcaecati quaerat!
            </Typography>
          </Box>

          {/* Count up */}
          <Box sx={{ color: "black", fontSize: "35px", fontWeight: "400", marginTop: "40px", height: "80px", display: "flex", justifyContent: "space-around", alignItems: "center",}}>
            <Box sx={{ display: "flex", alignItems: "center", flexDirection: "column", color: "#2860f5" }}>
              <CountUp start={1} end={1000} duration={2} separator="," suffix="+" style={{ fontFamily: "cursive", fontStyle: "italic" }} />
              <Typography sx={{ fontSize: "25px", color: "black", fontWeight: "600" }}>
                Clients
              </Typography>
            </Box>

            <Box sx={{ display: "flex", alignItems: "center", flexDirection: "column", color: "#2860f5" }}>
              <CountUp start={1} end={700} duration={2} separator="," suffix="+" style={{ fontFamily: "cursive", fontStyle: "italic" }} />
              <Typography sx={{ fontSize: "25px", color: "black", fontWeight: "600" }}>
                Hires
              </Typography>
            </Box>
            <Box sx={{ display: "flex", alignItems: "center", flexDirection: "column", color: "#2860f5" }}>
              <CountUp start={1} end={900} duration={2} separator="," suffix="+" style={{ fontFamily: "cursive", fontStyle: "italic" }} />
              <Typography sx={{ fontSize: "25px", color: "black", fontWeight: "600" }}>
                Interviews
              </Typography>
            </Box>
            <Box sx={{ display: "flex", alignItems: "center", flexDirection: "column", color: "#2860f5" }}>
              <CountUp start={1} end={600} duration={2} separator="," suffix="+" style={{ fontFamily: "cursive", fontStyle: "italic" }} />
              <Typography sx={{ fontSize: "25px", color: "black", fontWeight: "600" }}>
                Assesments
              </Typography>
            </Box>
          </Box>
        </Box>

          <Features/>
      </Box>
    </ThemeProvider>
  );
}

export default HomePage;