import * as React from 'react';
// import { makeStyles } from '@mui/styles';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { AppBar, Toolbar } from '@mui/material';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import { MenuList, MenuItem, Link, ListItemIcon } from '@mui/material';







const NavBar = () => {


  return (
    <ThemeProvider theme={theme}>
      <AppBar position="static">
        <Container maxWidth="lg">
          <Toolbar disableGutters>
            <MenuList>
              <MenuItem><Link href="/" underline="none" color="inherit">Home</Link>
              </MenuItem>
            </MenuList>

          </Toolbar>
          <MenuList>
            <MenuItem><Link href="/register" underline="none" color="inherit">Register</Link></MenuItem>
            <MenuItem>
              <Link href="/login" underline="none" color="inherit">Login</Link>

            </MenuItem>
          </MenuList>
        </Container>
      </AppBar>
    </ThemeProvider>
  );
};

const theme = createTheme({
  typography: {
    button: {
      fontSize: '1rem',
    },
  },
  components: {
    MuiContainer: {
      styleOverrides: {
        root: {
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'space-between',
        },
        backgroundColor: "black",


      },
    },
    MuiToolbar: {
      styleOverrides: {
        regular: {
          marginBottom: '0',
        },
      },
    },
    MuiTypography: {
      styleOverrides: {
        h1: {
          fontSize: '1.5rem',
          fontWeight: '500',
        },
      },
    },
    MuiList: {
      styleOverrides: {
        padding: {
          display: 'flex',
          flexWrap: 'wrap',
          li: {
            fontWeight: '500',
          }
        },
      },
    },
  },
});


export default NavBar;
