import React from "react";

const Tools = ({ solve, solveEnabled, stop, newGame, deleteGame, hint, hintDisabled, solveSingleSquare }) => {
  return (
    <div className="tools">
      <div className="buttons">
        <button className="button is-link" onClick={solve} disabled={!solveEnabled}> Solve Whole Board </button>
        <button className="button is-warning" onClick={solveSingleSquare} disabled={!solveEnabled}> Solve Single Square </button>

        <button className="button is-danger" onClick={stop} > Stop </button>
        <button className="button is-success" onClick={newGame}> New Game </button>
        <button className="button is-info" onClick={hint} disabled={hintDisabled}> Hint </button>
        <button className="button is-warning" onClick={deleteGame}> Start Over </button>
        
      </div>
    </div>
  );
};

export default Tools;