import React from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import Wall from './Cube';
import styled from 'styled-components';
import { OrbitControls } from '@react-three/drei';
import { primary } from '../Style';

function Scene() {
  return (
    <Wrapper>
      <Canvas className="canvas">
        <ambientLight />
        <pointLight position={[0, 10, 0]} />
        <Wall position={[0,-2, 0]} args={[ 4, 0.2, 4]} />
        <Wall position={[-2, 0, 0]} args={[0.2, 4, 4]}  />
        <Wall position={[2, 0, 0]} args={[0.2, 4, 4]} />
        <Wall position={[0,2, 0]}   args={[ 4, 0.2, 4]}/>
      </Canvas>
    </Wrapper>
  );
}
const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  border: 1px solid ${primary};
  position: absolute;
  z-index: -1;
`;
export default Scene;
