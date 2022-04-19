import { faShare } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import styled from 'styled-components';
import { hoverBorder, primBgColor, secondaryBgColor, StdLink } from '../Style';
import { CardContent } from './CardContent';
import PortfolioCard from './PortfolioCard';

function Portfolio() {
  return (
    <StdPortfolio>
      <h2>Portfolio</h2>
      <section>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing.</p>{' '}
        <StdLink to={'/my-work'}>All projects  <FontAwesomeIcon icon={faShare} style={{ marginLeft: '6px' }} />{' '}</StdLink>
      </section>
      <ul>
        {CardContent.map((item) => (
          <li>
            <PortfolioCard
              title={item.title}
              body={item.body}
              image={item.image}
            />
          </li>
        ))}
      </ul>
    </StdPortfolio>
  );
}

const StdPortfolio = styled.section`
  h2,
  section {
    margin-bottom: 10px;
  }
  > section {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }
  > ul {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    list-style: none;
    justify-content: space-evenly;
    > li {
      box-shadow: 0 4px 16px 0 rgb(0 0 0 / 2%);
      background-color: ${primBgColor};
      width: 48%;
      border-radius: 12px;
      overflow: hidden;
      aspect-ratio: 9/6;
      margin: 10px 0px;
      border: 1px solid ${secondaryBgColor};
      :hover{
        border: 1px solid ${hoverBorder};
      }
    }
  }
`;
export default Portfolio;
