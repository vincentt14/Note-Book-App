import React from "react";
import { FiCheck } from "react-icons/fi";
import PropTypes from "prop-types";

const DoneButton = ({ buttonAddNoteCallback }) => {
  return (
    <div className="add-new-page__action">
      <button className="action" title="tambah" type="button" onClick={() => buttonAddNoteCallback()}>
        <FiCheck />
      </button>
    </div>
  );
};

DoneButton.propTypes = {
  buttonAddNoteCallback: PropTypes.func.isRequired,
};

export default DoneButton;
