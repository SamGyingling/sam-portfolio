import React from 'react';
import styled from 'styled-components';

function Proeats() {
  return (
    <StdSection>
      <iframe title='proeats' src="https://www.proeats.com.au/" width='100%' height="100%">
        <p>Your browser does not support iframes.</p>
      </iframe>
    </StdSection>
  );
}
const StdSection = styled.div`
  resize: both;
`
export default Proeats;
