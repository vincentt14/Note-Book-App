import React from "react";
import NoteItem from "./NoteItem";

const NoteArchivesList = ({ notes }) => {
  const archivedNotes = notes.filter((note) => note.archived === true);

  if (archivedNotes.length !== 0) {
    return (
      <section className="notes-list">
        {archivedNotes.map((note) => (
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

export default NoteArchivesList;
