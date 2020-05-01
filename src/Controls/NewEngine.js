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
                    valule: cell.value
                };

                knownValues.push(cell.value);
                knownValuesObj.push(obj);
            }
        }
    });

    return { knownValues, knownValuesObj };
}