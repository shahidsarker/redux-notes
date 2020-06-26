import React from "react";
import { useDispatch } from "react-redux";
import { createNote } from "../reducers/noteReducer";
import NoteService from "../services/notes";

const NewNote = (props) => {
  const dispatch = useDispatch();

  const addNote = async (e) => {
    e.preventDefault();
    const content = e.target.note.value;
    e.target.note.value = "";
    const newNote = await NoteService.createNew(content);
    dispatch(createNote(newNote));
  };

  return (
    <form onSubmit={addNote}>
      <input type="text" name="note" />
      <button type="submit">add</button>
    </form>
  );
};

export default NewNote;
