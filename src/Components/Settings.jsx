import React from 'react'

const Settings = ({ highlightCells, setHighlightCells }) => {


    return (
        <div>
            <button className={ highlightCells ? 'button is-warning' : 'button is-success'} onClick={() => setHighlightCells(prev => !prev)}>Highlight Cells?</button>
        </div>
    )
}

export default Settings;