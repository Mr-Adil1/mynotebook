import React, { useContext } from "react";
import NoteItem from "./NoteItem";
import NoteContext from "../context/notes/notesContaxt";

const Note = () => {
  const context = useContext(NoteContext);
  const { notes } = context;
  return (
    <div className="row my-3">
      
      <h2 style={{ color: "rgb(229 131 59)" }}>Your Notes</h2>
      {
        notes.length ? 
      notes.map((note,i) => {
        return <NoteItem key={i} note={note} />;
      })
    : <h2 style={{ color: "rgb(229 131 59)" }}>No Notes</h2>}
    </div>
  );
};

export default Note;
