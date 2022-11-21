import React from "react";
import { ECanvas } from "../../../contexts/canvas/helpers";
import { TILE_SIZE } from "../../../settings/constants";

interface IProps {
  position: { x: number, y: number };
  text: number;
}

function Tile(props: IProps) {

  function getTileColor() {
    switch(props.text) {
        case ECanvas.FLOOR:
          return 'darkgrey';
        
        case ECanvas.WALL:
          return 'yellow';

        case ECanvas.HERO:
          return 'magenta';
    }
  }

  const color = getTileColor()

  return ( 
    <div style={{
    position: 'absolute',
    left: TILE_SIZE * props.position.x,
    top: TILE_SIZE * props.position.y,
    width: TILE_SIZE, 
    height: TILE_SIZE, 
    border: `2px solid ${color}`,
    color: color,
    fontSize: 32,
    }}>
      {props.text}
    </div>
  )
}

export default Tile;
