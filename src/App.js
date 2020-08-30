import React from 'react';
import './App.css';
import { Typography, Link, createMuiTheme, CssBaseline, Container, makeStyles } from '@material-ui/core';
import { ThemeProvider } from "@material-ui/styles";
import UsaDashboard from './UsaDashboard';
import SummaryGrid from './components/SummaryGrid';
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";
import MyComponent from './CovidDashboard';
import ButtonAppBar from './ButtonAppBar';

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

export const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  menuBUtton: {
    marginRight: theme.spacing(2)
  },
  title: {
    flexGrow: 1
  }
}))


const theme = createMuiTheme({
  palette: {
    type: "dark"
  }
});

function App() {
  return (
    <Router>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Container maxWidth={false}>
          <ButtonAppBar />
          <SummaryGrid />
          <UsaDashboard />
          <Switch >
            <Route path="/">
              <MyComponent />
            </Route>
            <Route path="/c19">
              <UsaDashboard />
            </Route>
          </Switch>
          <Copyright />
        </Container>
      </ThemeProvider>
    </Router>
  );
}


export default App;