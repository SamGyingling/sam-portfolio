import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShare } from '@fortawesome/free-solid-svg-icons';
import { ButtondPrime, StdLink } from '../Style';

function Header() {
  return (
    <StdHeader>
      <h1> Hello, I am Sam. A Full-Stack Developer.</h1>
      <img src="62550592.png" alt="profile pic"></img>
      <section>
        <p>
          I am self-motivited, and I love what I do. <br />I am happy to welcome
          you on my website :-)
        </p>
        <ButtondPrime className='btn'>
          Contact me
        </ButtondPrime>
      </section>
    </StdHeader>
  );
}

const StdHeader = styled.header`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  justify-content: center;
  > h1 {
    line-height: 1.278em;
    font-weight:800;
    margin: 24px 0px;
  }
  > img {
    max-width: 300px;
    object-fit: cover;
    border-radius: 50%;
    margin: 24px 0px;
  }
  section {
    max-width: 370px;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    p {
      text-align: center;
      margin: 24px 0px;
    }
    .btn{
      width: fit-content;
      align-self: center;
    }
  }
`;
export default Header;
