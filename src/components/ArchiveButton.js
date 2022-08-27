import React from "react";

function ArchiveButton({ id, isArchived, onArchive }) {
  return (
    <button
      className="note-item__archive-button"
      onClick={() => {
        onArchive(id);
      }}
    >
      {isArchived ? 'Unarchive' : 'Archive'}
    </button>
  );
}

export default ArchiveButton;
