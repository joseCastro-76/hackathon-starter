import React from 'react';
import PropTypes from 'prop-types';
import SwipeableViews from 'react-swipeable-views';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

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
        width: 360,
    },
}));

export default function FullWidthTabs() {
    const classes = useStyles();
    const theme = useTheme();
    const [value, setValue] = React.useState(0);

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
                    Stats
                </TabPanel>
                <TabPanel value={ value } index={ 1 } dir={ theme.direction }>
                    Graph
                </TabPanel>

            </SwipeableViews>
        </div>
    )
}