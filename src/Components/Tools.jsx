import React from "react";

const Tools = ({ solve, solveEnabled, newGame, loadGame, loadEnabled,
             startOver, markThisCell, showAlert, saveGame }) => {
  return (
    <div className="tools">
      <div className="buttons">
        <button className="button is-link" onClick={solve} disabled={!solveEnabled}> Hint </button>
        <button className="button is-success" onClick={newGame}> New Game </button>
        <button className="button is-danger" onClick={startOver}> Start Over </button>
        <button className="button is-primary" onClick={markThisCell}> Mark This Celll </button>
        <button className="button is-info" onClick={showAlert}> Select Difficulty </button>
        <button className="button is-success" onClick={saveGame}> Save Game </button>
        <button className="button is-warning" onClick={loadGame} disabled={!loadEnabled}> Load Game </button>
      </div>
    </div>
  );
};

export default Tools;