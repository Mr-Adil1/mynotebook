import React, { useContext, useState } from "react";
/* Importing the context from the notesContaxt.js file. */
import NoteContext from "../context/notes/notesContaxt";

const AddNoteForm = (props) => {
  let hideform = props.hideform;
  const context = useContext(NoteContext);
  const {addnote} = context;
  const [input, setinput] = useState({});

  const handlechange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setinput((values) => ({ ...values, [name]: value }));
  };
  const handlesubmit = (e) => {
    e.preventDefault();
    addnote(input.title,input.description);
    hideform();
  };
  return (
    <div>
      {/*A form that is used to add notes. */}
      <form className={`note-form position-fixed bg-white ${props.active}`}>
        <legend>
          <h2 style={{ color: "rgb(229 131 59)" }}>Add Note</h2>
        </legend>
        <div className="mb-3">
          <label htmlFor="title" className="form-label">
            Title
          </label>
          <input
            type="text"
            id="title"
            name="title"
            value={input.title || ""}
            className="form-control note-input"
            onChange={handlechange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="description" className="form-label">
            Description
          </label>
          <textarea
            name="description"
            id="description"
            value={input.description || ""}
            cols="30"
            rows="10"
            className="form-control note-input"
            onChange={handlechange}
          ></textarea>
        </div>
        <div className="mb-3"></div>
        <button
          type="submit"
          onClick={handlesubmit}
          className="btn text-white"
          style={{ background: "rgb(229 131 59)" }}
        >
          Add
        </button>
      </form>
    </div>
  );
};

export default AddNoteForm;
