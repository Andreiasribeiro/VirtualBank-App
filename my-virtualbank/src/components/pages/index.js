import React, {useState} from 'react';
import InfoSection from '../InfoSection';
import MainSection from '../MainSection';
import NavBar from '../NavBar';
import Sidebar from '../Sidebar';

const Home = () => {
  
    const[isOpen, setIsOpen] = useState(false);

    //function to update the state and reverse it
    const toggle = ()=>{
        setIsOpen(!isOpen);
    };
  return (
      <>
      <Sidebar isOpen={isOpen} toggle={toggle}/>
      <NavBar toggle={toggle}/>
      <MainSection/>
      <InfoSection/>
      </>
  );
};

export default Home;
