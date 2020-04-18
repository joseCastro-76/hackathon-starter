import React from 'react';
import { render } from 'react-dom';
import './css/custom.scss';

// import Button from '@material-ui/core/Button';

import FullWidthTabs from './fullWidthTabs';

function App() {
    return (
        <FullWidthTabs />
    )
}

render(<App />, document.getElementById('root'));