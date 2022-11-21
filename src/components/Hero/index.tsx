import React from 'react';
import useHeroMoviment from '../../hooks/useHeroMoviment';
import { EDirection, HEAD_OFFSET, TILE_SIZE } from '../../settings/constants';
import './index.css'

const initialPosition = {
  x: 15,
  y: 15
};

const Hero = () => {
  const { position, direction } = useHeroMoviment(initialPosition);

  return (
    <div
      style={{
          position: 'absolute',
          top: TILE_SIZE * position.y,
          left: TILE_SIZE * position.x,
          width: TILE_SIZE,
          height: TILE_SIZE + HEAD_OFFSET,
          backgroundImage: "url(./assets/HERO.png)",
          backgroundRepeat: 'no-repeat',
          backgroundPosition: `0px -${TILE_SIZE - HEAD_OFFSET}px`,
          animation: 'hero-animation 1s steps(4) infinite',
          transform: `scaleX(${direction === EDirection.RIGHT ? 1 : -1})`,
          zIndex: 1
        }}
    />
  )
}

export default Hero;