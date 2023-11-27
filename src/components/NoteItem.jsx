import React from "react";
import { showFormattedDate } from "../utils";
import DeleteButton from "./DeleteButton";
import ArchivedButton from "./ArchivedButton";

function NoteItem({ title, body, id, createdAt, onDelete, onArchive }) {
  return (
    <div className="note-item">
      <div className="note-item__content">
        <div className="note-item__date">{showFormattedDate(createdAt)}</div>
        <h3>
          <div className="note-item__title">{title}</div>
        </h3>
        <div className="note-item__body">{body}</div>
      </div>
      <div className="note-item__action">
        <DeleteButton className="note-item__delete-button" id={id} onDelete={onDelete} />
        <ArchivedButton className="note-item__archive-button" id={id} onArchived={onArchive} />
      </div>
    </div>
  );
}

export default NoteItem;
