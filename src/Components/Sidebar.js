import React from 'react'

const Sidebar = (props) => {
    const noteElements = props.notesArray.map((note, index) => {
        return (
            <div key={note.id} className={`note ${props.currentNoteId == note.id && "currentNote"}`}
                onClick={() => props.setCurrentNoteId(note.id)}
            >
                <h3>Note {index + 1}</h3>
            </div>
        )
    })
    return (
        <div className='Sidebar'>
            <div className="sidebar--header">
                <h3>Notes</h3>
                <div className="sidebar-toolBar">
                    <button className="new-note" onClick={props.createNote} >+</button>
                    <button className="delete-all" onClick={props.clearLocalStorage}></button>
                </div>
            </div>
            <div className="noteElements">
                {noteElements}
            </div>
        </div>
    )
}

export default Sidebar