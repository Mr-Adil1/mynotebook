import React, {useState, useContext } from "react";
/* Importing the OverlayTrigger component from the react-bootstrap library. */
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
/* Importing the Tooltip component from the react-bootstrap library. */
import Tooltip from "react-bootstrap/Tooltip";
/* Importing the context from the notesContaxt.js file. */
import NoteContext from "../context/notes/notesContaxt";
const NoteItem = (props) => {
  
  /* Destructuring the props object. */
  const { note } = props;
  let date = new Date(note.Date);
/* Destructuring the date object. */
  let notedate = {
    yy: date.getFullYear(),
    mm: date.getMonth(),
    dd: date.getDay(),
  };

  /* Capitalizing the first letter of the note title. */
  // function capitalizeFirstLetter(string) {
  //   return string.charAt(0).toUpperCase() + string.slice(1);
  // }
  const context = useContext(NoteContext);
  const {deletenote} = context;

  // delete loading
  const [delloadingd, setdelloadingd] = useState('none');
  return (
    <>
    <div className="col-lg-3 col-md-4 col-sm-6 col-6 note-col position-relative">
<button className={`btn position-absolute top-0 start-0 w-100 h-100 d-${delloadingd}`} style={{background:"#f1f1f1",zIndex:'1001',border:"none" }} type="button" disabled>
  <span className="spinner-border spinner-border-sm mx-1" role="status" aria-hidden="true"></span>
   Deleting...
</button>
      <div className="card my-3" style={{ background: "rgb(229 131 59)" }}>
        <div className="card-body text-light">
          <div className="w-100 d-flex justify-content-between align-items-center mb-2">
            <h5 className="card-title text-light">
              {note.title}
            </h5>
            <div className="d-flex">
              <OverlayTrigger
                overlay={<Tooltip id="tooltip">Delete Note</Tooltip>}
              >
                <i className="fa-solid fa-trash-can mx-1" onClick={()=>{deletenote(note._id);let id = note._id; {setdelloadingd('block')}}}></i>
              </OverlayTrigger>
              <OverlayTrigger
                overlay={<Tooltip id="tooltip">Edit Note</Tooltip>}
              >
                <i className="fa fa-edit mx-1"></i>
              </OverlayTrigger>
            </div>
          </div>
          <p className="card-text text-light desc">{note.description}</p>
          <p className="card-text text-light date">{`Date: ${notedate.yy} / ${notedate.mm} / ${notedate.dd}`}</p>
        </div>
      </div>
    </div>
    </>
  );
};

export default NoteItem;
