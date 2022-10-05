import { showFormattedDate } from "./index";

export const getNoteUtility = (notes, id) => {
  const foundedNote = notes.find((note) => note.id === id);
  return foundedNote;
};

export const addNoteUtility = (notes, title, body) => {
  notes.push({
    id: `notes-${+new Date()}`,
    title: title || "(Untitled)",
    body,
    createdAt: showFormattedDate(new Date().toISOString()),
    archived: false,
  });
  return notes;
};

export const deleteNoteUtility = (notes, id) => {
  notes = notes.filter((note) => note.id !== id);
  return notes;
};

export const switchArchiveNoteUltility = (notes, id) => {
  notes = notes.map((note) => {
    if (note.id === id) {
      note.archived = !note.archived;
    }
    return note;
  });
  return notes;
};

export const searchEngineUtility = (notes, character) => {
  const tokens = character
    .toLowerCase()
    .split(" ")
    .filter((token) => token.trim() !== "");

  if (tokens.length) {
    let searchTermRegex = new RegExp(tokens.join("|"), "gim");
    const filteredNotes = notes.filter((note) => {
      let noteString = "";
      noteString += note.title.toString().toLowerCase().trim() + " ";
      return noteString.match(searchTermRegex);
    });
    return filteredNotes;
  }
  return [];
};
