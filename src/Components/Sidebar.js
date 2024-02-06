import React from 'react'
import { FaRegTrashAlt } from "react-icons/fa";
import { MdAddCircleOutline } from "react-icons/md";
import { BsDatabaseFillX } from "react-icons/bs";
const Sidebar = (props) => {
    const {notesArray, currentNote, setCurrentNoteId, createNote, clearLocalStorage, deleteNote} = props;
    const noteElements = notesArray.map((note, index) => {
        return (
            <div key={note.id} className={`note ${currentNote().id == note.id && "currentNote"}`}
                onClick={() => setCurrentNoteId(note.id)}
            >
                <h3 className='note-title'>{note.body.split('\n')[0]}</h3>
                <button className='delete-note' onClick={(event)=>deleteNote(event, note.id)}><FaRegTrashAlt className='delete-note-icon'/></button>
            </div>
        )
    })
    return (
        <div className='Sidebar'>
            <div className="sidebar--header">
                <h3>Notes</h3>
                <div className="sidebar-toolBar">
                    <button className="add-note" onClick={createNote} > <MdAddCircleOutline className='add-note-icon'/> </button>
                    <button className="delete-all" onClick={clearLocalStorage}> <BsDatabaseFillX className='delete-all-icon' /> </button>
                </div>
            </div>
            <div className="noteElements">
                {noteElements}
            </div>
        </div>
    )
}

export default Sidebar