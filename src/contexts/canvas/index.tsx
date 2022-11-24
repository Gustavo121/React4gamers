import React from "react";
import { canvas } from "./helpers";

export const CanvasContext = React.createContext({
  canvas: [],
  updadeCanvas: () => null
});

function CanvasProvider() {
  const [canvasState, updateCanvasState] = React.useState({
   canvas: canvas,
   updateCanvas: () => {
    console.log('updateCanvas');
   }   
  }); 

  return (
    <CanvasContext.Provider value={canvasState}>
        {props.children}
    </CanvasContext.Provider>
  )
}