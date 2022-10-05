import React from "react";
import Navigation from "./components/Navigation";
import { Link, Route, Routes } from "react-router-dom";

import HomePage from "./pages/HomePage";
import ArchivesPage from "./pages/ArchivesPage";
import AddPage from "./pages/AddPage";
import DetailPage from "./pages/DetailPage";
import PageNotFound from "./pages/PageNotFound";

import { getAllNotes } from "./utils/local-data";
import { showFormattedDate } from "./utils/index";
import { addNoteUtility, getNoteUtility, deleteNoteUtility, switchArchiveNoteUltility } from "./utils/utility";

import { useParams, useSearchParams } from "react-router-dom";

class App extends React.Component {
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

    this.onAddNoteHandler = this.onAddNoteHandler.bind(this);
    this.onDeleteNoteHandler = this.onDeleteNoteHandler.bind(this);
    this.onSwitchArchiveNoteHandler = this.onSwitchArchiveNoteHandler.bind(this);
  }

  onAddNoteHandler(title, body) {
    const notes = addNoteUtility(this.state.notes, title, body);
    this.setState({ notes });
  }

  onDeleteNoteHandler(id) {
    const notes = deleteNoteUtility(this.state.notes, id);
    this.setState({ notes });
  }

  onSwitchArchiveNoteHandler(id) {
    const notes = switchArchiveNoteUltility(this.state.notes, id);
    this.setState({ notes });
  }

  render() {
    const DetailWrapper = () => {
      const { id } = useParams();
      const note = getNoteUtility(this.state.notes, id) || {};
      return <DetailPage note={note} deleteNote={this.onDeleteNoteHandler} switchArchiveNote={this.onSwitchArchiveNoteHandler} />;

    };

    const HomePageWrapper = () => {
      const [searchParams, setSearchParams] = useSearchParams();
      const keyword = searchParams.get("keyword") || "";
      const changeSearchParams = (keyword) => {
        setSearchParams({ keyword });
      };
      return <HomePage notes={this.state.notes} keyword={keyword} keywordChange={changeSearchParams} />;
    };

    const ArchivePageWrapper = () => {
      const [searchParams, setSearchParams] = useSearchParams();
      const keyword = searchParams.get("keyword") || "";
      const changeSearchParams = (keyword) => {
        setSearchParams({ keyword });
      };
      return <ArchivesPage notes={this.state.notes} keyword={keyword} keywordChange={changeSearchParams} />;
    };

    return (
      <div className="app-container">
        <header>
          <h1>
            <Link to="/">Aplikasi Catatan</Link>
          </h1>
          <Navigation />
        </header>
        <main>
          <Routes>
            <Route path="/" element={<HomePageWrapper />} />
            <Route path="/archives" element={<ArchivePageWrapper />} />
            <Route path="/new" element={<AddPage addNote={this.onAddNoteHandler} />} />
            <Route path="/notes/:id" element={<DetailWrapper />} />
            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </main>
      </div>
    );
  }
}

export default App;
