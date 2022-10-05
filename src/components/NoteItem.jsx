import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import parse from 'html-react-parser';

const NoteItem = ({ id, title, createdAt, body }) => {
  return (
    <article className="note-item">
      <h3 className="note-item__title">
        <Link to={`/notes/${id}`}>{title}</Link>
      </h3>
      <p className="note-item__createdAt">{createdAt}</p>
      <div className="note-item__body">{parse(body)}</div>
    </article>
  );
};

NoteItem.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  createdAt: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
};

export default NoteItem;
