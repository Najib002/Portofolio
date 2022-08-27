import React from "react";

function NotesSearchInput(props) {
  return (
    <div className="note-search">
      <input
        type="search"
        placeholder="Search notes here..."
        onChange={props.onSearch}
      />
    </div>
  );
}

export default NotesSearchInput;
