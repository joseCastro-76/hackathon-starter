import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles({
    root: {
        minWidth: 300,
        textAlign: 'center',
    },
});

export default function SimpleCard() {
    const classes = useStyles();

    return (
        <React.Fragment>

            <Grid item>
                <Card className={ classes.root }>
                    <CardContent>
                        <Typography gutterBottom variant="h4" component="h2">
                            683,786
                        </Typography>
                        <Typography variant="body1" color="textSecondary" component="p">
                            Confirmed
                        </Typography>
                    </CardContent>
                </Card>
            </Grid>

            <Grid item>
                <Card className={ classes.root }>
                    <CardContent>
                        <Typography gutterBottom variant="h4" component="h2">
                            57,123
                        </Typography>
                        <Typography variant="body1" color="textSecondary" component="p">
                            Recovered
                        </Typography>
                    </CardContent>
                </Card>
            </Grid>
            
            <Grid item>
                <Card className={ classes.root }>
                    <CardContent>
                        <Typography gutterBottom variant="h4" component="h2">
                            34,575
                        </Typography>
                        <Typography variant="body1" color="textSecondary" component="p">
                            Deaths
                        </Typography>
                    </CardContent>
                </Card>
            </Grid>
        </React.Fragment>
    )
}