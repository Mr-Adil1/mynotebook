import React from 'react'

const AddNoteForm = (props) => {
  return (
    <div>
        <form className={`note-form position-fixed bg-white ${props.active}`}>
    <legend><h2 style={{ color: "rgb(229 131 59)" }}>Add Note</h2></legend>
    <div className="mb-3">
      <label htmlFor="title" className="form-label">Title</label>
      <input type="text" id="title" className="form-control note-input"/>
    </div>
    <div className="mb-3">
      <label htmlFor="description" className="form-label">Description</label>
      <textarea name="" id="" cols="30" rows="10" className='form-control note-input'></textarea>
    </div>
    <div className="mb-3">
    </div>
    <button type="submit" className="btn text-white" style={{ background: "rgb(229 131 59)" }}>Add</button>
</form>
    </div>
  )
}

export default AddNoteForm