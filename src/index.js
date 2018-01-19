import React from 'react';
import ReactDom from 'react-dom';

import Week from './components/Week';
require('../style/sass/style.scss');

const App = () => {
    return (
        <div className = 'app-con'>
            <Week></Week>
            <Week></Week>
            <Week></Week>
            <Week></Week>
        </div>
    );
};

ReactDom.render(<App></App>, document.querySelector('.container-fluid'));