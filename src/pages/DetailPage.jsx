import React from "react";
import NoteDetail from "../components/NoteDetail";
import { getNote } from "../utils/local-data";

function DetailPageWrapper(){
  return <DetailPage />
}

class DetailPage extends React.Component {
  constructor(props) {
    super(props);
    // console.log(props);

    this.state = {
      note: getNote(),
    };
    // console.log(this.state.note);
  }

  render() {
    if (this.state.note === null) {
      return <p>Note is not found</p>;
    }

    return (
      <section>
        <NoteDetail note={this.state.note} />
      </section>
    );
  }
}

export default DetailPage;
