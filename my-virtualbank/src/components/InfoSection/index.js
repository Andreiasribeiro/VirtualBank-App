import React from 'react';
import {Button} from 'react-scroll';
import {
    InfoContainer, InfoRow, 
    InfoWrapper, Column1, 
    TextWrapper, TopLine, 
    Heading, SubTitle, 
    BtnWrapper,
    Column2,
    ImgWrap, Img} from './InfoElement';
  

const InfoSection = () => {
    return (
        <>
            <InfoContainer >
                <InfoWrapper>
                    <InfoRow>
                        <Column1>
                            <TextWrapper>
                                <TopLine>TopLine</TopLine>
                                <Heading>Heading</Heading>
                                <SubTitle>Subtitle</SubTitle>
                                <BtnWrapper>
                                    <Button to='home'/>
                                </BtnWrapper>
                            </TextWrapper>
                        </Column1>
                        <Column2>
                        <ImgWrap>
                        <Img/>
                        </ImgWrap>
                        </Column2>
                    </InfoRow>
                </InfoWrapper>
            </InfoContainer>
        </>
    )
};

export default InfoSection;
