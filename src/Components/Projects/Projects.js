import React from 'react';
import styled from 'styled-components';
import {
  ButtondPrime,
  darkPrimary,
  myWhite,
  primary,
  secondary,
} from '../Style';
import { CardContent } from './CardContent';
import ProjectCard from './ProjectCard';

function Projects() {
  return (
    <StdPortfolio>
      <section>
        <h2>My Projects</h2>
        <p>
          Actions speak louder than words.
        </p>{' '}
        {/* <StdLink to={'/my-work'}>
          All projects{' '}
          <FontAwesomeIcon icon={faShare} style={{ marginLeft: '6px' }} />{' '}
        </StdLink> */}
      </section>
      <ul>
        {CardContent.map((item) => (
          <ProjectCard
            title={item.title}
            desc={item.desc}
            webLink={item.webLink}
          />
        ))}
      </ul>
      <section>
        <h3>Interested in collaborating or investing?</h3>
        <p>I am always open to discuss work or partnership opportunities.</p>
        <ButtondPrime className="btn">Start a Conversation</ButtondPrime>
      </section>
    </StdPortfolio>
  );
}

const StdPortfolio = styled.section`
  > section:first-child {
    width: 120%;
    color: ${myWhite};
    background-color: ${primary};
    margin-left: -10%;
    margin-top: -4rem;
    height: 150px;
    border-radius: 12px;
    text-align: center;
    padding: 64px 0px;
    > p {
      color: ${myWhite};
      margin: 32px 0px;
    }
  }
  > section:nth-child(3) {
    text-align: center;
    margin-top: 64px;
    > h3,
    > p {
      margin-bottom: 12px;
    }
    .btn {
      margin-top: 2rem;
    }
  }
  > ul {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    list-style: none;
    justify-content: space-evenly;
    margin-top: -4rem;
  }
`;
export default Projects;
