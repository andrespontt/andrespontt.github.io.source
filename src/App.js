import React from 'react';
import './App.css';
import CovidDashboard from './CovidDashboard';
import {Typography, Link, Container, Box } from '@material-ui/core';

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com"/>
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

function App() {
  return (
   <Container maxWidth="sm">
     <Box my={4}>
       <Typography variant="h4" component="h1" gutterBottom>
         andrespontt.github.io
       </Typography>
       <Copyright />
       <CovidDashboard />
     </Box>
   </Container>
  );
}

export default App;
