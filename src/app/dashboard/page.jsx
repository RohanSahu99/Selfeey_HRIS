'use client';
import { Box, Grid, ThemeProvider,CssBaseline } from '@mui/material';
import React from 'react'; 
import HorizontalTabBar from '@/Components/Tabbar';
import theme from '@/utils/theme';
import ProfileCardWithTimer from '@/Components/ProfileCardWithTimer';

  

const DashBoardPage = () => {
    return (
        <ThemeProvider theme={theme}>
           <CssBaseline/>
            <Box sx={{ display: 'flex' }}>
          
                <Box component="main" sx={{ flexGrow: 1, p: 3 }}>

                    <Box sx={{ flexGrow: 1 }}>
                        <Grid container spacing={2}>
                            <Grid size={{ xs: 6, md: 4 }}>

                                        {/* Main Paper content can go here */}
                                        <ProfileCardWithTimer/>
                        
                            </Grid>
                            <Grid size={{ xs: 6, md: 8 }}>
                               <HorizontalTabBar/>
                            </Grid>
                        </Grid>
                    </Box>

                </Box>
            </Box>

        </ThemeProvider>
     
    );
};

export default DashBoardPage;