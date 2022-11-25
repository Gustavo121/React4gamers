import React from "react";
import CanvasProvider from "../contexts/canvas";
import Board from "./Board";
import Debugger from "./Debugger";

function Game () {
    return (
        <CanvasProvider>
          <Debugger />
          <Board />
        </CanvasProvider>
    )
}

export default Game;