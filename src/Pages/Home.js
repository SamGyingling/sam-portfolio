import React from 'react';
import Header from '../Components/Header/Header'
import { StdPageEl } from '../Components/Style';
import AboutMe from '../Components/AboutMe/AboutMe';
import Portfolio from '../Components/Portfolio/Portfolio';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Home() {
  return (
    <>
      <StdPageEl>
        <Header />
      </StdPageEl>
      <StdPageEl>
        <AboutMe />
      </StdPageEl>
      <StdPageEl>
        <Portfolio />
      </StdPageEl>
    </>
  );
}

export default Home;
