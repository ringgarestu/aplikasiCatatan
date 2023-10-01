import React from "react";
import { showFormattedDate } from "../utils";
import DeleteButton from "./DeleteButton";

function NoteItem({ title, body, id, createdAt, onDelete }) {
  return (
    <div className="note-item">
      <DeleteButton id={id} onDelete={onDelete} />
      {showFormattedDate(createdAt)}
      {body}
      {title}
    </div>
  );
}

export default NoteItem;
