import React, { useState , useEffect} from "react";
import AddNote from "./Components/AddNote";
import NotesList from "./Components/NotesList";
import Note from "./Components/Note";
import Header from "./Components/Header";
import './App.css'
 

function App() {
  const [notes, setNotes] = useState(JSON.parse(localStorage.getItem('note-app'))??[]);	
  console.log(notes);
  const [darkMode, setDarkMode] = useState(false);
  const [starTest, setStarTest] = useState(false);
  useEffect(() => {
	localStorage.setItem('note-app', JSON.stringify(notes));
  },[notes]);
  return (
	<div className={`${darkMode && 'dark-mode'}`} >
		<Header
		handleToggleDarkMode={setDarkMode}
		></Header>
	  <div className='container'>
		<AddNote
           setNotes = {(newNote) => setNotes([...notes ,newNote])}
		   ></AddNote>
		<NotesList
		   starTest={starTest}
           setNotes = {(notes) => setNotes(notes)}
		   notes = {notes}
		   handleStarTest = {setStarTest}
		>
		</NotesList>	
	  </div>
	</div>
  )
}

export default App