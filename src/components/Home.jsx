import React from "react";
import AddNote from "./AddNoteIcon";

import Note from "./Note";

const Home = () => {
  return (
    <div className="container mt-3">
      <div className="container mt-4">
        <Note />
        <AddNote/>
      </div>
    </div>
  );
};

export default Home;
