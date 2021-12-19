import React, {useState} from 'react';
import { useNavigate } from 'react-router-dom';

import './Login.css'

const Login = () => {
    const [id, setId] = useState();
    const [password, setPassword] = useState();
    const navigate = useNavigate();

    const onChangeId = e => {
        setId(e.target.value)
    }

    const onChangePwd = (e) => {
        setPassword(e.target.value)        
    }

    const onLog = () => {
        if(id !== '123' || password !=='123') {
            alert('ID & Pwd를 확인하세요');
            setId("");
            setPassword("");
        } else {
            alert('로그인 성공')
            navigate('/home')
        }
    }

    return (
        <div className='loginForm'>
            <input className='section_id' placeholder='ID' onChange={onChangeId} value={id || ""}/>
            <input className='section_pwd' placeholder='pwd' onChange={onChangePwd} value={password || ""} type="password"/>
            <button className='section_btn_login' onClick={onLog}>로그인</button>
        </div>
    );
};

export default Login;