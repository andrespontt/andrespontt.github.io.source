import { makeStyles, Grid, Paper } from "@material-ui/core";
import React, { Fragment } from "react";


const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1
    },
    paper: {
        padding: theme.spacing(4),
        textAlign: 'center',
        color: theme.palette.text.secondary
    }
}));

export default function SummaryGrid() {

const classes = useStyles();

    function FormRow() {
        return (
            <Fragment>
                <Grid item xs={6}>
                    <Paper className={classes.paper}>Total US: 33.342</Paper>
                </Grid>
                <Grid item xs={6}>
                    <Paper className={classes.paper}>Total US: 33.333</Paper>
                </Grid>
            </Fragment>
        );
    }

    return(
        <div className={classes.root}>
            <Grid container spacing={0}>
                <Grid container item xs={12} spacing={0}>
                    <FormRow />
                </Grid>
            </Grid>
        </div>
    );

}