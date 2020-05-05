import _ from "underscore";

 /**
   * @param {string} id - id of the selected cell;
   *                      i.e. cell at row 0, column 0 has an id = 00
   *                      i.e. cell at row 1, column 1 has an id = 11
   * 
   * @return {number} index - represeneting position of cell in array 
   *                          representation of grid
*/
export function convertIdToIndex(id) {
    let index = (parseInt(id[0]) - 1) * 9 + parseInt(id[1]) - 1;
    return index;
}

 /**
   * @param {number, number} row, column - index of selected row / selected column
   * 
   * @return {number} index - representing which subgrid we that row/column combo
   *                          falls in; range [1, 9] inclusive;
   *                          top-left = 1; bottom-right = 9;
*/
export function getCubeIndex(row, column) {
    let cube = null;
    let rowDivision = Math.floor((row - 1) / 3);
    let columnDivision = Math.floor((column - 1) / 3);
    cube = rowDivision * 3 + columnDivision + 1;
    return cube;
}

export function getAllCellsInfo(cellValues) {
    let count = 0;
    let objArray = [];

    cellValues.map(  value => {
      let g = convertIndexToId(count, value);
      objArray.push(g);
      count++;
    });

    return objArray;
}

function convertIndexToId(index, value) {
    let num = parseInt(index) + 1;
    let division = Math.floor(num / 9) + 1;
    let remainder = num % 9;
    if (remainder === 0) {
      division = division - 1;
      remainder = 9;
    }
    value = parseInt(value) || 0;

    let cube = getCubeIndex(division, remainder);
    let obj = { row: division, column: remainder, cube: cube, value: value };
    return obj;
}

export function candidateValuesById(cellValues, id) {
    let row = parseInt(id[0]);
    let column = parseInt(id[1]);
    let cube = getCubeIndex(row, column);
    
    return candidateValuesByRowColumnCube(cellValues, row, column, cube);
}

function candidateValuesByRowColumnCube(cellValues, row, column, cube) {
    let allCells = getAllCellsInfo(cellValues);
    // figure out what values are already entered in our
    // row, column or cube
    let known = getKnownValues(allCells, row, column, cube);
    // return the difference
    let candidates = _.difference([1,2,3,4,5,6,7,8,9], known.knownValues);

    return candidates;
}

function getKnownValues(allCells, row, column, cube) {
    let knownValues = []
    let knownValuesObj = [];

    allCells.map( cell => {
        if (parseInt(cell.value) > 0) {
            if (cell.row === row || cell.column === column || cell.cube === cube) {
                let obj = {
                    row: cell.row,
                    column: cell.column,
                    cube: cell.cube,
                    value: cell.value
                };

                knownValues.push(cell.value);
                knownValuesObj.push(obj);
            }
        }
    });

    return { knownValues, knownValuesObj };
}

export function solveAlgo1(cellValues) {
    // for every empty element in the grid
    let allCells = getAllCellsInfo(cellValues);
    let minFound = 9;
    let results = [];
    allCells.forEach(cell => {
        if (cell.value === 0) {
            let candidates = candidateValuesByRowColumnCube(cellValues, cell.row, cell.column, cell.cube);
            if (candidates.length < minFound) {
                minFound = candidates.length;
                let temp = { cell: cell, candidates: candidates}
                if (results.length > 0) {
                    results.pop();
                }
                results.push(temp);
            }
        }
        
    });
    return results;
}

 /**
   * @param {Object} CellValues - Object represeting state of our game
   * 
   * @return {Object} GameInfo - object has fields for NumberOfEmptyCells,
   *                             Complexity and Complexity-log
*/
export function getGameInfo(cellValues) {
    let allCells = getAllCellsInfo(cellValues);
    let filledCells = 0;
    let emptyCells = 0;
    let complexity = 1;
    allCells.map(cell => {
        
        if (cell.value > 0) {
            filledCells++;
        } else {
            emptyCells++;
            let candidates = candidateValuesByRowColumnCube(cellValues, cell.row, cell.column, cell.cube);
            cell.candidates = [...candidates];
            complexity = complexity * candidates.length;
        }
    });
    let GameInfo = { cells: allCells, filledCells, emptyCells, complexity };
    return GameInfo;
}

