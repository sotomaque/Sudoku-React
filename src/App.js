import React from "react";
import 'bulma/css/bulma.css'

import Banner from './Components/Banner';
import Tools from './Components/Tools';
import Board from './Components/Board';

import GameInfo from "./Components/GameInfo";
import ConsoleRight from './Components/ConsoleRight';

import getFirstValue from './Controls/NewGame';
import { convertIdToIndex, getCubeIndex, getAllCellsInfo, candidateValuesById } from './Controls/NewEngine';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Settings from "./Components/Settings";

function App() {

    // tools state
    const [hintDisabled, setHintDisabled] = React.useState(true);
    const [hintsUsed, setHintsUsed] = React.useState(0);

    // board state
    const [cellBackgroundColors, setCellBackgroundColors] = React.useState(new Array(81).fill('bg-white'));
    const [cellValues, setCellValues] = React.useState(new Array(81).fill('5'));
  
    const [highlightCells, setHighlightCells] = React.useState(true);

    // game info state
    const [gameLevel, setGameLevel] = React.useState('easy');
    const [complexityLevel, setComplexityLevel] = React.useState(null);
    const [countEmptyCells, setCountEmptyCells] = React.useState(null);
    const [complexityLog, setComplexityLog] = React.useState(1);

    const [possibleValue, setPossibleValue] = React.useState('');
  
    // console right state
    const [consoleMessage, setConsoleMessage] = React.useState('First Message');
    const [numberSolved, setNumberSolved] = React.useState(0)
  

  // tool props
  const solve = () => {
    console.log("solve");
    setCellValues(new Array(81).fill('1'));
  };
  const stop = () => {
    console.log("stop")
  };
  const newGame = () => {
    // get valid starting game matrix from Controls
    let gameObj = getFirstValue();
    // cast into array
    let newArr = gameObj.str.split(';');
    newArr.pop();
    // use it to update our cell values state
    setCellValues(newArr);
    // reset colors
    resetColors();
  };
  const resetColors = () => {
    const colors = new Array(81).fill('bg-white');
    setCellBackgroundColors(colors);
  }
  const deleteGame = () => {
    console.log("deleteGame")
  };
  const hint = () => {
    setHintsUsed(prev => prev + 1);
    console.log('number of hints used: ', hintsUsed)
    toast.info(
      `👀 Hmmm... Maybe a ${possibleValue}?`, 
      {
        position: 'top-right',
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true
      }
    )
  };
  const undo = () => {
    notify();
  }

  // board props
  const handleChange = (e) => {
    const id = e.target.id;
    const value = e.target.value;
    // handle valid input and backspace
    if ((value > 0 && value < 10) || (value === "")){
      changeCellValueById(id, value);
    } 
  }
  const changeCellValueById = (id, value) => {
    // spread in previous state into new array
    let newCellValues = [...cellValues];
    // get index of element we are updating value for
    let indexNumber = convertIdToIndex(id); 
    // update value with user input
    newCellValues[indexNumber] = value;
    // update state
    setCellValues(newCellValues);
  }
  const handleFocus = (e) => {
    const id = e.target.id;
    const value = e.target.value;

    // color selected cell blue, constraining cells coral
    if (highlightCells) {
      colorConnectedCells(id, "coral");
    }
    showCellInfo(id, value);
  }
  const colorConnectedCells = (id, color) => {
    // let index = convertIdToIndex(id);
    // reset all cells to be white
    let colorCells = new Array(81).fill('bg-white');

    let row = parseInt(id[0]);
    let column = parseInt(id[1]);

    // function returns int, range 1-9, representing which subgrid we are focused on
    // top-left being 1, bottom-right being 9
    let cube = getCubeIndex(row, column);

    // allCells => array of objects
    // [{row: x, column: y: value: z}, ..., {row: x + 81, column: y + 81: value: n}]
    let allCells = getAllCellsInfo(cellValues);
    
    let count = -1;

    // iterate through every cell
    allCells.map(cell => {
      count++;
      // only change color for cells in same row, same column, or same subgrid
      if ( cell.row === row || cell.column === column || cell.cube === cube) {
        // if we are in the same row, same column, and same subgrid
        if (cell.row === row && cell.column === column && cell.cube === cube) {
          // we are on focused cell -> set color to blue
          colorCells[count] = "bg-blue";
        } else {
          // otherwise we are on 'constraining cells' -> set color to color passed into function
          colorCells[count] = "bg-" + color;
        }
      }
    });

    // update state with new color array
    setCellBackgroundColors(colorCells);
  }
  const showCellInfo = (id, value) => {
    // if selected cell is fulled
    if (parseInt(value) > 0) {
      setHintDisabled(true);
      // set message to display on ConsoleRight
      sendConsole(`This one is filled: (Row, Column): (${id[0]}, ${id[1]}))`);
      return;
    }
    setHintDisabled(false);
    let candidates = candidateValuesById(cellValues, id);
    console.log('candidates: ', candidates)
    setPossibleValue(candidates[Math.floor(Math.random() * candidates.length)])
 
  }

  // console right props
  const handleShowFound = () => {
    console.log("handleShowFound");
  }
  const sendConsole = () => {
    console.log("sendConsole")
  }


  React.useEffect(() => {
    notify()
  }, []);

  React.useEffect(() => {
    if (!highlightCells) {
      setCellBackgroundColors(new Array(81).fill('bg-white'));
    }
  }, [highlightCells])

  const notify = () => {
    toast(
      '🦄 Wow so easy!', 
      {
        position: 'top-right',
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true
      }
    )
  }

  return (
    <>
      {/** POPUP COMPONENT **/}
      <ToastContainer />
      {/** END OF POPUP COMPONENT **/}
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
              hintDisabled={hintDisabled}
            />
          </div>
          {/** MAIN CONTENT **/}
          <div className="container">
            <div className="columns">
              {/** BOARD **/}
              <div className="column">
                <Board  
                  handleChange={handleChange}
                  handleFocus={handleFocus}
                  cellValues={cellValues}
                  cellBackgroundColors={cellBackgroundColors}
                />
      
                <Settings
                  highlightCells={highlightCells}
                  setHighlightCells={setHighlightCells}
                />

              </div>
              {/** END OF BOARD **/}

              {/** GAME INFO **/}
              <div className="column">
                <GameInfo
                  gameLevel={gameLevel}
                  complexityLevel={complexityLevel}
                  countEmptyCells={countEmptyCells}
                  complexityLog={complexityLog}
                />
              </div>
              {/** END OF GAME INFO **/}

              {/** GAME STATISTICS **/}
              <div className="column">
                <div className="columns">
                  <div className="row">
                    <div className="column">

                      <ConsoleRight
                        consoleMessage={consoleMessage}
                        numberSolved={numberSolved}
                        showFound={handleShowFound}
                        hintsUsed={hintsUsed}
                      />

                    </div>
                  </div>
                </div>
              </div>
              {/** END OF GAME STATISTICS **/}
            </div>
          </div>
          {/** END OF MAIN CONTENT **/}  
        </div>
        {/** END OF CONTAINER **/} 

        {/** FOOTER **/}
        <footer className="footer">
          <div className="content has-text-centered">
            <p><b>Sudoku</b> - Enrique Sotomayor 2020</p>
          </div>
        </footer>
        {/** END OF FOOTER **/}
      </section>
      {/** END OF SECTION **/} 
    </>
  );
}

export default App;
