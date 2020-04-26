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

export default function Graph(props) {
    const classes = useStyles();
    const [category, setCategory] = React.useState(0);
    const selectedCountry = props.selectedCountry ? props.selectedCountry : 'None';

    const countryConfirmed = props.countryStats.data.confirmed.value;
    const countryRecovered = props.countryStats.data.recovered.value;
    const countryDeaths = props.countryStats.data.deaths.value;

    const { data, loading, error } = props.globalStats;
    const globalConfirmed = data.confirmed.value;
    const globalRecovered = data.recovered.value;
    const globalDeaths = data.deaths.value;

    const confirmedOptions = `https://quickchart.io/chart?c={
        type:'pie', 
        data:{
            labels:['Country', 'Global'],
            datasets:[
                {data:[${countryConfirmed}, ${globalConfirmed}]}
                ]
            }
        }`
    // const confirmedOptions = `https://quickchart.io/chart?c={
    //     type:'bar', 
    //     data:{
    //         labels:['Confirmed'],
    //         datasets:[
    //             {label: 'Country',data: [${countryConfirmed}]},
    //             {label: 'Global',data: [${globalConfirmed}]}
    //             ]
    //         }
    //     }`

    const recoveredOptions = `https://quickchart.io/chart?c={
        type:'pie', 
        data:{
            labels:['Country', 'Global'],
            datasets:[
                {data:[${countryRecovered}, ${globalRecovered}]}
                ]
            }
        }`

    const deathOptions = `https://quickchart.io/chart?c={
        type:'pie', 
        data:{
            labels:['Country', 'Global'],
            datasets:[
                {data:[${countryDeaths}, ${globalDeaths}]}
                ]
            }
        }`
    
    if (loading) return <p>Loading...</p>
    if (error) return <p>Error...</p>
    return (
        <div className={ classes.root }>
            <Grid
                container
                direction="column"
                justify="space-evenly"
                alignItems="center"
                spacing={ 6 }
            >

                <Grid
                    container
                    item
                    justify="center"
                    alignItems="center"
                    spacing={ 2 }
                >
                    <Grid item xs={ 2 }>
                        <IconButton
                            aria-label="back arrow" 
                            onClick={ () => setCategory(category => category == 0 ? category + 2 : category - 1)}
                        >
                            <ArrowBackIosSharpIcon />
                        </IconButton>
                    </Grid>
                    <Grid item xs={ 8 }>
                        <Typography variant="h4">
                            <Box textAlign="center">
                                { category === 0 ? 'Confirmed' : category === 1 ? 'Recovered' : 'Deaths'}
                            </Box>
                        </Typography>
                    </Grid>
                    <Grid item xs={ 2 }>
                        <IconButton
                            aria-label="forward arrow"
                            onClick={ () => setCategory(category => category == 2 ? category - 2 : category + 1)}
                        >
                            <ArrowForwardIosSharpIcon />
                        </IconButton>
                    </Grid>
                </Grid>
                {
                    category === 0 
                        ? <Grid item xs={ 12 }>
                            <img src={confirmedOptions}
                                height="382"
                                width="382"
                            ></img>
                        </Grid>
                    : category === 1
                        ? <Grid item xs={ 12 }>
                            <img src={recoveredOptions}
                                height="382"
                                width="382"
                            ></img>
                        </Grid>
                    : <Grid item xs={ 12 }>
                        <img src={deathOptions}
                            height="382"
                            width="382"
                        ></img>
                    </Grid>
                }
            </Grid>
        </div>
    );
}