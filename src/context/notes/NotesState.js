import React, { useState } from "react";
import NoteContext from "./notesContaxt";

const NotesState = (props) => {
  /* Just a variable that is used to set the initial state. */
  const usernotes = [
    {
      _id: "63410f3fdfcc90451955e79a",
      user: "6340f65c74fb7e53c9e2d70a",
      title: "learning",
      description:
        "i will have to compleate munotebook project on 22/10/16 sundey",
      tag: "react.js",
      Date: "2022-10-08T05:48:47.543Z",
      __v: 0,
    },
    {
      _id: "6343d9d83b8b0a1482884d0f",
      user: "6340f65c74fb7e53c9e2d70a",
      title: "marege",
      description:
        "i will have to go to the marriage ceremony on 22/10/14 Wednesday",
      tag: "function",
      Date: "2022-10-10T08:37:45.104Z",
      __v: 0,
    },   {
      _id: "63410f3fdfcc90451955e79a",
      user: "6340f65c74fb7e53c9e2d70a",
      title: "learning",
      description:
        "i will have to compleate munotebook project on 22/10/16 sundey",
      tag: "react.js",
      Date: "2022-10-08T05:48:47.543Z",
      __v: 0,
    },
    {
      _id: "6343d9d83b8b0a1482884d0f",
      user: "6340f65c74fb7e53c9e2d70a",
      title: "marege",
      description:
        "i will have to go to the marriage ceremony on 22/10/14 Wednesday",
      tag: "function",
      Date: "2022-10-10T08:37:45.104Z",
      __v: 0,
    },
  ];
  const [notes, setNotes] = useState(usernotes);
  return (
    <NoteContext.Provider value={{notes,setNotes}}>
      {props.children}
    </NoteContext.Provider>
  );
};

export default NotesState;
