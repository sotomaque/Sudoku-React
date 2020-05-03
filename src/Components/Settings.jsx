import React from 'react'

const Settings = ({ highlightCells, setHighlightCells }) => {


    return (
        <div>
            <button 
                className='button is-success'
                onClick={() => setHighlightCells(prev => !prev)}
            >
                Cell Highlighting - {highlightCells ? 'On' : 'Off'}
            </button>
        </div>
    )
}

export default Settings;