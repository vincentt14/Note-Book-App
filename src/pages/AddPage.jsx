import React from "react";
import DoneButton from "../components/DoneButton";
import NoteInput from "../components/NoteInput";
import { useNavigate } from "react-router-dom";
import { addNote } from "../utils/local-data";

const AddPage = () => {
  const navigate = useNavigate();

  function onAddNoteHandler(note) {
    addNote(note);
    navigate("/");
  }

  return (
    <section className="add-new-page">
      <NoteInput addNote={onAddNoteHandler}/>
      <DoneButton />
    </section>
  );
};

export default AddPage;
