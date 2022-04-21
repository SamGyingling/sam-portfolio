import React from 'react';
import { Outlet } from 'react-router-dom';
import styled from 'styled-components';
import Nav from '../Components/Nav/Nav';

function Layout() {
  return (
    <StdLayout>
      <Outlet />
      <Nav />
    </StdLayout>
  );
}
const StdLayout = styled.section`
  max-width: 800px; 
  width: 100%;
  margin: auto;
  display: flex;
  flex-direction: column;
`;
export default Layout;
