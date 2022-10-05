import React from "react";
import NoteItem from "./NoteItem";
import PropsTypes from "prop-types";

const NoteList = ({ notes }) => {
  const activeNotes = notes.filter((note) => note.archived === false);

  if (activeNotes.length !== 0) {
    return (
      <section className="notes-list">
        {activeNotes.map((note) => (
          <NoteItem key={note.id} {...note} />
        ))}
      </section>
    );
  } else {
    return (
      <section className="notes-list-empty">
        <p className="notes-list__empty">Tidak ada catatan</p>
      </section>
    );
  }
};

NoteList.propsTypes = {
  notes: PropsTypes.arrayOf(PropsTypes.object).isRequired,
};

export default NoteList;
