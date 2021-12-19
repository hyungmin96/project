import React from 'react';

import Home from '../components/Home'
import Header from '../components/Header'
import './Homepage.css'

const Homepage = () => {

    return (
        <div>
            <Header />
            <div>
                <Home />
            </div>
        </div>
    );
};

export default Homepage;