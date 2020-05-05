import React from "react";

const GameInfo = ({ gameId, gameDifficulty, complexity, numberOfEmptyCells, complexityLog }) => {
  const cName = (gameDifficulty === "hard") ? "danger"
      : (gameDifficulty === "easy") ? "success"
        : "warning";

  return (
    <>
        <br />
        <article className="panel is-white">
          <p className="panel-heading" style={{ display: 'flex', justifyContent: 'center'}}>Game Info</p>
          <p className="panel-subheading" style={{ display: 'flex', justifyContent: 'center'}}>Game ID: {gameId}</p>
          <br />
          <div className="difficulty" style={{ display: 'flex', justifyContent: 'center'}}>
            <button className={`button is-${cName}`} >
                {gameDifficulty} 
            </button>
          </div>

          <a className="panel-block">
            <span className="panel-icon">
              <i className="fas fa-book" aria-hidden="true"></i>
            </span>
            Empty Cells : {numberOfEmptyCells}
          </a>
          <a className="panel-block">
            <span className="panel-icon">
              <i className="fas fa-book" aria-hidden="true"></i>
            </span>
            Complexity : {complexity}
          </a>
          <a className="panel-block">
            <span className="panel-icon">
              <i className="fas fa-book" aria-hidden="true"></i>
            </span>
            complexityLog : {complexityLog}
          </a>
        </article>
        <br />
    </>
  );
};

export default GameInfo;
