import React from 'react';
import Header from '../components/Header';

import Login from '../components/Login';
import './Loginpage.css'

const LoginPage = () => {
    return (
        <div>
            <Header />
            <div className='loginForm'>
                <Login />
            </div>
        </div>
    );
};

export default LoginPage;
