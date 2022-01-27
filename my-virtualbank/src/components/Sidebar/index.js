import React from 'react';
import {SidebarContainer, 
    Icon, CloseIcon, SidebarLink, SidebarMenu, SidebarRoute, SideBtnWrap,SidebarWrapper} from './SidebarElements'

const Sidebar = ({isOpen, toggle}) => {
  return (
      //when click in any part of the sidebar
      <SidebarContainer isOpen={isOpen} onClick={toggle}> 
          <Icon onClick={toggle}>
              <CloseIcon/>
          </Icon>
          <SidebarWrapper>
              <SidebarMenu>
                  <SidebarLink to='about' onClick={toggle}>About</SidebarLink>
                  <SidebarLink to='discover' onClick={toggle}>Discover</SidebarLink>
                  <SidebarLink to='services' onClick={toggle}>Services</SidebarLink>
                  <SidebarLink to='signup' onClick={toggle}>Sign Up</SidebarLink>
              </SidebarMenu>
              <SideBtnWrap>
                  <SidebarRoute to='/signin'>Sing In</SidebarRoute>
              </SideBtnWrap>
          </SidebarWrapper>
      </SidebarContainer>
  )
};

export default Sidebar;
