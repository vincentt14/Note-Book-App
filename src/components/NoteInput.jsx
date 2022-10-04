import React from "react";
import PropTypes from "prop-types";

class NoteInput extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      title: "",
      body: "",
    };

    this.onTitleChangeEventHandler = this.onTitleChangeEventHandler.bind(this);
    this.onInputHandler = this.onInputHandler.bind(this);
  }

  onTitleChangeEventHandler(event) {
    this.setState(() => {
      return {
        title: event.target.value,
      };
    });
  }

  onInputHandler(event) {
    this.setState(() => {
      return {
        body: event.target.innerHTML,
      };
    });
  }

  render() {
    return (
      <div className="add-new-page__input">
        <input className="add-new-page__input__title" placeholder="Masukkan Title" onChange={this.onTitleChangeEventHandler}/>
        <div className="add-new-page__input__body" data-placeholder="Isi note ...." contentEditable onInput={this.onInputHandler}/>
      </div>
    );
  }
}

export default NoteInput;
