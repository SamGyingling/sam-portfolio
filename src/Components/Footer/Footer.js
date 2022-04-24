import React from 'react';
import styled from 'styled-components';
import { borderPrime, myWhite, primary } from '../Style';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { faGamepad } from '@fortawesome/free-solid-svg-icons';
function Footer() {
  return (
    <StdFooter className="flex-col">
      <section className="flex-row">
        <a
          className="flex-cen"
          href={'https://github.com/SamGyingling'}
          target="_blank"
          rel="noreferrer"
        >
          <FontAwesomeIcon className="icon" icon={faGithub} size="2x" />
        </a>
        <a
          className="flex-cen"
          href={'https://www.linkedin.com/in/zexi-deng/'}
          target="_blank"
          rel="noreferrer"
        >
          <FontAwesomeIcon className="icon" icon={faLinkedinIn} size="2x" />
        </a>
        <a
          className="flex-cen"
          href={'https://sharemygame.com/profile'}
          target="_blank"
          rel="noreferrer"
        >
          <FontAwesomeIcon className="icon" icon={faGamepad} size="2x" />
        </a>
      </section>
      <h3>Living, learning, and leveling up one day at a time.</h3>
      <p>
        © 2022 Sam Deng. <br />
        Built with React.
      </p>
    </StdFooter>
  );
}
const StdFooter = styled.footer`
  height: 300px;
  width: 110%;
  align-self: center;
  align-items: center;
  justify-content: space-evenly;
  background-color: ${primary};
  color: ${myWhite};
  padding: 2rem;
  border-radius: ${borderPrime};
  margin-top: -1px;
  > section {
    justify-content: space-evenly;
    width: 300px;
    > a {
      background-color: ${myWhite};
      width: 3rem;
      border-radius: 50px;
      aspect-ratio: 1/1;
      .icon {
        color: ${primary};
      }
    }
  }
  > p {
    color: ${myWhite};
    text-align: center;
    font-size: 0.75rem;
  }
`;
export default Footer;
