import React, { useContext, useState } from "react";
import NoteItem from "./NoteItem";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
/* Importing the context from the notesContaxt.js file. */
import NoteContext from "../context/notes/notesContaxt";

const Note = () => {
  const context = useContext(NoteContext);
  /* Destructuring the notes from the context. */
  const { notes, editenote } = context;
  // a state hook for toggling modal
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);

  //useState hook for modal inputs
  const [note, setnote] = useState({id:'',etitle:'',edescription:''});
  //updateNote function that is used to open modal
  const updatenote = (cruntnote) => {
    setShow(true);
    setnote({id:cruntnote._id,etitle:cruntnote.title,edescription:cruntnote.description});
  };
  //onchange function that is used to update the state of modal inputs
  const handlechange = (e)=>{
     setnote({...note, [e.target.name]: e.target.value});
  }
  //updateChanges function that is used to pass modal inputs values to the context api
  const updateChanges = () => {
    editenote(note.id,note.etitle,note.edescription);
    setShow(false);
  };
  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Title</Form.Label>
              <Form.Control type="text" name='etitle' value={note.etitle} onChange={handlechange} placeholder="Title" autoFocus />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Description</Form.Label>
              <Form.Control as="textarea" name='edescription' value={note.edescription} onChange={handlechange} rows={3} placeholder="description" />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={updateChanges}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
      <div className="row my-3">
        <h2 style={{ color: "rgb(229 131 59)" }}>Your Notes</h2>
        {notes.length ? (
          /* Mapping through the notes array and returning a NoteItem component for each note. */
          notes.map((note, i) => {
            return <NoteItem key={i} note={note} updatenote={updatenote} />;
          })
        ) : (
          <h2 style={{ color: "rgb(229 131 59)" }}>Add notes to display!</h2>
        )}
      </div>
    </>
  );
};

export default Note;
