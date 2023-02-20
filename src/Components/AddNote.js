import React, { useState } from "react";

function Add({ setNotes }) {
  const [newNote, setNewNote] = useState({
    title: "",
    content: "",
    date:"",
    star: false,
  });
  const handleAddNote = () => {
      setNotes(newNote);
      setNewNote({
        title:"", 
        content:"",
        date:"",
        star :false,
    });
    const date = new Date;
    const NewDate = {
       title:"", 
       content:"",
       date: date.toLocaleDateString(),
       star :false,
    }
    const newDates = [...newNote,NewDate];
    setNotes(newDates);
    console.log(newDates);
  };
  return (
    <div className="add-wrap">
      <h1>--Note--</h1>
      <input
        onChange={(e) => setNewNote({ ...newNote, title: e.target.value })}
        value={newNote.title}
        className="add-title"
        placeholder="Enter title..."
      ></input>
      <textarea
        onChange={(e) => setNewNote({ ...newNote, content: e.target.value })}
        value={newNote.content}
        className="add-content"
        rows="5"
        column="2"
        placeholder="Enter content..."
      ></textarea>
      <button onClick={() => handleAddNote()} 
        className="add-btn">
        Add Note
      </button>
    </div>
  );
}

export default Add;
