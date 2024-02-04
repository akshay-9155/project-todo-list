import { nanoid } from 'nanoid'
import './App.css';
import React from 'react';
import Editor from './Components/Editor';
import Sidebar from './Components/Sidebar';
import Split from 'react-split'
function App() {
  const clearLocalStorage = () => {
    localStorage.clear();
    setNotesArray([]);
  }
  const [notesArray, setNotesArray] = React.useState(()=> JSON.parse(localStorage.getItem("notes")) || []);
  const [currentNoteId, setCurrentNoteId] = React.useState((notesArray[0] && notesArray[0].id) || "");
  React.useEffect(()=>{
    localStorage.setItem("notes",JSON.stringify(notesArray))
  },[notesArray])
  const createNote = () => {
    const newNote = {
      id: nanoid(),
      body: "# Type your markdown note's title here"
    }
    setNotesArray(prevNotesArray => [newNote, ...prevNotesArray])
    setCurrentNoteId(newNote.id);
  }
  const updateNote = text => {
    setNotesArray(prevNotesArray => prevNotesArray.map(oldNotes => {
      return (
        oldNotes.id == currentNoteId ?
          { ...oldNotes, body: text } :
          oldNotes
      )
    }))
  }
  const findCurrentNote = () => {
    return notesArray.find(note => {
      return note.id === currentNoteId
    }) || notesArray[0]
  }

  return (
    <div className="App">
      {notesArray.length > 0 ?
        <Split
          className='split'
          sizes={[20, 80]}
          minSize={[200, 1000]}
          direction="horizontal"
          cursor="col-resize"
        >
          <Sidebar createNote={createNote} notesArray={notesArray} currentNoteId={currentNoteId} setCurrentNoteId={setCurrentNoteId} clearLocalStorage = {clearLocalStorage} />
          <Editor updateNote={updateNote} currentNote={findCurrentNote} />
        </Split> :
        <div className='firstNote'>
          <h1>You have no Notes</h1>
          <button onClick={createNote}>Create one now</button>
        </div>
      }

    </div>
  );
}
export default App;