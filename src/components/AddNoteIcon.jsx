import React, { useState } from "react";
import AddNoteForm from "./AddNoteForm";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";

const AddNote = () => {
  const [toggle, settoggle] = useState("");
/**
 * If the toggle state is empty, set the toggle state to "toggle" and change the background color of
 * the body to rgba(0,0,0,0.4). If the toggle state is not empty, set the toggle state to empty and
 * change the background color of the body to empty.
 */
  const noteform = () => {
    if (toggle === "") {
      settoggle("toggle");
      document.body.style.background = "rgba(0,0,0,0.4)";
    } else {
      settoggle("");
      document.body.style.background = "";
    }
  };
  const hideonaddnote = ()=>{
    if (!toggle === "") {
      settoggle("");
      document.body.style.background = "";
    } else {
      settoggle("toggle");
      document.body.style.background = "rgba(0,0,0,0.4)";
    }
  }
  return (
    <>
      <AddNoteForm active={toggle} hideform={hideonaddnote}/>
        <div
          onClick={noteform}
          className={`position-fixed text-center d-flex align-items-center justify-content-center add-note ${toggle}`}
        >
      <OverlayTrigger overlay={<Tooltip id="tooltip">Add Note</Tooltip>}>
          <i className="fa-solid fa-plus fs-1 text-white"></i>
      </OverlayTrigger>
        </div>
    </>
  );
};

export default AddNote;
