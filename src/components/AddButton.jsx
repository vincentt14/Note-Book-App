import React from "react";
import { FiPlus } from "react-icons/fi";
import { Link } from "react-router-dom";

const AddButton = () => {
  return (
    <Link to="/new">
      <div className="homepage__action">
        <button className="action" title="tambah" type="button">
          <FiPlus />
        </button>
      </div>
    </Link>
  );
};

export default AddButton;
