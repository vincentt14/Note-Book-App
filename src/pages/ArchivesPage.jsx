import React from "react";
import { getAllNotes } from "../utils/local-data";
import { useSearchParams } from "react-router-dom";
import SearchBar from "../components/SearchBar";
import { showFormattedDate } from "../utils/index";
import NoteArchivesList from "../components/NoteArchivesList";

class ArchivesPage extends React.Component {
  constructor(props) {
    super(props);

    const newData = [];
    for (let i = 0; i < getAllNotes().length; i++) {
      const { id, title, body, archived } = getAllNotes()[i];
      newData.push({
        id: id,
        title: title,
        body: body,
        createdAt: showFormattedDate(getAllNotes()[i].createdAt),
        archived: archived,
      });
    }

    this.state = {
      notes: newData,
    };
  }

  render() {
    return (
      <section className="archives-page">
        <h2>Catatan Arsip</h2>
        <SearchBar />
        <NoteArchivesList notes={this.state.notes}/>
      </section>
    );
  }
}

export default ArchivesPage;
