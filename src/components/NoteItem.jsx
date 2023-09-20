import React from "react";
import NoteItemBody from "./NoteItemBody";

function NoteItem({ title, body, createAt }) {
  return (
    <div className="note-item">
      <NoteItemBody title={title} body={body} createAt={createAt} />
    </div>
  );
}

export default NoteItem;
