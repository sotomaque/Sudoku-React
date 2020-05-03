import React from 'react';
import BoardRow from './BoardRow';


const Board = ({ handleChange, handleFocus, cellValues, cellBackgroundColors }) => {

    const simple9 = [1, 2, 3, 4, 5, 6, 7, 8, 9];

    return (
        <div className="container">
            <hr />
            <div className="card">
                <table style={{display: 'flex', justifyContent: 'center'}}>
                    <tbody>
                        {
                            simple9.map( elem => {
                                return (
                                    <BoardRow
                                        key={elem}
                                        handleChange={handleChange}
                                        handleFocus={handleFocus}
                                        cellValues={cellValues}
                                        cellBackgroundColors={cellBackgroundColors}
                                        id={elem.toString()}
                                    />
                                )
                            })
                        }
                    </tbody>
                </table>
            </div>
            <hr />
        </div>
    )
}

export default Board;