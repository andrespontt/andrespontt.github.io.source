import React, { useState, useEffect } from 'react';
import {TableContainer, Table, TableRow, TableCell, Paper} from '@material-ui/core';
import {makeStyles} from '@material-ui/core/styles';

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

export default function MyComponent() {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);
  const classes = useStyles();
  // Note: the empty deps array [] means
  // this useEffect will run once
  // similar to componentDidMount()
  useEffect(() => {
    fetch("https://raw.githubusercontent.com/andrespontt/data/master/covid-current.json")
      .then(res => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setItems(result);
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      )
  }, [])

  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!isLoaded) {
    return <div>Loading...</div>;
  } else {
    return (
      <div>
        <TableContainer component={Paper}>
          <Table className={classes.table} aria-label="simple table">
            <TableRow>
              <TableCell>Date</TableCell>
              <TableCell>State</TableCell>
              <TableCell>Positives</TableCell>
            </TableRow>
          {items.map(item => (
            <TableRow>
              <TableCell>{item.date}</TableCell>
              <TableCell>{item.state}</TableCell>
              <TableCell>{item.positive}</TableCell>
            </TableRow>
          ))}
          </Table>
        </TableContainer>
      </div>

    );
  }
}