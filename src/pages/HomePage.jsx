import React from "react";
import { getAllNotes } from "../utils/local-data";
import { useSearchParams } from "react-router-dom";
import SearchBar from "../components/SearchBar";
import { showFormattedDate } from "../utils/index";
import NoteList from "../components/NoteList";
import AddButton from "../components/AddButton";

class HomePage extends React.Component {
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
      <section className="homepage">
        <h2>Catatan Aktif</h2>
        <SearchBar />
        <NoteList notes={this.state.notes} />
        <AddButton />
      </section>
    );
  }
}

export default HomePage;
