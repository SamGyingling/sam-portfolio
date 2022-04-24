import styled from 'styled-components';
import { Link } from 'react-router-dom';
export const myWhite = '#fff';
export const darkPrimary = '#3812AD';
export const primary = '#7510F7';
export const lightPrimry = '#A98DFF';
export const secondary = '#D4C6FF';
export const myBlack = '#141414';

export const borderPrime = '12px';

export const StdPageEl = styled.li`
  padding: 64px 0px;
  list-style: none;
  width: 100%;
  border-bottom: 1px solid ${darkPrimary};
`;

export const StdLink = styled(Link)`
  text-decoration: none;
  align-self: center;
  :visited {
    color: inherit;
  }
`;
export const StdA = styled.a`
  text-decoration: none;
  align-self: center;
  >span{
    padding: 5px;
    color: ${darkPrimary};
    border: 1px solid ${primary};
    border-radius: 20px;
  }
  :visited {
    color: ${lightPrimry};
  }
`;

export const ButtondPrime = styled.button`
  background-color: transparent;
  border: 2px solid ${primary};
  color: ${primary};
  border-radius: 290486px;
  padding: 1.25em 2em;
  font-weight: 400;
  border-width: 2px;
  cursor: pointer;
  :hover{
    color: ${myWhite};
    background-color: ${primary};
  }
`;

export const StdATag = styled.a`
  background-color: transparent;
  color: ${myWhite};
  background-color: ${primary};
  border-radius: 290486px;
  padding: .25rem .5rem;
  border-width: 2px;
  text-decoration: none;
  font-size: .75rem;
  border: 1px solid ${primary};
  cursor: pointer;
  :hover{
    color: ${primary};
    background-color: ${myWhite};
    
  }
`;

