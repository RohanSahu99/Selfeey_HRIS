import { createTheme } from '@mui/material/styles';
import { Raleway } from 'next/font/google';

const raleway = Raleway({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'], // choose what you need
  variable: '--font-raleway', // this becomes a CSS variable
})

const theme = createTheme({
  palette: {
    primary: {
      main: '#1976d2',
    },
    secondary: {
      main: '#ff4081',
    },
    background: {
      default: '#ebf5f4',
    },
  },
  typography: {
    fontFamily: 'var(--font-raleway), sans-serif',// default font (body)
    fontSize: 14,
    h1: {
      fontFamily: 'var(--font-raleway), sans-serif',
      fontWeight: 700,
    },
    h2: {
      fontFamily: 'var(--font-raleway), sans-serif',
      fontWeight: 700,
    },
    h3: {
      fontFamily: 'var(--font-raleway), sans-serif',
      fontWeight: 600,
    },
    h4: {
      fontFamily: 'var(--font-raleway), sans-serif',
      fontWeight: 600,
    },
    h5: {
      fontFamily: 'var(--font-raleway), sans-serif',
      fontWeight: 600,
    },
    h6: {
      fontFamily: 'var(--font-raleway), sans-serif',
      fontWeight: 500,
      fontSize:"16px"
    },
    body1: {
      fontFamily: 'var(--font-raleway), sans-serif',
      fontWeight: 400, // or 300 for lighter
      fontSize:"14px"
    },
    body2: {
      fontFamily: 'var(--font-raleway), sans-serif',
      fontWeight: 300,
    },
    button: {
      fontFamily: 'var(--font-raleway), sans-serif',
      fontWeight: 500,
      textTransform: 'none',
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: '8px',
          boxShadow: 'none',
        },
      },
    },
    MuiTabs: {
      styleOverrides: {
        indicator: {
          height: '3px',
          borderRadius: '2px',
          backgroundColor: '#1976d2',
        },
      },
    },
  },
});

export default theme;
