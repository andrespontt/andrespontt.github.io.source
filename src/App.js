import React from 'react';
import './App.css';
import { Typography, Link, createMuiTheme, CssBaseline } from '@material-ui/core';
import { ThemeProvider } from "@material-ui/styles";
import Dashboard from './Dashboard';

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
      <Dashboard />
      <Copyright />
    </ThemeProvider>
  );
}

export default App;
