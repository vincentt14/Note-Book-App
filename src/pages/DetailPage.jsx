import React from "react";
import { Navigate } from "react-router-dom";
import { FiArchive, FiBookOpen, FiTrash2 } from "react-icons/fi";
import PropTypes from "prop-types";

class DetailPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      redirect: null,
      note: props.note,
    };

    this.onDeleteClicked = this.onDeleteClicked.bind(this);
    this.onSwitchArchiveClicked = this.onSwitchArchiveClicked.bind(this);
  }

  onDeleteClicked() {
    this.setState({ redirect: "/" }, () => this.props.deleteNote(this.state.note.id));
  }

  onSwitchArchiveClicked() {
    this.setState({ redirect: "/archives" }, () => this.props.switchArchiveNote(this.state.note.id));
  }

  render() {
    if (Object.keys(this.state.note).length === 0) {
      return <p>Note is not found</p>;
    }

    return (
      <section>
        {this.state.redirect && <Navigate to={this.state.redirect} />}
        <h3 className="detail-page__title">{this.state.note.title}</h3>
        <p className="detail-page-createdAt">{this.state.note.createdAt}</p>
        <div className="detail-page__body">{this.state.note.body}</div>
        <div className="detail-page__action">
          <button onClick={() => this.onSwitchArchiveClicked()} className="action" type="button" title={this.state.note.archived === false ? "Arsipkan" : "Aktifkan"}>
            {this.state.note.archived === false ? <FiArchive color="#ffffff" /> : <FiBookOpen color="#ffffff" />}
          </button>
          <button onClick={() => this.onDeleteClicked()} className="action" type="button" title="Hapus Note">
            <FiTrash2 color="#ffffff" />
          </button>
        </div>
      </section>
    );
  }
}

DetailPage.propTypes = {
  deleteNote: PropTypes.func.isRequired,
  switchArchiveNote: PropTypes.func.isRequired,
  note: PropTypes.object.isRequired,
};

export default DetailPage;
