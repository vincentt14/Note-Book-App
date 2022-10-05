import React from "react";
import DoneButton from "../components/DoneButton";
import NoteInput from "../components/NoteInput";
import { Navigate } from "react-router-dom";
import PropTypes from "prop-types";

class AddPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      redirect: false,
      title: "",
      body: "",
    };

    this.titleCallback = this.titleCallback.bind(this);
    this.bodyCallback = this.bodyCallback.bind(this);
    this.buttonAddNoteCallback = this.buttonAddNoteCallback.bind(this);
  }

  titleCallback(title) {
    this.setState({ title: title });
  }

  bodyCallback(body) {
    this.setState({ body: body });
  }

  buttonAddNoteCallback() {
    this.props.addNote(this.state.title, this.state.body);
    this.setState({ redirect: true });
  }

  render() {
    return (
      <section className="add-new-page">
        {this.state.redirect && <Navigate to={"/"} />}
        <NoteInput titleCallback={this.titleCallback} bodyCallback={this.bodyCallback} />
        <DoneButton buttonAddNoteCallback={this.buttonAddNoteCallback} />
      </section>
    );
  }
}

AddPage.propTypes = {
  addNote: PropTypes.func.isRequired,
};

export default AddPage;
