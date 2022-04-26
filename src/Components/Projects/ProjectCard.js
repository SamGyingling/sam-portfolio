import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import {
  borderPrime,
  ButtondPrime,
  darkPrimary,
  lightPrimry,
  myWhite,
  secondary,
  secondaryBgColor,
  StdA,
  StdATag,
  StdLink,
} from '../Style';

function ProjectCard(props) {
  const { title, desc, webLink } = props;
  return (
    <>
      <StdCard className='flex-col'>
        <section className='flex-col'>
          <span>{title}</span>
          <p>{desc}</p>
          <StdATag href={webLink} target={'_blank'}>Learn More</StdATag>
          {/* <StdA href={webLink} target={'_blank'} rel="noreferrer"><span>Learn More</span></StdA> */}
        </section>
      </StdCard>
    </>
  );
}
const StdCard = styled.li`
  box-shadow: 0 5px 5px 0 rgb(233 240 243 / 50%), 0 0 0 1px #e6ecf8;
  background-color: ${myWhite};
  width: 45%;
  border-radius: ${borderPrime};
  overflow: hidden;
  aspect-ratio: 9/6;
  border: 1px solid ${secondary};
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;
  @media (max-width: 800px) {
      width: 60%;
    }
  @media (max-width: 550px) {
      width: 90%;
    }
  :hover {
    border: 1px solid ${darkPrimary};
  }
  > section {
    text-align: center;
    padding: 20px;
    align-items: center;
    justify-content: space-evenly;
    height: 70%;
  }
`;

export default ProjectCard;
