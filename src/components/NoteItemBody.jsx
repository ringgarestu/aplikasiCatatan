import React from "react";

function NoteItemBody({ title, body, createAt }) {
  return (
    <div className="note-input__body">
      <h3 className="note-item__title"></h3>
      <p className="note-item__body"></p>
      <p className="note-item__date"></p>
    </div>
  );
}

export default NoteItemBody;
