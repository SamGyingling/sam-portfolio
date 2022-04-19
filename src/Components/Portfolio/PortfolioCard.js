import React from 'react';
import styled from 'styled-components';
import { secondaryBgColor } from '../Style';

function PortfolioCard(props) {
  const { title, body, image } = props;
  return (
    <>
      <StdCard>
        <li>
          <h3>{title}</h3>
          <p>{body}</p>
        </li>
        <li>
          <img src={image} alt={title} />
        </li>
      </StdCard>
    </>
  );
}
const StdCard = styled.ul`
  width: 100%;
  position: relative;
  height: 100%;
  li {
    width: 50%;
    margin: 20px 0px 0px 10px;
    border-radius: 12px;
    overflow: hidden;
    flex-grow: 1;
  }
  li:nth-child(2) {
    width: 500px;
    flex-grow: 2;
    left: 100px;
    position: absolute;
    border: 1px solid ${secondaryBgColor};
    background-color: #DCDCDC;
  }
  img {
    width: 90%;
    margin: 10px;
  }
`;

export default PortfolioCard;
