"use client";
import React, { useState } from 'react';
import { 
  Box, 
  Typography, 
  Card, 
  CardContent, 
  Divider,
  Button,
  Grid,
  Stack,
  List,
  ListItem,
  ListItemIcon,
  ToggleButtonGroup,
  ToggleButton
} from '@mui/material';
import { CheckCircle } from 'phosphor-react';
import Navbar from '@/Pages/NavBar';

const PricingCards = () => {
  const [billingCycle, setBillingCycle] = useState('monthly');

  const handleBillingChange = (event, newBilling) => {
    if (newBilling !== null) {
      setBillingCycle(newBilling);
    }
  };

  const pricingPlans = [
    {
      title: "Basic",
      monthlyPrice: "450",
      yearlyPrice: "399",
      userLimit: "For 5 Users",
      extraUserPricing: "Beyond 10 Users Rs. 50/- per User",
      features: [
        "All App access",
        "Email Support (Within 24hrs.)"
      ],
      cta: "Get Started",
      color: '#d22eff',
    },
    {
      title: "Team",
      monthlyPrice: "600",
      yearlyPrice: "499",
      userLimit: "For 15 Users",
      extraUserPricing: "Beyond 20 Users Rs. 60/- per User",
      features: [
        "All App access",
        "Email/Call Support (Immediate Basis)"
      ],
      cta: "Get Started",
      color: '#d22eff',
      popular: true
    },
    {
      title: "Pro",
      monthlyPrice: "750",
      yearlyPrice: "599",
      userLimit: "For 30 Users",
      extraUserPricing: "Beyond 50 Users Rs. 100/- per User",
      features: [
        "All App access",
        "Premium Support (Dedicated RM)"
      ],
      cta: "Get Started",
      color: '#d22eff',
    }
  ];


  return (
    <Box sx={{ 
      width:'100vw',
      mx: 'auto',
      textAlign: 'center'
    }}>

<Navbar/>

      {/* Billing Toggle */}
      <Box sx={{ 
        mb: 6,
        mt:4,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 2
      }}>
        <ToggleButtonGroup
          value={billingCycle}
          exclusive
          onChange={handleBillingChange}
          aria-label="billing cycle"
          sx={{
            backgroundColor: 'background.paper',
            borderRadius: '50px',
            padding: '4px',
            boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
          }}
        >
          <ToggleButton 
            value="monthly" 
            aria-label="monthly"
            sx={{
              borderRadius: '50px !important',
              px: 3,
              py: 1,
              fontWeight: 600,
              border: 'none',
              '&.Mui-selected': {
                backgroundColor: '#d22eff',
                color: 'white',
                '&:hover': {
                  backgroundColor: '#c01de5'
                }
              }
            }}
          >
            Monthly
          </ToggleButton>
          <ToggleButton 
            value="yearly" 
            aria-label="yearly"
            sx={{
              borderRadius: '50px !important',
              px: 3,
              py: 1,
              fontWeight: 600,
              border: 'none',
              '&.Mui-selected': {
                backgroundColor: '#d22eff',
                color: 'white',
                '&:hover': {
                  backgroundColor: '#c01de5'
                }
              }
            }}
          >
            Yearly
          </ToggleButton>
        </ToggleButtonGroup>
      </Box>

      {/* Pricing Cards */}
      <Grid container spacing={4} justifyContent="center">
        {pricingPlans.map((plan, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card sx={{
              height: '100%',
              width: '300px',
              display: 'flex',
              flexDirection: 'column',
              borderBottomLeftRadius: "15px",
              borderBottomRightRadius: '15px',
              borderTopRightRadius: '0px',
              borderTopLeftRadius: '0px',
              borderTop: `8px solid ${plan.highlighted ? '#2860f5' : '#d22eff'}`,
              transition: 'all 0.3s ease',
              '&:hover': {
                transform: 'translateY(-4px)',
                boxShadow: plan.highlighted ? 6 : 2
              }
            }}>
              <CardContent sx={{ flexGrow: 1 }}>
                <Stack spacing={2}>
                  <Typography variant="h5" component="h2" sx={{ 
                    fontWeight: 700,
                    textAlign: 'left',
                    color: plan.highlighted ? 'primary.main' : 'text.primary'
                  }}>
                    {plan.title}
                  </Typography>
                  
                  <Box sx={{ display: 'flex', alignItems: 'baseline' }}>
                    <Typography 
                      component="span" 
                      sx={{
                        fontSize: '1.3rem',
                        fontWeight: 600,
                        mr: 0.5,
                        fontFamily: 'inherit'
                      }}
                    >
                      Rs
                    </Typography>
                    <Typography variant="h3" component="div" sx={{
                      fontWeight: 700,
                      textAlign: 'left',
                      color: plan.highlighted ? '#2860f5' : '#d22eff',
                      fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
                      py: 1,
                      lineHeight: 1
                    }}>
                      {billingCycle === 'monthly' ? plan.monthlyPrice : plan.yearlyPrice}
                    </Typography>
                    {billingCycle === 'yearly' && plan.title !== "One App Free" && (
                      <Typography 
                        component="span" 
                        sx={{
                          ml: 1,
                          fontSize: '0.8rem',
                          color: 'text.secondary',
                          textDecoration: 'line-through'
                        }}
                      >
                        Rs {plan.monthlyPrice}
                      </Typography>
                    )}
                  </Box>
                  
                  <Typography variant="body1" sx={{ 
                    textAlign: 'left',
                    color: 'text.secondary'
                  }}>
                    {plan.extraUserPricing}
                  </Typography>
                  
                  <Divider sx={{ my: 2 }} />
                  
                  <List dense disablePadding>
                    {plan.features.map((feature, i) => (
                      <ListItem key={i} disableGutters>
                        <ListItemIcon sx={{ minWidth: 32 }}>
                          <CheckCircle size={20} weight="fill" color="#4CAF50" />
                        </ListItemIcon>
                        <Typography variant="body2">
                          {feature}
                        </Typography>
                      </ListItem>
                    ))}
                  </List>
                </Stack>
              </CardContent>
              
              <Box sx={{ p: 2 }}>
                <Button
                  fullWidth
                  size="large"
                  sx={{
                    fontWeight: 600,
                    py: 1.5,
                    backgroundColor: plan.highlighted ? '#d22eff' : '#2860f5',
                    color: 'white',
                    '&:hover': {
                      backgroundColor: plan.highlighted ? '#c01de5' : '#1a4fd1'
                    }
                  }}
                >
                  {plan.cta}
                </Button>
              </Box>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default PricingCards;