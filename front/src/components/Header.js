import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import './Header.css';

const Header = () => {
    const [userId, setUserId] = useState();
    const [logStatus, SetLogStatus] = useState();
    const navigate = useNavigate();

    const getUser = () => {
        const user = localStorage.getItem("userId");
        user ? setUserId(user) : setUserId("client");
        user ? SetLogStatus("logout") : SetLogStatus("login");
    };

    const onHandleLog = () => {
        if (logStatus === "logout") {
            localStorage.clear();
            navigate('/')
        }
    }

    useEffect(() => {
        getUser();
    }, []);

    return (
        <div className='headerForm'>
            <h1 className='title_L'>project</h1>
            <div className='title_R'>
                <div className='title_R_id'>{userId}</div>
                <div className='title_R_button' onClick={onHandleLog}>{logStatus}</div>
            </div>
        </div>
    );
};

export default Header;
