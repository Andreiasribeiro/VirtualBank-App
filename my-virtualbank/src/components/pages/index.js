import React, {useState} from 'react';
import NavBar from '../NavBar';
import Sidebar from '../Sidebar';

const Home = () => {
  
    const[isOpen, setIsOpen] = useState(false)

    //update the state and reverse it
    const toggle = ()=>{
        setIsOpen(!isOpen)
    }
  return (
      <>
      <Sidebar/>
      <NavBar/>
      </>
  );
};

export default Home;
