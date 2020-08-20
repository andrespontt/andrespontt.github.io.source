import React from 'react';
import './App.css';
import CovidDashboard from './CovidDashboard';
import { Typography, Link, Container, Box, createMuiTheme, CssBaseline } from '@material-ui/core';
import { ThemeProvider } from "@material-ui/styles";

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'MIT License © '}
      <Link color="inherit" href="https://material-ui.com" />
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const theme = createMuiTheme({
  palette: {
    type: "dark"
  }
});

function App() {

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container maxWidth="sm">
        <Box my={4}>
          <CovidDashboard />
        </Box>
        <Copyright />
      </Container>
    </ThemeProvider>
  );
}

export default App;
