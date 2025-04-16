'use client';
import Sidebar from '@/Components/Sidebar';
import { Box, Grid, Avatar,AppBar, ThemeProvider } from '@mui/material';
import React from 'react';
import Paper from '@mui/material/Paper';    
import HorizontalTabBar from '@/Components/Tabbar';
import theme from '@/utils/theme';
import ProfileCardWithTimer from '@/Components/ProfileCardWithTimer';

  

const DashBoardPage = () => {
    return (
        <ThemeProvider theme={theme}>
               <div>
            <Box sx={{ display: 'flex' }}>
          
                <Box component="main" sx={{ flexGrow: 1, p: 3 }}>

                    <Box sx={{ flexGrow: 1 }}>
                        <Grid container spacing={2}>
                            <Grid size={{ xs: 6, md: 4 }}>
<ProfileCardWithTimer/>
                            </Grid>
                            <Grid size={{ xs: 6, md: 8 }}>
                               <HorizontalTabBar/>
                            </Grid>
                        </Grid>
                    </Box>

                </Box>
            </Box>
        </div>
        </ThemeProvider>
     
    );
};

export default DashBoardPage;