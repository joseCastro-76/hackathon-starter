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

export default function SimpleCard(props) {
    const classes = useStyles();

    const { data, loading, error } = props.stats;

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error...</p>;

    return (
        <React.Fragment>

            <Grid item>
                <Card className={ classes.root }>
                    <CardContent>
                        <Typography gutterBottom variant="h4" component="h2">
                            { data.confirmed.value.toLocaleString('en-US') }
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
                            { data.recovered.value.toLocaleString('en-US') }
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
                            { data.deaths.value.toLocaleString('en-US') }
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