import React from "react";
import NoteItem from "./NoteItem";

function NoteList({ notes, onDelete, onArchived }) {
  return <div className="note-list">{notes.length === 0 ? <p>Tidak ada catatan</p> : notes.map((note) => <NoteItem key={note.id} id={note.id} onDelete={onDelete} onArchived={onArchived} {...note} />)}</div>;
}

export default NoteList;
