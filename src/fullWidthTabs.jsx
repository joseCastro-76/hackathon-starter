import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import SwipeableViews from 'react-swipeable-views';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

import Stats from './stats';
import Graph from './graph';
// import useFetch from './useFetch';


function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <Typography
            component="div"
            role="tabpanel"
            hidden={ value !== index }
            id={ `full-width-tabpanel=${index}`}
            { ...other }
        >
            { value === index && <Box p={ 3 }>{ children }</Box>}
        </Typography>
    );
}

TabPanel.proptypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired,
};

function allyProps(index) {
    return {
        id: `full-width-tab-${ index }`,
        'aria-controls': `full-width-tabpanel-${ index }`,
    };
}

const useStyles = makeStyles((theme) => ({
    root: {
        backgroundColor: theme.palette.background.paper,
        minWidth: 250,
        height: '100vh',
    },
    rootGrid: {
        flexGrow: 1,
        minWidth: '100%',
    },
}));

export default function FullWidthTabs(props) {
    const classes = useStyles();
    const theme = useTheme();
    const [value, setValue] = React.useState(0);
    // const [stats, setStats] = React.useState();
    // const [selectedCountry, setSelectedCountry] = React.useState();

    // const countries = useFetch('https://covid19.mathdro.id/api/countries');
    // const globalStats = useFetch('https://covid19.mathdro.id/api/');
    // const countryStats = useFetch(`https://covid19.mathdro.id/api/countries/${selectedCountry}`);
    // console.log(countryStats);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const handleChangeIndex = (index) => {
        setValue(index);
    };

    return(
        <div className={ classes.root }>
            
            <AppBar position="static" color="default">
                <Tabs
                    value={ value }
                    onChange={ handleChange }
                    indicatorColor="primary"
                    textColor="primary"
                    variant="fullWidth"
                    aria-label="full width tabs example"
                >
                    <Tab label="Stats" { ...allyProps(0) } />
                    <Tab label="Graph" { ...allyProps(1) } />
                </Tabs>
            </AppBar>

            <SwipeableViews
                axis={ theme.direction === 'rtl' ? 'x-reverse' : 'x'}
                index={ value }
                onChangeIndex={ handleChangeIndex }
            >

                <TabPanel value={ value } index={ 0 } dir={ theme.direction }>
                    <Stats
                        stats={ props.countryStats.data.error
                                ? props.globalStats 
                                : props.countryStats
                            }
                        countries= { props.countries }
                        selectedCountry={ props.selectedCountry }
                        handleSelectedCountry={ props.handleSelectedCountry }
                    />
                </TabPanel>

                <TabPanel value={ value } index={ 1 } dir={ theme.direction }>
                    <Graph
                        selectedCountry={ props.selectedCountry }
                        countryStats={ props.countryStats }
                        globalStats={ props.globalStats }
                    />
                </TabPanel>

            </SwipeableViews>
        </div>
    )
}