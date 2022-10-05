import React from "react";
import PropTypes from "prop-types";

class NoteInput extends React.Component {
  constructor(props) {
    super(props);

    this.onTitleChangeHandler = this.onTitleChangeHandler.bind(this);
    this.onInputHandler = this.onInputHandler.bind(this);
  }

  onTitleChangeHandler(event) {
    this.props.titleCallback(event.target.value);
  }

  onInputHandler(event) {
    this.props.bodyCallback(event.target.innerHTML);
  }

  render() {
    return (
      <div className="add-new-page__input">
        <input className="add-new-page__input__title" placeholder="Masukkan Title" onChange={this.onTitleChangeHandler} />
        <div className="add-new-page__input__body" data-placeholder="Isi note ...." contentEditable onInput={this.onInputHandler} />
      </div>
    );
  }
}

NoteInput.propTypes = {
  titleCallback: PropTypes.func.isRequired,
  bodyCallback: PropTypes.func.isRequired,
};

export default NoteInput;
