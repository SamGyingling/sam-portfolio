import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { SkillContent } from './SkillContent';
import styled from 'styled-components';
import { borderPrime, myWhite, primary } from '../Style';

function Skills() {
  return (
    <StdUl>
      {/* {SkillContent.map((item) => (
        <li key={item.id}>
          <FontAwesomeIcon icon={item.icon} size="2x" />
          <p>{item.title}</p>
        </li>
      ))} */}
      <li>
        <p>Javascript/ES6</p>
      </li>
      <li>
        <p>CSS</p>
      </li>
      <li>
        <p>HTML5</p>
      </li>
      <li>
        <p>Typescript</p>
      </li>
      <li>
        <p>Typescript</p>
      </li>
      <li>
        <p>React</p>
      </li>
      <li>
        <p>Redux</p>
      </li>
      <li>
        <p>Redux-Toolkit</p>
      </li>
      <li>
        <p>MUI</p>
      </li>
      <li>
        <p>Flexbox</p>
      </li>
      <li>
        <p>Npm</p>
      </li>
      <li>
        <p>Styled-Component</p>
      </li>
      <li>
        <p>Font Awesome</p>
      </li>
      <li>
        <p>Node.js</p>
      </li>
      <li>
        <p>Express.js</p>
      </li>
      <li>
        <p>JWT Token</p>
      </li>
      <li>
        <p>MongoDB</p>
      </li>
      <li>
        <p>Mongoose</p>
      </li>
      <li>
        <p>Restful API</p>
      </li>
      <li>
        <p> JSON</p>
      </li>
      <li>
        <p>PostMan</p>
      </li>
      <li>
        <p>Jest</p>
      </li>
      <li>
        <p>Enzyme</p>
      </li>
      <li>
        <p>Git</p>
      </li>
      <li>
        <p>Bitbucket</p>
      </li>
      <li>
        <p>GitHub</p>
      </li>
      <li>
        <p>Visual Studio</p>
      </li>
      <li>
        <p>VS Code</p>
      </li>
      <li>
        <p>Agile</p>
      </li>
      <li>
        <p>Scrum</p>
      </li>
      <li>
        <p>Responsive Web Design</p>
      </li>
    </StdUl>
  );
}
const StdUl = styled.ul`
  width: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
 
  > li {
    width: 30%;
    margin-bottom: 1rem;
    text-align: center;
    > p {
    
    }
  }
`;
export default Skills;
