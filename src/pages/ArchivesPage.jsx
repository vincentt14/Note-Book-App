import React from "react";
import SearchBar from "../components/SearchBar";
import NoteArchivesList from "../components/NoteArchivesList";
import { searchEngineUtility } from "../utils/utility";
import PropTypes from "prop-types";

class ArchivesPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      notes: props.notes,
      filteredNotes: props.notes,
      keyword: props.keyword,
    };

    this.keywordChangeHandler = this.keywordChangeHandler.bind(this);
  }

  componentDidMount() {
    if (this.state.keyword !== "") {
      const filteredNotes = searchEngineUtility(this.state.notes, this.props.keyword);
      this.setState({ filteredNotes });
    }
  }

  keywordChangeHandler(keyword) {
    if (keyword === undefined || keyword === null || keyword === "") {
      this.setState({ filteredNotes: this.state.notes, keyword });
      this.props.keywordChange("");
    } else {
      const filteredNotes = searchEngineUtility(this.state.notes, keyword);
      this.setState({ filteredNotes, keyword });
      this.props.keywordChange(keyword);
    }
  }

  render() {
    return (
      <section className="archives-page">
        <h2>Catatan Arsip</h2>
        <SearchBar keyword={this.state.keyword} keywordChange={this.keywordChangeHandler} />
        <NoteArchivesList notes={this.state.filteredNotes} />
      </section>
    );
  }
}

ArchivesPage.propTypes = {
  keywordChange: PropTypes.func.isRequired,
  notes: PropTypes.arrayOf(PropTypes.object).isRequired,
  keyword: PropTypes.string.isRequired,
};

export default ArchivesPage;
