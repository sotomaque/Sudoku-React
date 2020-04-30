import React from 'react'

const BoardRow = ({ handleChange, handleFocus, cellValues, cellBackgroundColors, id }) => {
    
    let tr_className = 
        parseInt(id) % 3 === 1 && parseInt(id) > 1 
            ? "square-sep"
            : "square";
        
    const getValueOfCell = (id, elem) => {
        let num = (parseInt(id) - 1) * 9 + parseInt(elem) - 1;
        let cellValue = cellValues[num];
        return cellValue;
    }

    const getBgcolor = (id, elem) => {
        return "bg-white squareinp";

        let num = (parseInt(id) - 1) * 9 + parseInt(elem) - 1;
        // cellsBackgroundColors = [ 'bg-white', 'bg-white', 'bg-white', ... ];
        // let cname = cellsBackgroundColors[num] + " squareinp";
        // return cname;
    }

    const columnArr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
   

    
    return (
        <tr className={tr_className}>
            {
                columnArr.map(elem => {
                    let eKey = id + elem;
                    let value = getValueOfCell(id, elem);
                    let bgClassName = getBgcolor(id, elem);

                    let tdclsName = 
                        parseInt(elem) % 3 === 1 && parseInt(elem) > 1 
                            ? "square-septd"
                            : "square";

                    return (
                        <td className={tdclsName} key={eKey}>
                            <input 
                                id={eKey}
                                key={eKey}
                                type="text"
                                name="name"
                                className={bgClassName}
                                onChange={handleChange}
                                onFocus={handleFocus}
                                value={value}
                            />
                        </td>
                    );
                })
            }
        </tr>
    );
}


export default BoardRow;