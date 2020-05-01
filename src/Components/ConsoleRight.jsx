import React from "react";

const ConsoleRight = ({ consoleMessage, numberSolved, showFound }) => {
  return (
    <div>
      <br />
      <article className="message is-warning">
        <div className="message-header">
          <p>Analysis</p>
        </div>

        <div className="message-body">{consoleMessage}</div>

        <div className="message-body">
          <a href="#" className="button is-small is-link" onClick={showFound}>
            Show What You Have Found{" "}
          </a>
        </div>
      </article>

      <br />

      <article className="message is-warning">
        <div className="message-header">
          <p>Number Solved</p>
        </div>

        <div className="message-body">{numberSolved}</div>
      </article>
    </div>
  );
};

export default ConsoleRight;
