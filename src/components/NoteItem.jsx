import React from "react";
/* Importing the OverlayTrigger component from the react-bootstrap library. */
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
/* Importing the Tooltip component from the react-bootstrap library. */
import Tooltip from "react-bootstrap/Tooltip";
const NoteItem = (props) => {
  const { note } = props;
  let date = new Date(note.Date);
  let notedate = {
    yy: date.getFullYear(),
    mm: date.getMonth(),
    dd: date.getDay(),
  };
  function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
  return (
    <>
    <div className="col-lg-3 col-md-4 col-sm-6 col-6 note-col">
      <div className="card my-3" style={{ background: "rgb(229 131 59)" }}>
        <div className="card-body text-light">
          <div className="w-100 d-flex justify-content-between align-items-center mb-2">
            <h5 className="card-title text-light">
              {capitalizeFirstLetter(note.title)}
            </h5>
            <div className="d-flex">
              <OverlayTrigger
                overlay={<Tooltip id="tooltip">Delete Note</Tooltip>}
              >
                <i className="fa-solid fa-trash-can mx-1"></i>
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
