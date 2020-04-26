import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

import CountrySelect from './countrySelect';
import StatsCard from './statsCard';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        minWidth: '100%',
    },
}));

export default function Stats(props) {
    const classes = useStyles();

    return(
        <div className={ classes.root }>

            <Grid
                container
                direction="column"
                justify="center"
                alignItems="center"
                spacing={ 6 }
            >

                <Grid item xs={ 12 }>
                    <CountrySelect
                        countries={ props.countries }
                        selectedCountry={ props.selectedCountry}
                        handleSelectedCountry={ props.handleSelectedCountry }
                    />  
                </Grid>

                <Grid
                    container
                    direction="column"
                    justify="center"
                    alignItems="center"
                    spacing={ 5 }
                    item xs={ 12 }
                >
                    {/* TODO: loop over stats */}
                    <StatsCard
                        stats={ props.stats }
                    />
                </Grid>

            </Grid>
        </div>
    )

}