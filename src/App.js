import React from "react";
import 'bulma/css/bulma.css'

import Banner from './Components/Banner';
import Tools from './Components/Tools';
import Board from './Components/Board';

function App() {

  // tool props
  const solve = () => {
    console.log("solve")
  };
  const stop = () => {
    console.log("stop")
  };
  const newGame = () => {
    console.log("new game")
  }
  const deleteGame = () => {
    console.log("deleteGame")
  };
  const hint = () => {
    console.log("hint")
  };
  const undo = () => {
    console.log("undo")
  }

  // board props
  const handleChange = () => {
    console.log("handleChange")
  }
  const handleFocus = () => {
    console.log("handleFocus")
  }
  const cellValues = () => {
    console.log("cellValues")
  }
  const cellBackgroundColors = () => {
    console.log("cellBackgroundColors")
  }

  return (
    <>

      <section className="hero is-fullheight">
        <div className="container is-fluid">

          {/** BANNER **/}
          <Banner /> 

          {/** TOOLS **/}
          <div className="container">
            <Tools 
              solve={solve} 
              stop={stop} 
              newGame={newGame} 
              deleteGame={deleteGame} 
              hint={hint}
              undo={undo} 
            />
          </div>

          {/** BOARD **/}
          <div className="container">
            <div className="columns">
              <div className="column">
                <Board  
                  handleChange={handleChange}
                  handleFocus={handleFocus}
                  cellValues={cellValues}
                  cellBackgroundColors={cellBackgroundColors}
                />
              </div>
            </div>
          </div>
        
        </div>

        {/** FOOTER **/}
        <footer className="footer">
          <div className="content has-text-centered">
            <p>Sudoku game - Built with React 2020</p>
          </div>
        </footer>
      </section>

    </>
  );
}

export default App;
