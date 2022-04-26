import React, { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import { smoothstep } from 'three/src/math/MathUtils';
import Scene from '../Components/3D/Scene';
import Footer from '../Components/Footer/Footer';
import Nav from '../Components/Nav/Nav';
import { primary } from '../Components/Style';

function Layout() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
  }, [pathname]);
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
