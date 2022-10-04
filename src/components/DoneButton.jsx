import React from "react";
import { FiCheck } from "react-icons/fi";

const DoneButton = () => {
  return (
    <div className="add-new-page__action">
      <button className="action" title="tambah" type="button">
        <FiCheck />
      </button>
    </div>
  );
};

export default DoneButton;
