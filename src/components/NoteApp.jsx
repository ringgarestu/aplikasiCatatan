import React from "react";
import NoteList from "./NoteList";
import NoteInput from "./NoteInput";
import { getInitialData } from "../utils";

class NoteApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      notes: getInitialData(),
      searchTerm: "",
    };

    this.onDeleteHandler = this.onDeleteHandler.bind(this);
    this.onAddNoteHandler = this.onAddNoteHandler.bind(this);
    this.onSearchChange = this.onSearchChange.bind(this);
  }
  onDeleteHandler(id) {
    const notes = this.state.notes.filter((note) => note.id !== id);
    this.setState({ notes });
  }
  onAddNoteHandler({ title, body }) {
    this.setState((prevState) => {
      return {
        notes: [
          ...prevState.notes,
          {
            id: +new Date(),
            title,
            body,
            archived: false,
            createdAt: +new Date(),
          },
        ],
      };
    });
  }

  onSearchChange(event) {
    this.setState({ searchTerm: event.target.value });
  }

  render() {
    const filterdNotes = this.state.notes.filter((note) => note.title.toLowerCase().includes(this.state.searchTerm.toLowerCase()));
    return (
      <div>
        <div className="note-app__header">
          <h1>Aplikasi Catatan</h1>
          <div className="note-search input">
            <input type="text" placeholder="Cari catatan..." value={this.state.searchTerm || ""} onChange={this.onSearchChange} />
          </div>
        </div>
        <div className="note-app__body">
          <NoteInput addNote={this.onAddNoteHandler} />
          <h2>Catatan Aktif</h2>
          <NoteList notes={filterdNotes} onDelete={this.onDeleteHandler} />
        </div>
      </div>
    );
  }
}
export default NoteApp;
