import useEventListener from '@use-it/event-listener';
import React from 'react';

function useEnemyMoviment(initialPosition) {
  const [positionState, updatePositionState] = React.useState(initialPosition);
  const [direction, updateDirectionState] = React.useState("RIGHT");

  useEventListener("keydown", (event: { key: any }) => {
    if (event.key === "ArrowLeft") {
      updatePositionState({ x: positionState.x - 1, y: positionState.y });
      updateDirectionState("LEFT");
    } else if (event.key === "ArrowRight") {
      updatePositionState({ x: positionState.x + 1, y: positionState.y });
      updateDirectionState("RIGHT");
    } else if (event.key === "ArrowDown") {
      updatePositionState({ x: positionState.x, y: positionState.y - 1 });
    } else if (event.key === "ArrowUp") {
      updatePositionState({ x: positionState.x, y: positionState.y + 1 });
    }
  });

  return {
    position: positionState,
    direction: direction,
  }
}

export default useEnemyMoviment;
