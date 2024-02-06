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
  const [notesArray, setNotesArray] = React.useState(() => JSON.parse(localStorage.getItem("notes")) || []);
  // This didn't stayed on current note after reloding
  // const [currentNoteId, setCurrentNoteId] = React.useState((notesArray[0] && notesArray[0].id) || "");
  // This now stays on current note even after reloding 
  const [currentNoteId, setCurrentNoteId] = React.useState( (localStorage.getItem("crntNoteId") && JSON.parse(localStorage.getItem("crntNoteId"))) || (notesArray[0] && notesArray[0].id) || "");
  React.useEffect(() => {
    localStorage.setItem("crntNoteId", JSON.stringify(currentNoteId))
  }, [currentNoteId])
  React.useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(notesArray))
  }, [notesArray])
  const createNote = () => {
    const newNote = {
      id: nanoid(),
      body: "Note Title...",
      updatedAt: Date.now()
    }
    setNotesArray(prevNotesArray => [newNote, ...prevNotesArray])
    setCurrentNoteId(newNote.id);
  }

  // This was not re-arranging the most recent updated note to top
  // const updateNote = text => {
  //   setNotesArray(prevNotesArray => prevNotesArray.map(oldNotes => {
  //     return (
  //       oldNotes.id == currentNoteId ?
  //         { ...oldNotes, body: text } :
  //         oldNotes
  //     )
  //   }))
  // }

  // This re-arranges the most recent updated note to top
  const updateNote = text => {
    setNotesArray(prevNotesArray => {
      let updatedArray = prevNotesArray.map((oldNotes)=>{
        return oldNotes.id === currentNoteId ?
          {...oldNotes, body: text, updatedAt: Date.now()} :
          oldNotes
      })
      updatedArray.sort((a,b) => b.updatedAt - a.updatedAt)
      return updatedArray
    })
  }

  // Another way to re-arranges the most recent updated note to top
  // const updateNote = text => {
  //   setNotesArray(prevNotesArray => {
  //     let updatedArray = [];
  //     for(let i =  0; i< prevNotesArray.length; i++){
  //       const oldNote = prevNotesArray[i];
  //       oldNote.id == currentNoteId ? 
  //       updatedArray.unshift({...oldNote, body: text, updatedAt: Date.now()}):
  //       updatedArray.push(oldNote)
  //     }
  //     return updatedArray
  //   })
  // }

  // This also re-arranges the most recent updated note to top but has some delay
  // React.useEffect(()=>{
  //   setNotesArray(prevNotesArray=>{
  //     prevNotesArray.sort((a,b) => b.updatedAt - a.updatedAt)
  //     return prevNotesArray
  //   })
  // },[currentNoteId])
  // const updateNote = text => {
  //   setNotesArray(prevNotesArray => {
  //     let updatedArray = prevNotesArray.map((oldNotes)=>{
  //       return oldNotes.id === currentNoteId ?
  //         {...oldNotes, body: text, updatedAt: Date.now()} :
  //         oldNotes
  //     })
  //     return updatedArray
  //   })
  // }
  const findCurrentNote = () => {
    return notesArray.find(note => {
      return note.id === currentNoteId
    }) || notesArray[0]
  }
  // Function to delete a note
  // To use this method we need to pass note to the deleteNote function in Sidebar component
  // const deleteNote = (event, note)=>{
  //   event.stopPropagation();
  //   const noteIndex = notesArray.indexOf(note);
  //   setNotesArray(prevNotesArray=>{
  //     const updatedArray = [...prevNotesArray];
  //     updatedArray.splice(noteIndex,1);
  //     return updatedArray;
  //   })
  // }

  // Another way to delete a note 
  const deleteNote = (event, noteId)=>{
    event.stopPropagation();
    setNotesArray(prevNotesArray=> prevNotesArray.filter(note => note.id !== noteId))
  }
  return (
    <div className="App">
      {notesArray.length > 0 ?
        <Split
          className='split'
          sizes={[20, 80]}
          // minSize={[200, 1000]}  // have to remove this so that split can work on mobile phone as well
          direction="horizontal"
          cursor="col-resize"
        >
          <Sidebar 
            createNote={createNote}
            notesArray={notesArray}
            currentNote={findCurrentNote}
            setCurrentNoteId={setCurrentNoteId}
            clearLocalStorage={clearLocalStorage}
            deleteNote = {deleteNote}
          />
          <Editor
            updateNote={updateNote} 
            currentNote={findCurrentNote} 
          />
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