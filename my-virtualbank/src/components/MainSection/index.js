import React, { useState } from 'react';
import {
    MainContainer,
    MainBg, VideoBg, MainContent, MainH1, MainP, MainBtnWrapper, ArrowFoard, ArrowRight
} from './MainElements';
import {Button} from '../ButtonElement';
import Video from '../videos/video.mp4';



const MainSection = () => {

    const [hover, setHover] = useState(false)
    const onHover = () => {
        setHover(!hover)
    }
    return (
        <MainContainer>
            <MainBg>
                <VideoBg playsInline autoPlay loop muted src={Video} type='video/mp4' />
            </MainBg>
            <MainContent>
                <MainH1>Your Virtual Bank </MainH1>
                <MainP>
                    Sign Up for a new account today.
                </MainP>
                <MainBtnWrapper>
                    <Button to='signup' 
                    onMouseEnter={onHover} 
                    onMouseLeave={onHover}
                    primary ='true'
                    dark='true'
                    >
                        Get started {hover ? <ArrowFoard /> : <ArrowRight />}
                    </Button >
                </MainBtnWrapper>
            </MainContent>
        </MainContainer>

    );
};

export default MainSection;