export function solveAlgo2(cellValues) {
    let gameInfo = getGameInfo(cellValues);
    let allCellsWithCandidates = gameInfo.cells;
    let foundCells = [];
    let refs = ["cube", "row", "column"];

    refs.map(ref => {
        let simple9 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
        simple9.map(num => {
            let res = checkCandidiatesDynamically(ref, num, allCellsWithCandidates);
            if (res.length > 0) {
                foundCells = [...foundCells, ...res]
            }
        })
    });

    return foundCells;
}

 /**
   * @param {string, number, Object} - possible constraint (i.e. row, column or cube),
   *                                 - possible value (1-9 inclusive)
   *                                 - Object for eact cell in grid of type
   *   {row, column, cube, value, candidates}
   * 
   * @return {Array} res - object has fields for NumberOfEmptyCells,
   *                             Complexity and Complexity-log
*/
function checkCandidiatesDynamically(ref, refValue, allCellsWithCandidates) {
    let count = [0, 0, 0, 0, 0, 0, 0, 0, 0];
    let storeObjArray = [];
    let foundCellsObjArr = [];

    allCellsWithCandidates.map(cell => {
        if (!cell.value > 0) {
            if (cell[ref] === refValue && cell.candidates !== undefined) {
                cell.candidates.map(candidate => {
                    count[candidate - 1] = count[candidate - 1] + 1;
                    storeObjArray[candidate - 1] = cell;
                })
            }
        }
    });

    let numb = -1;

    count.map(elem => {
        numb++;

        if (elem === 1){
            if (storeObjArray[numb]) {
                let obj = { value: numb + 1, detail: storeObjArray[numb], constrainedBy: ref };
                foundCellsObjArr.push(obj);
            }
        }
    });

    let results = [...foundCellsObjArr];
    return results;
}

export function validInput(cellValues, id, value) {
    let candidates = candidateValuesById(cellValues, id);
    if (candidates.indexOf(parseInt(value)) > -1) {
        return true;
    } else {
        return false;
    }
}

// called if valid input fails
// returns id's of cells which conflict with desired input
export function getIdsOfConflictingCells(cellValues, id, value) {
    let row = parseInt(id[0]);
    let column = parseInt(id[1]);
    let cube = getCubeIndex(row, column);
    console.log(`row: ${row}, column: ${column}, cube: ${cube}`)
    let idsOfConflictingCells = [];
    let allCells = getAllCellsInfo(cellValues);

    let known = getKnownValues(allCells, row, column, cube);
    let knownValuesObj = known.knownValuesObj;

    knownValuesObj.map( cell => {
        if (cell.value === parseInt(value)) {
            let conflictingRowNumber = cell.row;
            let conflictingColumnNumber = cell.column;
            let id = `${conflictingRowNumber}${conflictingColumnNumber}`;
            idsOfConflictingCells.push(id);
        }
    });
    
    return idsOfConflictingCells;
}


// for all the empty cells in our grid
// return an object -> { row, column, cube, value, candidatesArray }
export function solveAlgo3(cellValues) {
    let gameInfo = getGameInfo(cellValues);
    let allCellsWithCandidates = gameInfo.cells;
    let foundCells = [];

    allCellsWithCandidates.map(cell => {
        if (cell.candidates !== undefined && cell.candidates.length > 0) {
            foundCells.push(cell);
        }
    });

    return foundCells;
}

export function getAllCellsInfoCellsAsCSV(cellValues) {
    let arrayOfStrings = []

    cellValues.map(cell => {
        if (cell.value === 0) {
            arrayOfStrings.push('')
        } else {
            arrayOfStrings.push(cell.value.toString())
        }
    })

    return arrayOfStrings
}

export function isGameOver(cellValues) {
    let gameInfo = getGameInfo(cellValues);
    let allCellsWithCandidates = gameInfo.cells;
    let gameOver = false;
    allCellsWithCandidates.map(cell => {
        if (cell.value === 0) {
            let candidates = cell.candidates;
            
            if (candidates.length === 0 || candidates === []) {
                gameOver = true;
            }
        }
    });
    return gameOver;
}