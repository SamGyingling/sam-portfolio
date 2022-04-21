import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome } from '@fortawesome/free-solid-svg-icons';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { faBriefcase } from '@fortawesome/free-solid-svg-icons';
import { faComment } from '@fortawesome/free-solid-svg-icons';
import { NavLink } from 'react-router-dom';
import { primary, darkPrimary, lightPrimry, myWhite } from '../Style';

function Nav() {
  return (
    <StdNav>
      <NavLink className="link" to={'/'}>
        <FontAwesomeIcon className="icon" icon={faHome} size="2x" />
      </NavLink>
      <NavLink className="link" to={'about'}>
        <FontAwesomeIcon className="icon" icon={faUser} size="2x" />
      </NavLink>
      <NavLink className="link" to={'my-work'}>
        <FontAwesomeIcon className="icon" icon={faBriefcase} size="2x" />
      </NavLink>
      <NavLink className="link" to={'contact'}>
        <FontAwesomeIcon className="icon" icon={faComment} size="2x" />
      </NavLink>
    </StdNav>
  );
}

const StdNav = styled.section`
  margin: auto;
  
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  list-style: none;
  max-width: 500px;
  position: sticky;
  bottom:20px;
  background-color: ${myWhite};
  border-radius: 12px;
  padding: 11px 0px 11px 12px;
  border: 1px solid ${primary};
  box-shadow: 0 4px 16px 0 rgb(0 0 0 / 2%);
  z-index: 10;
  .link {
    width: 48px;
    aspect-ratio: 1/1;
    margin-right: 12px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 12px;
    background-color: ${primary};
    .icon {
      color: ${myWhite};
      background-color: ${primary};
    }
    :hover{
      background-color: ${myWhite};
      .icon {
      color: ${primary};
      background-color: ${myWhite};
    }
    }
   
  }
`;

export default Nav;
