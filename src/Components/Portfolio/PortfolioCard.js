import React from 'react';
import styled from 'styled-components';
import {
  darkPrimary,
  lightPrimry,
  myWhite,
  secondary,
  secondaryBgColor,
  StdLink,
} from '../Style';

function PortfolioCard(props) {
  const { title, desc, webLink } = props;
  return (
    <>
      <StdCard>
        <section>
          <span>{title}</span>
          <p>{desc}</p>
          <StdLink to={''}> {webLink}</StdLink>
        </section>
      </StdCard>
    </>
  );
}
const StdCard = styled.li`
  box-shadow: 0 5px 5px 0 rgb(233 240 243 / 50%), 0 0 0 1px #e6ecf8;
  background-color: ${myWhite};
  width: 47%;
  border-radius: 12px;
  overflow: hidden;
  aspect-ratio: 9/6;
  border: 1px solid ${secondary};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  :hover {
    border: 1px solid ${darkPrimary};
  }
  > section {
    text-align: center;
    padding: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    height: 70%;
  }
`;

export default PortfolioCard;
