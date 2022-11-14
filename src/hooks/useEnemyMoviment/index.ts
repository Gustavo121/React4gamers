import useInterval from '@use-it/interval';
import React from 'react';
import { EDirection } from '../../settings/constants';

function useEnemyMoviment(initialPosition) {
  const [positionState, updatePositionState] = React.useState(initialPosition);
  const [direction, updateDirectionState] = React.useState(EDirection.RIGHT);

  useInterval(function move() {
    var random = Math.floor(Math.random() * 4);
    var directionArray = Object.values(EDirection);
    const randomDirection = directionArray [random];

    if (randomDirection === EDirection.LEFT) {
      updatePositionState({ x: positionState.x - 1, y: positionState.y });
      updateDirectionState(EDirection.LEFT);
    } else if (randomDirection === EDirection.RIGHT) {
      updatePositionState({ x: positionState.x + 1, y: positionState.y });
      updateDirectionState(EDirection.RIGHT);
    } else if (randomDirection === EDirection.DOWN) {
      updatePositionState({ x: positionState.x, y: positionState.y - 1 });
    } else if (randomDirection === EDirection.UP) {
      updatePositionState({ x: positionState.x, y: positionState.y + 1 });
    }
  }, 2000);

  return {
    position: positionState,
    direction: direction,
  }
}

export default useEnemyMoviment;
