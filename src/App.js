import React from 'react';
import './App.css';
import { Typography, createMuiTheme, CssBaseline, Container, makeStyles } from '@material-ui/core';
import { ThemeProvider } from "@material-ui/styles";
import UsaDashboard from './components/UsaDashboard';
import SummaryGrid from './components/SummaryGrid';
import { Switch, Route, Link, BrowserRouter as Router } from "react-router-dom";
import MyComponent from './components/CovidDashboard';
import ButtonAppBar from './components/ButtonAppBar';
import grey from '@material-ui/core/colors/grey';

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
  menuButton: {
    marginRight: theme.spacing(2)
  },
  title: {
    flexGrow: 1
  }
}))


const theme = createMuiTheme({
  palette: {
    type: "dark",
    primary: {
      main: grey[900]
    }
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
          <Switch >
            <Route exact path="/">
              <UsaDashboard />
            </Route>
            <Route path="/c19/">
              <MyComponent/>
            </Route>
          </Switch>
          <Copyright />
        </Container>
      </ThemeProvider>
    </Router>
  );
}


export default App;