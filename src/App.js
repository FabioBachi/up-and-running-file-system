import React from 'react';
import { Files, Header, Tags } from './components';
import './styles/App.scss';

const App = () => (
    <div className="App">
        <Header />
        <div className="wrapper">
            <div className="limiter">
                <Tags />
                <Files />
            </div>
        </div>
    </div>
);

export default App;
