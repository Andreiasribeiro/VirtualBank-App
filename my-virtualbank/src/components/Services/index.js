import React from 'react';
import Icon1 from '../images/svg1.svg';
import Icon2 from '../images/svg2.svg';
import Icon3 from '../images/svg3.svg';
import {ServicesContainer,ServicesH1,
  ServicesWrapper,ServicesCard, ServicesIcon, 
  ServicesH2, ServicesP} from './ServicesElements';

const Services = () => {
  return (
    <>
      <ServicesContainer id='services'>
        <ServicesH1>Our Services</ServicesH1>
        <ServicesWrapper>
          <ServicesCard>
            <ServicesIcon src={Icon1} />
            <ServicesH2> Reduce your expenses</ServicesH2>
            <ServicesP>Whether you’re opening your first bank account or switching from another financial instituti</ServicesP>
          </ServicesCard>
          <ServicesCard>
            <ServicesIcon src={Icon2} />
            <ServicesH2> Reduce your expenses</ServicesH2>
            <ServicesP>Whether you’re opening your first bank account or switching from another financial instituti</ServicesP>
          </ServicesCard>
          <ServicesCard>
            <ServicesIcon src={Icon3} />
            <ServicesH2> Reduce your expenses</ServicesH2>
            <ServicesP>Whether you’re opening your first bank account or switching from another financial instituti</ServicesP>
          </ServicesCard>
        </ServicesWrapper>
      </ServicesContainer>
    </>
  )
};

export default Services;
