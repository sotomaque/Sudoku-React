import React from "react";
import 'bulma/css/bulma.css'
import _ from "underscore";

import { confirmAlert } from "react-confirm-alert";
import "react-confirm-alert/src/react-confirm-alert.css";

import Banner from './Components/Banner';
import Tools from './Components/Tools';
import Board from './Components/Board';

import GameInfo from "./Components/GameInfo";
import ConsoleRight from './Components/ConsoleRight';

import { getFirstValue, loadGameByDifficulty, getGameById } from './Controls/NewGame';
import { convertIdToIndex, getCubeIndex, getAllCellsInfo, candidateValuesById, getGameInfo, getAllCellsInfoCellsAsCSV,
   solveAlgo1, solveAlgo2, solveAlgo3, validInput, getIdsOfConflictingCells, isGameOver } from './Controls/NewEngine';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Settings from "./Components/Settings";

import Confetti from 'react-confetti'

function App() {

  // tools state
  const [solveEnabled, setSolvedEnabled] = React.useState(false);
  const [hintsUsed, setHintsUsed] = React.useState(0);

  // board state
  const [cellBackgroundColors, setCellBackgroundColors] = React.useState(new Array(81).fill('bg-white'));
  const [defaultColors] = React.useState(new Array(81).fill('bg-white'));
  const [cellValues, setCellValues] = React.useState(new Array(81).fill('5'));
  const [highlightCells, setHighlightCells] = React.useState(true);

  // game info state
  const [gameDifficulty, setGameDifficulty] = React.useState('easy');
  const [gameId, setGameId] = React.useState(0);
  const [complexity, setComplexity] = React.useState(null);
  const [numberOfEmptyCells, setNumberOfEmptyCells] = React.useState();
  const [gameActive, setGameActive] = React.useState(false);
  const [idSelected, setIdSelected] = React.useState(null);
  const [possibleValue, setPossibleValue] = React.useState('');
  const [savedGame, setSavedGame] = React.useState(null);
  const [virginGameId, setVirginGameId] = React.useState(null);
  const [initialEmpty, setInitialEmpty] = React.useState();

  // console right state
  const [consoleMessage, setConsoleMessage] = React.useState('First Message');
  const [gamesWon, setGamesWon] = React.useState(0)
  const [markThisCellEnabled, setMarkThisCellEnabled] = React.useState(false);
  const [showConfetti, setShowConfetti] = React.useState(false);

  const [piecesAdded, setPiecesAdded] = React.useState([]);
  
  // tool props
  const handleSolveClicked = () => {
    let algo1Results = solveAlgo1(cellValues);

    let cell = algo1Results[0].cell;
    let candidates = algo1Results[0].candidates;

    // algo 1
    if (candidates.length === 1) {
      let row = cell.row;
      let column = cell.column;
      let id = `${row}${column}`;
      notify(`${candidates} is the only number that can go into (row: ${row}, column: ${column})`);
      setHintsUsed(prev => prev + 1);
      blinkCells([id], "coral");
      changeCellValueById(id, candidates);
    } 

    // try algo 2
    else if (candidates.length > 1) {

      let algo2Results = solveAlgo2(cellValues);
      if (algo2Results.length >= 1) {
        let value = algo2Results[0].value;
        let detail = algo2Results[0].detail;
        let constrainedBy = algo2Results[0].constrainedBy;

        let row = detail.row;
        let column = detail.column;
        let id = `${row}${column}`;
        notify(`although [${candidates.toString()}] can go into (row: ${row}, column: ${column}),
                ${value} can only go in one place in this ${constrainedBy}`);
        setHintsUsed(prev => prev + 1);
        blinkCells([id], "coral");
        changeCellValueById(id, value);
      } 
    }
  }
  const newGame = () => {
    // get valid starting game matrix from Controls
    let gameObj = getFirstValue();
    setGameDifficulty(gameObj.difficulty)
    setGameId(gameObj.id)
    // cast into array
    let newArr = gameObj.str.split(';');
    newArr.pop();
    // use it to update our cell values state
    setCellValues(newArr);
    // reset colors
    resetColors();
    // save game so we can start over
    saveVirginGame(gameObj);
    // reset hints used
    setHintsUsed(0);
    // reset possibleValues
    setPossibleValue('')
  };
  const resetColors = () => {
    const colors = new Array(81).fill('bg-white');
    setCellBackgroundColors(colors);
  };
  const startOver = () => {
    let virginGame = getGameById(virginGameId);

    // cast into array
    let newArr = virginGame[0].str.split(';');
    newArr.pop();
    // use it to update our cell values state
    setCellValues(newArr);
    resetColors();
    setStartOverEnabled(false);
  };
  const saveVirginGame = (gameObj) => {
    setVirginGameId(gameObj.id);
  };
  const saveGame = () => {
    let savedCells = getAllCellsInfo(cellValues);
    let cellsFormatted = getAllCellsInfoCellsAsCSV(savedCells);
    let emptyCells = numberOfEmptyCells;
    let difficulty = gameDifficulty;
    let savedGame = { cells: cellsFormatted, gameId, difficulty, emptyCells, complexity }
    setSavedGame(savedGame);
  };
  const loadGame = () => {
    let oldCellValues = savedGame.cells;
    setCellValues(oldCellValues)
    resetColors();
  };

  // board props
  const handleChange = (e) => {
    const id = e.target.id;
    const value = e.target.value;
    // handle valid input and backspace
    if ((value > 0 && value < 10) || (value === "")){
      // check if user input is valid entry for that position
      if (validInput(cellValues, id, value)) {
        if (!startOverEnabled) {
          setStartOverEnabled(true)
        }
        changeCellValueById(id, value);
        setPiecesAdded(prev => [...prev, value]);
      } 
      // if not highlight the cells it conflicts with
      else {
        let idsInConflict = getIdsOfConflictingCells(cellValues, id, value);  
        blinkCells(idsInConflict, "red");
      }
    } else {
      toast.error(
        `⚠ You inserted ${value}. Please enter a number between 1-9.`,  
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
  
  }
  const colorThese = (arrayOfIds, color) => {
    if (arrayOfIds.length > 0) {
      let colorCells = [...cellBackgroundColors];
      arrayOfIds.map(id => {
        let index = convertIdToIndex(id);
        colorCells[index] = 'bg-' + color;
      });
      setCellBackgroundColors(colorCells);
    }
  }
  const blinkCells = (arrayOfIds, color) => {
    colorThese(arrayOfIds, color);
    setTimeout(() => {
      setCellBackgroundColors(defaultColors);
    }, 1000);
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

    setIdSelected(id);

    if (id) {
      setMarkThisCellEnabled(true);
    } 

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
    // if selected cell is filled
    if (parseInt(value) > 0) {
      return;
    }
    let candidates = candidateValuesById(cellValues, id);
    setPossibleValue(candidates)
  }
  const markThisCell = () => {
    if (idSelected !== null) {
      // change color of that cell
      const id = idSelected;
      let colorCells = [...cellBackgroundColors];
      let index = convertIdToIndex(id);
      if (colorCells[index] === 'bg-white') {
        colorCells[index] = "bg-red";
      } else {
        colorCells[index] = "bg-white";
      }
      setCellBackgroundColors(colorCells);
    } else {
      console.log('id selected is null');
    }
  }
  const showAlert = () => {
    confirmAlert({
      customUI: ({ onClose }) => {
        return (
          <div>
            <h1 style={{display: 'flex', justifyContent: 'center'}}><b>Choose Game By Difficulty</b></h1>
            <div className='difficulty-options'>
              <button className="button is-info" onClick={() => {
                getGameByDifficulty('easy')
                onClose()
              }} style={{margin: '5px'}}>
                Easy
              </button>
              <button className="button is-warning" onClick={() => {
                getGameByDifficulty('medium')
                onClose()
              }} style={{margin: '5px'}}>
                Medium
              </button>
              <button
                className="button is-success" onClick={() => {
                  getGameByDifficulty('hard')
                  onClose()
                }} style={{margin: '5px'}}>
                Hard
              </button>
            </div>
            <div className='cancel-button' style={{display: 'grid'}}> 
              <button className="button is-danger" onClick={onClose} style={{margin: '5px'}}>
                Cancel
              </button>
            </div>
          </div>
        );
      },
    });
  }
  const getGameByDifficulty = (difficulty) => {
    // get valid starting game matrix from Controls
    let gameObj = loadGameByDifficulty(difficulty);
    setGameDifficulty(gameObj.difficulty);
    setGameId(gameObj.id)
    // cast into array
    let newArr = gameObj.str.split(';');
    newArr.pop();
    // use it to update our cell values state
    setCellValues(newArr);
    // reset colors
    resetColors();
  }

  // console right props
  const handleShowFound = () => {
    let piecesFound = `${piecesAdded}`
    setConsoleMessage(piecesFound)
  }
  
  const [startOverEnabled, setStartOverEnabled] = React.useState(false)

  React.useEffect(() => {
    // load random game
    newGame();
    let { emptyCells } = getGameInfo(cellValues);
    setInitialEmpty(emptyCells);
  }, []);

  React.useEffect(() => {
    if (!highlightCells) {
      setCellBackgroundColors(new Array(81).fill('bg-white'));
    }
  }, [highlightCells])

  React.useEffect(() => {
    // get game info
    let { emptyCells, complexity } = getGameInfo(cellValues);

    // use game info to update state
    setNumberOfEmptyCells(emptyCells);
    setComplexity(complexity);
    if (emptyCells !== 0) {
      setSolvedEnabled(true)
    } else {
      setSolvedEnabled(false)
    }

    if (initialEmpty !== emptyCells) {
      setGameActive(true)
    }
    
    // check if we have beat the game
    if (gameActive && emptyCells === 0) {
      toast.success(
        `Congratulations! You Won!`, 
        {
          position: 'top-right',
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true
        }
      );
      setShowConfetti(true);
      setTimeout(() => {
        setShowConfetti(false)
      }, 5000)
      setGamesWon(prev => prev + 1)
      setTimeout(() => {
        newGame()
      }, 3000)
      
    }
    
  }, [cellValues])

  React.useEffect(() => { 
    // check if we lost
    let haveWeLost = isGameOver(cellValues);

    if (haveWeLost) {
      toast.error(
        `HAHA! You Lost!`, 
        {
          position: 'top-right',
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true
        }
      );
      setShowConfetti(true);
      setTimeout(() => {
        setShowConfetti(false)
      }, 5000)
      setTimeout(() => {
        newGame()
      }, 3000)
    }
      
  }, [cellValues])

  const notify = (message="🦄 Wow so easy!") => {
    toast(
      `${message}`, 
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

  const [showCandidates, setShowCandidates] = React.useState(false);

  const handleShowCandidatesClicked = () => {
    setShowCandidates(prev => !prev);
  }

  return (
    <>
      {/** POPUP COMPONENT **/}
      <ToastContainer />
      {
        showConfetti &&
        <Confetti />
      }
      {/** END OF POPUP COMPONENT **/}
      <section className="hero is-fullheight">
        <div className="container is-fluid">
          {/** BANNER **/}
          <Banner /> 
          {/** TOOLS **/}
          <div className="container">
            <Tools 
              solve={handleSolveClicked} 
              solveEnabled={solveEnabled} 
              newGame={newGame} 
              startOver={startOver} 
              startOverEnabled={startOverEnabled}
              markThisCell={markThisCell}
              markThisCellEnabled={markThisCellEnabled}
              showAlert={showAlert}
              saveGame={saveGame}
              loadGame={loadGame}
              loadEnabled={savedGame}
              handleShowCandidatesClicked={handleShowCandidatesClicked}
              showCandidates={showCandidates}
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
                  gameId={gameId}
                  gameDifficulty={gameDifficulty}
                  complexity={complexity}
                  numberOfEmptyCells={numberOfEmptyCells}
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
                        gamesWon={gamesWon}
                        showFound={handleShowFound}
                        hintsUsed={hintsUsed}
                        showCandidates={showCandidates}
                        candidates={possibleValue}
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
            <p>Sudoku - <b>Enrique Sotomayor</b> - 2020</p>
          </div>
        </footer>
        {/** END OF FOOTER **/}
      </section>
      {/** END OF SECTION **/} 
    </>
  );
}

export default App;
