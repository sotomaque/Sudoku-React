import React from "react";

const Tools = ({ solve, stop, newGame, deleteGame, hint, hintDisabled, undo }) => {
  return (
    <div className="tools">
      <div className="buttons">
        <button className="button is-link" onClick={solve} >Solve</button>
        <button className="button is-warning" onClick={stop} >Stop</button>
        <button className="button is-success" onClick={newGame} >New Game</button>
        <button className="button is-danger" onClick={deleteGame} >Delete</button>
        <button className="button is-info" onClick={hint} disabled={hintDisabled}>Hint</button>
        <button className="button is-warning" onClick={undo} >Undo</button>
      </div>
    </div>
  );
};

export default Tools;