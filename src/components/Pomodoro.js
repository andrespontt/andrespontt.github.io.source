import React from 'react';
import { Card, CardActionArea, CardMedia, Typography, CardActions, Button, makeStyles } from '@material-ui/core';


const useStyles = makeStyles({
    root: {
        justifyContent: 'center'
    }
        
});

export default function Podomoro() {

    const classes = useStyles();
    

    return (
        <Card>
            <CardActionArea className={classes.root}>
                <CardMedia
                    component="img"
                    height="140"
                    image="img/tomato2-bg.jpg"
                    title="tomato"
                    autoCorrect

                />
                    <Typography gutterBottom align="center" variant="h1" component="h1">
                        26:00
                    </Typography>
                
            </CardActionArea>
            < CardActions align="center" className={classes.root}>
                    <Button size="large" align="center" color="default">
                        Start
                    </Button>
                    <Button size="large" color="default">
                        Stop
                    </Button>
                </CardActions>
        </Card>
    );

}