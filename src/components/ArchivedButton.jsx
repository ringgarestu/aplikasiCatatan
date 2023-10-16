import React from "react";

function ArchivedButton({ id, onArchived }) {
  return (
    <button className="note-item__archive-button" onClick={() => onArchive(id)}>
      Archived
    </button>
  );
}
export default ArchivedButton;
