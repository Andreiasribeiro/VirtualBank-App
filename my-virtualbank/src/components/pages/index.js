import React, {useState} from 'react';
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
      </>
  );
};

export default Home;
