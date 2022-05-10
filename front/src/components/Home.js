import React from 'react';

import './Home.css'

const Home = () => {

    const OnClickButton = () => {
        alert("버튼을 눌렀습니다");
    }

    return (
        <div className='homeForm'>
            <div className='background_top'>
                <div className='background_top_content'>
                    <h2>홈페이지에 오신것을 환영합니다.</h2>
                    <button onClick={OnClickButton}>learn more</button>
                </div>
            </div>
            <div className='background_middle'>
                <div className='background_middle_content'>
                    <h2>형민이는 바보라는 사실 알고 계셨나요?</h2>
                    <button onClick={OnClickButton}>learn more</button>
                </div>
            </div>
            <div className='background_bot'>
                <div className='background_bot_content'>
                    <h2>심지어 동생은 형진이입니다.</h2>
                    <button onClick={OnClickButton}>learn more</button>
                </div>
            </div>
        </div>
    );
};

export default Home;