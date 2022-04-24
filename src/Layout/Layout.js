import React from 'react';
import { Outlet } from 'react-router-dom';
import styled from 'styled-components';
import Scene from '../Components/3D/Scene';
import Footer from '../Components/Footer/Footer';
import Nav from '../Components/Nav/Nav';
import { primary } from '../Components/Style';

function Layout() {
  return (
    <>
     <StdLayout>
      <Outlet />
      <Footer/>
      <Nav />
    </StdLayout>
    </>
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
