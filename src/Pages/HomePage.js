import React from 'react';
import Me from '../Components/Me/Me'
import { StdPageEl } from '../Components/Style';
import AboutMe from '../Components/AboutMe/AboutMe';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Projects from '../Components/Projects/Projects';

function HomePage() {
  return (
    <>
      <StdPageEl>
        <Me />
      </StdPageEl>
      <StdPageEl>
        <AboutMe />
      </StdPageEl>
      <StdPageEl>
        <Projects />
      </StdPageEl>
    </>
  );
}

export default HomePage;
