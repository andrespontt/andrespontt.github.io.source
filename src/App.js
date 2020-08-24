import React from 'react';
import './App.css';
import { Typography, Link, createMuiTheme, CssBaseline, Container, AppBar, Toolbar, makeStyles, IconButton } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu'
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

const useStyles = makeStyles(theme=>({
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

function ButtonAppBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" className={classes.menuBUtton} color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title} >
            Dashboard
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
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
      <Container maxWidth={false}>
        <ButtonAppBar />
          <Dashboard />
      
        <Copyright />
      </Container>
    </ThemeProvider>
  );
}

export default App;
