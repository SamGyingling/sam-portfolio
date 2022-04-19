import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShare } from '@fortawesome/free-solid-svg-icons';
import { StdLink } from '../Style';

function Header() {
  return (
    <StdHeader>
      <img src="30013124-BB01-4A31-9B3A-73FDC0A25C0D_1_201_a.jpeg" alt="profile pic"></img>
      <section>
        <h1> Hello, I am Sam. A Full-Stack Developer.</h1>
        <p>
          I am a self-motivited software and web developer. I am happy to
          welcome you on my website :-)
        </p>
        <StdLink to={'contact'}>
          Contact me
          <FontAwesomeIcon icon={faShare} style={{ marginLeft: '6px' }} />{' '}
        </StdLink>
      </section>
    </StdHeader>
  );
}

const StdHeader = styled.header`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  > img {
    max-width: 200px;
    object-fit: cover;
    border-radius: 50%;
  }

  section {
    max-width: 370px;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    h1 {
      font-size: 36px;
      line-height: 1.278em;
      font-weight: 500;
    }
    p {
      margin-bottom: 24px;
    }
  }
`;
export default Header;
