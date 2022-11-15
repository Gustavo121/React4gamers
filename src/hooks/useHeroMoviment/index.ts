import useEventListener from '@use-it/event-listener';
import React from 'react';
import { EDirection } from '../../settings/constants';

function useHeroMoviment(initialPosition) {
  const [positionState, updatePositionState] = React.useState(initialPosition);
  const [direction, updateDirectionState] = React.useState(EDirection.RIGHT);

  useEventListener("keydown", (event: { key: any }) => {
    if (event.key === EDirection.LEFT) {
      updatePositionState({ x: positionState.x - 1, y: positionState.y });
      updateDirectionState(EDirection.LEFT);
    } else if (event.key === EDirection.RIGHT) {
      updatePositionState({ x: positionState.x + 1, y: positionState.y });
      updateDirectionState(EDirection.RIGHT);
    } else if (event.key === EDirection.DOWN) {
      updatePositionState({ x: positionState.x, y: positionState.y - 1 });
    } else if (event.key === EDirection.UP) {
      updatePositionState({ x: positionState.x, y: positionState.y + 1 });
    }
  });

  return {
    position: positionState,
    direction: direction,
  }
}

export default useHeroMoviment;