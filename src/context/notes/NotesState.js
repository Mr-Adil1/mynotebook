import React, { useState, useEffect } from "react";
import NoteContext from "./notesContaxt";

const NotesState = (props) => {
  const host = "https://mr-adil1.github.io";
  const [notes, setNotes] = useState("");

try {
  const fetchallnotes = async () => {
    
    let response = await fetch(`${host}/api/notes/fetchnotes`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "auth-token":
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjM0MGY2NWM3NGZiN2U1M2M5ZTJkNzBhIn0sImlhdCI6MTY2NTk4OTEyOX0.xprLb3xShBEHe3aF6o3rOxjvyFumtPp2jAqgyQmaYzc",
      },
    });
    let data = await response.json();
    setNotes(data);
  };
  useEffect(() => {
    return () => {
      fetchallnotes();
      // eslint-disable-next-line
    };
  }, [fetchallnotes])
} catch (error) {
  setNotes('Add notes to desplay')
}

  //add notes
  const addnote = async (title, description) => {
    //add notes api call
    const response = await fetch(`${host}/api/notes/addnote`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "auth-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjM0MGY2NWM3NGZiN2U1M2M5ZTJkNzBhIn0sImlhdCI6MTY2NTk4OTEyOX0.xprLb3xShBEHe3aF6o3rOxjvyFumtPp2jAqgyQmaYzc",
      },
      body: JSON.stringify({ title, description }),
    });
    const json = response.json();
    setNotes(notes.concat(json));
  };
  //delete notes
  const deletenote = async (id) => {
    let response = await fetch(`${host}/api/notes/deletenotes/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        "auth-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjM0MGY2NWM3NGZiN2U1M2M5ZTJkNzBhIn0sImlhdCI6MTY2NTk4OTEyOX0.xprLb3xShBEHe3aF6o3rOxjvyFumtPp2jAqgyQmaYzc",
      },
    });
    const data = response.json();
    setNotes(data)
  };

  //edit notes
  const editenote = async (id, title, description) => {
    //update api call
    const response = await fetch(`${host}/api/notes/updatenotes/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        "auth-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjM0MGY2NWM3NGZiN2U1M2M5ZTJkNzBhIn0sImlhdCI6MTY2NTk4OTEyOX0.xprLb3xShBEHe3aF6o3rOxjvyFumtPp2jAqgyQmaYzc",
      },
      body: JSON.stringify({ title, description }),
    });
    response.json();
    /* A for loop that is used to iterate over the notes array. */
    for (let i = 0; i < notes.length; i++) {
      const element = notes[i];
      if (element._id === id) {
        element.title = title;
        element.description = description;
      }
    }
  };
  return (
    /* A React component that is used to provide the context to the children. */
    <NoteContext.Provider value={{ notes, addnote, deletenote,editenote }}>
      {/*  Rendering the children of the component. */}
      {props.children}
    </NoteContext.Provider>
  );
};

export default NotesState;
