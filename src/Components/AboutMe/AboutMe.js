import { faShare } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { StdLink } from '../Style';

function AboutMe() {
  return (
    <StdSection>
      <ul>
        <li>
          <h2>About Me</h2>
        </li>
        <li>
          <p>
            Results-focused Full-Stack developer with strength in React.js and
            Node.js. Proactive leader with strengths in communication and
            collaboration. Works great with team members under Agile and Scrum
            frameworks. Adept at managing concurrent objectives to promote
            efficiency and influence positive outcomes.
          </p>
        </li>
        <li>
          <StdLink to={'contact'}>
            {' '}
            More about me{' '}
            <FontAwesomeIcon
              icon={faShare}
              style={{ marginLeft: '6px' }}
            />{' '}
          </StdLink>
        </li>
      </ul>
      <ul>
        <li>
          <h3>Past experience</h3>
        </li>
        <li>
          <h4>Junior Full-Stack Developer</h4>
          <p>ProEats, Dec 2021 - Present</p>
        </li>
        <li>
          <h4>Junior Front-End Developer</h4>
          <p>Belle Jewellery</p>
        </li>
      </ul>
    </StdSection>
  );
}

const StdSection = styled.section`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  > ul {
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    > li {
      margin-bottom: 12px;
    }
  }
  ul:first-child {
    max-width: 450px;
  }
  
`;

export default AboutMe;
