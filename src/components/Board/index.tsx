import React from 'react';
import { GAME_SIZE } from '../../settings/constants';
import Chest from '../Chest';
import Demon from '../Demon';
import Hero from '../Hero';
import MiniDemon from '../MiniDemon';
import Trap from '../Trap';

const Board = () => {
  return (
    <div>
      <MiniDemon position={{ x: 5, y: 5}} />
      <MiniDemon position={{ x: 10, y: 10 }} />

      <Demon />
      <Hero />      
      <Chest />      
      <Trap />      
      <img src="./assets/tileset.gif" alt="" width={GAME_SIZE} height={GAME_SIZE} />
    </div>
  );
}

export default Board;