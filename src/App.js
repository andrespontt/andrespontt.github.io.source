import React from 'react';
import './App.css';
import { Typography, Link, createMuiTheme, CssBaseline, Container, AppBar, Toolbar, makeStyles, IconButton, Card, Paper } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu'
import { ThemeProvider } from "@material-ui/styles";
import UsaDashboard from './UsaDashboard';
import SummaryGrid from './components/SummaryGrid';

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

const useStyles = makeStyles(theme => ({
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


function Summary() {
  const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      flexWrap: 'wrap',
      '& > *': { 
        marginRight: theme.spacing(2),
        width: theme.spacing(16),
        height: theme.spacing(16),
      },
    },
  }));
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Paper elevation={3}>
        Total cases:
        4000
      </Paper>
      <Paper elevation={3}>
        Total cases:
        4000
      </Paper>
      <Paper elevation={3}>
        Total cases:
        4000
      </Paper>
      <Paper elevation={3}>
        Total cases:
        4000
      </Paper>
    </div>
  );
}


function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container maxWidth={false}>
        <ButtonAppBar />
        <SummaryGrid />
        <UsaDashboard />

        <Copyright />
      </Container>
    </ThemeProvider>
  );
}

export default App;
