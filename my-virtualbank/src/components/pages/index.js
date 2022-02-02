import React, { useState } from 'react';
import InfoSection from '../InfoSection';
import MainSection from '../MainSection';
import NavBar from '../NavBar';
import Sidebar from '../Sidebar';
import { homeObjOne } from '../InfoSection/Data';
import { homeObjTwo } from '../InfoSection/Data';
import { homeObjThree } from '../InfoSection/Data';
import { homeObjFour } from '../InfoSection/Data';
import Services from '../Services';


const Home = () => {

    const [isOpen, setIsOpen] = useState(false);

    //function to update the state and reverse it on menu
    const toggle = () => {
        setIsOpen(!isOpen);
    };
    return (
        <>
            <Sidebar isOpen={isOpen} toggle={toggle} />
            <NavBar toggle={toggle} />
            <MainSection />
            <InfoSection {...homeObjOne} />
            <InfoSection {...homeObjTwo} />
            <InfoSection {...homeObjThree} />
            <Services />
            <InfoSection {...homeObjFour} />
            

        </>
    );
};

export default Home;
