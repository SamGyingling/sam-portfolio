import React from 'react';
import styled from 'styled-components';
import Me from '../Components/Me/Me';
import { StdPageEl } from '../Components/Style';

function ContactPage() {
  return (
    <StdSection>
      <StdPageEl>
        <img src="62550592.png" alt="me" />
      </StdPageEl>
      <StdPageEl>
        <h1>
          Want to discuss a startup collaboration?
        </h1>
      </StdPageEl>
    </StdSection>
  );
}
const StdSection = styled.section`
  > li {
    display: flex;
    flex-direction: column;
    > img {
      margin: auto;
      align-items: center;
      width: 20%;
    }
  }
`;

export default ContactPage;
