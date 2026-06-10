// app/theme.ts
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#0055ff',    // Perfect Sweet Spot: Saturated, rich Cobalt Blue
      light: '#3377ff',   // Vibrant mid-tone blue
      dark: '#0033cc',    // Deep commanding blue
    },
    secondary: {
      main: '#9fa8ff',    // Beautifully saturated Slate-Lavender accent
      light: '#c2c7ff',
      dark: '#7a85ff',
    },
    background: {
      default: '#eef3fa', // The exact cool-tinted, ultra-clean light canvas background
      paper: '#ffffff',   // Crisp white for inputs and result cards
    },
    text: {
      primary: '#0a192f',   // Deepest navy-slate for razor-sharp typography contrast
      secondary: '#475569', // Muted slate for metadata fields
    },
    divider: 'rgba(0, 85, 255, 0.1)', // Subtle primary-tinted borders
  },
  
  // Clean, high-end organic corner rounding
  shape: {
    borderRadius: 22, 
  },

  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none', 
          fontWeight: 700, 
          borderRadius: 50, // Sleek pill shapes matching the Material You image assets
          padding: '10px 26px',
          boxShadow: 'none',
          backgroundColor: '#0055ff', 
          color: '#ffffff',
          '&:hover': {
            backgroundColor: '#0044cc', 
            boxShadow: '0px 6px 20px rgba(0, 85, 255, 0.25)', // Deep vibrant glow
          },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          backgroundColor: '#ffffff',
          borderRadius: 24, 
          boxShadow: '0px 8px 30px rgba(10, 25, 47, 0.03)', // Premium, lightweight shadow depth
          border: '1px solid rgba(0, 85, 255, 0.08)',       // Crisp, subtle cobalt framework outline
          transition: 'all 0.2s cubic-bezier(0.4, 0, 0.2, 1)',
          '&:hover': {
            transform: 'translateY(-2px)', 
            borderColor: '#0055ff',
            boxShadow: '0px 12px 35px rgba(0, 85, 255, 0.08)', // Glows gracefully on interaction
          },
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          '& .MuiOutlinedInput-root': {
            borderRadius: 50, // Rounded pill search bar interface
            backgroundColor: '#ffffff',
            '& fieldset': {
              borderColor: 'rgba(0, 85, 255, 0.15)',
            },
            '&:hover fieldset': {
              borderColor: '#0055ff',
            },
            '&.Mui-focused fieldset': {
              borderColor: '#0055ff',
              borderWidth: '2px',
            },
          },
        },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          borderRadius: 50, // Ensures Select component dropdown elements match the pill structure
        },
      },
    },
  },
});

export default theme;