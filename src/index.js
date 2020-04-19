import React from 'react';
import { render } from 'react-dom';
import './css/custom.scss';

import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';

import FullWidthTabs from './fullWidthTabs';

function App() {
    return (
        <React.Fragment>
            <CssBaseline />
            <Container maxWidth="sm" style={{ margin:0, padding: 0}}>
                <FullWidthTabs />
            </Container>
        </React.Fragment>
    )
}

render(<App />, document.getElementById('root'));