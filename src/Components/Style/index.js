import styled from 'styled-components';
import { Link } from 'react-router-dom';
export const primBgColor = '#fff'
export const primIconColor = '#8d8d8d'
export const secondaryBgColor = '#f4f4f4'
export const hoverBorder = '#141414'

export const StdPageEl = styled.li`
  padding: 64px 0px;
  list-style: none;
  width: 100%;
  border-bottom: 1px solid ${primIconColor} ;
`;

export const StdLink = styled(Link)`
  text-decoration: none;
  :visited{
    color:inherit;
  }
`