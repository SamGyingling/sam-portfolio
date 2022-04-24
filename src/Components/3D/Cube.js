import React, { useRef, useState } from 'react';
import { Canvas, useFrame} from '@react-three/fiber';
import { lightPrimry, primary } from '../Style';

function Wall(props) {
    const ref = useRef()
    // Hold state for hovered and clicked events
    const [ishovered, setHover] = useState(false)
    const [isclicked, setClick] = useState(false)
    // Subscribe this component to the render-loop, rotate the mesh every frame
    // useFrame((state, delta) => (ref.current.rotation.x += 0.01))
    // Return the view, these are regular Threejs elements expressed in JSX
    return (
      <mesh
        {...props}
        ref={ref}
        scale={isclicked ? 1.5 : 1}
        onClick={(event) => setClick(!isclicked)}
        onPointerOver={(event) => setHover(true)}
        onPointerOut={(event) => setHover(false)}>
        <boxGeometry {...props}/>
        <meshStandardMaterial color={ lightPrimry} />
      </mesh>
    );
}

export default Wall;
