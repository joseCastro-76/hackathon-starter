import React from 'react';
import { render } from 'react-dom';
import './css/custom.scss';

import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';

import FullWidthTabs from './fullWidthTabs';
import useFetch from './useFetch';


function App() {
    const [selectedCountry, setSelectedCountry] = React.useState();

    const countries = useFetch('https://covid19.mathdro.id/api/countries');
    const globalStats = useFetch('https://covid19.mathdro.id/api/');
    const handleSelectedCountry = (event) => {
        setSelectedCountry(event.target.value);
    }
    const countryStats = useFetch(`https://covid19.mathdro.id/api/countries/${selectedCountry}`);
    // console.log(countryStats);

    if (countryStats.loading) return <p>Loading...</p>;
    if (countryStats.error) return <p>Error...</p>;

    return (
        <React.Fragment>
            <CssBaseline />
            <Container maxWidth="sm" style={{ margin:0, padding: 0}}>
                <FullWidthTabs
                    countries={ countries }
                    globalStats={ globalStats }
                    countryStats={ countryStats }
                    selectedCountry={ selectedCountry }
                    handleSelectedCountry={ handleSelectedCountry }
                />
            </Container>
        </React.Fragment>
    )
}

render(<App />, document.getElementById('root'));