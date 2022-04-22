import React from 'react';
import Proeats from '../Components/Proeats/Proeats';
import { StdPageEl } from '../Components/Style';

function Portfolio() {
  return (
    <>
      <StdPageEl>
        <h2>My Projets</h2>
      </StdPageEl>
      <StdPageEl>
        <Proeats />
      </StdPageEl>
    </>
  );
}

export default Portfolio;
