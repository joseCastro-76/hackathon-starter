import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';

import ArrowBackIosSharpIcon from '@material-ui/icons/ArrowBackIosSharp';
import ArrowForwardIosSharpIcon from '@material-ui/icons/ArrowForwardIosSharp';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        minWidth: '100%',
    },
}));

export default function Graph() {
    const classes = useStyles();
    
    return (
        <div className={ classes.root }>
            <Grid
                container
                direction="column"
                justify="space-evenly"
                alignItems="center"
                spacing={ 2 }
            >

                <Grid
                    container
                    item
                    justify="center"
                    alignItems="center"
                    spacing={ 2 }
                >
                    <Grid item xs={ 2 }>
                        <IconButton aria-label="back arrow">
                            <ArrowBackIosSharpIcon />
                        </IconButton>
                    </Grid>
                    <Grid item xs={ 8 }>
                        <Typography variant="h4">
                            <Box textAlign="center">
                                Category
                            </Box>
                        </Typography>
                    </Grid>
                    <Grid item xs={ 2 }>
                        <IconButton aria-label="forward arrow">
                            <ArrowForwardIosSharpIcon />
                        </IconButton>
                    </Grid>
                </Grid>

                <Grid item xs={ 12 }>
                    <img src="https://quickchart.io/chart?c={
                        type:'bar', 
                        data:{
                            labels:['Deaths'],
                            datasets:[
                                {label:'United States', barThickness: 'flex', data:[37730]},
                                {label:'Global', barThickness: 'flex', data:[150948]}
                                ]
                            }
                        }"
                        height="444"
                        width="333"
                    ></img>
                </Grid>

            </Grid>
        </div>
    );
}