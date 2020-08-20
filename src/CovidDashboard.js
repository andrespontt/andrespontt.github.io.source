import React, { useState, useEffect } from 'react';
import {TableContainer, Paper} from '@material-ui/core';
import classes from '*.module.css';

export default function MyComponent() {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);

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
          <Table className={classes.table} aria-label="simple table"></Table>
        </TableContainer>
        <table>
          <tr>
            <td>a</td>
            <td>b</td>
          </tr>
          {items.map(item => (
            <tr key={item.date}>
              <td>{item.state}</td>
              <td>{item.positive}</td>
            </tr>
          ))}
        </table>
      </div>

    );
  }
}