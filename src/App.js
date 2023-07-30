import React from 'react';
import './App.css';
import { Typography, createMuiTheme, CssBaseline, Container, makeStyles } from '@material-ui/core';
import { ThemeProvider } from "@material-ui/styles";
import UsaDashboard from './components/UsaDashboard';
import { Switch, Route, Link, BrowserRouter as Router } from "react-router-dom";
import ButtonAppBar from './components/ButtonAppBar';
import grey from '@material-ui/core/colors/grey';
import Podomoro from './components/Pomodoro';
import ResumeSummary from './components/ResumeSummary';

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'MIT License © - Andres Pontt'}
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
          <Switch >
            <Route exact path="/">
              <ResumeSummary />
            </Route>
            <Route path="/c19/">
              <UsaDashboard/>
            </Route>
            <Route path="/pomodoro/">
              <Podomoro />
            </Route>
          </Switch>
          <Copyright />
        </Container>
      </ThemeProvider>
    </Router>
  );
}


export default App;