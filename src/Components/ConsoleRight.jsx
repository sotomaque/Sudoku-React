import React from "react";

const ConsoleRight = ({ gamesWon, hintsUsed, showCandidates, candidates }) => {



  return (
    <>
      <br />
      <article className="message is-warning">
        <div className="message-header">
          <p>Games Won</p>
        </div>

        <div className="message-body">{gamesWon}</div>
      </article>

      <article className="message is-warning">
        <div className="message-header">
          <p>Hints Used</p>
        </div>

        <div className="message-body">{hintsUsed}</div>
      </article>

      {
        showCandidates && (
          <article className="message is-warning">
            <div className="message-header">
              <p>Possible Values</p>
            </div>
            <div className="message-body">{candidates.toString()}</div>
          </article>
        )
      }
    </>
  );
};

export default ConsoleRight;
