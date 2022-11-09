import React from 'react';
import { HEAD_OFFSET, TILE_SIZE } from '../../settings/constants';

import './index.css'

const initialPosition = {
  x: 15,
  y: 15
};

const Hero = () => {
  //utilizando destructuring
  const [positionState, updatePositionState] = React.useState(initialPosition);
  
  /*
  const heroPositionState = React.useState(initialPosition);
  const positionState = heroPositionState[0];
  const updatePositionState = heroPositionState[1];
  */

  setTimeout(() => {
    const newPosition = { x: 16, y: 15 };
    updatePositionState(newPosition);
  }, 2000)

  return (
    <div
      style={{
          position: 'absolute',
          bottom: TILE_SIZE * positionState.y,
          left: TILE_SIZE * positionState.x,
          width: TILE_SIZE,
          height: TILE_SIZE + HEAD_OFFSET,
          backgroundImage: "url(./assets/HERO.png)",
          backgroundRepeat: 'no-repeat',
          backgroundPosition: `0px -${TILE_SIZE - HEAD_OFFSET}px`,
          animation: 'hero-animation 1s steps(4) infinite'
        }}
    />
  )
}

export default Hero;