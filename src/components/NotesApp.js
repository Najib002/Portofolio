import React from "react";
import autoBindReact from "auto-bind/react";
import NotesList from "./NotesList";
import { getInitialData } from "../utils/index";
import NotesAddInput from "./NotesAddInput";
import NotesSearchInput from "./NotesSearchInput";

class NotesApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      notes: getInitialData(),
      query: "",
    };

    autoBindReact(this);
  }

  onDeleteHandler(id) {
    const notes = this.state.notes.filter((note) => note.id !== id);
    this.setState({ notes });
  }

  onArchivedHandler(id) {
    const noteIndex = this.state.notes.findIndex((note) => note.id === id);
    // eslint-disable-next-line
    this.state.notes[noteIndex].archived = !this.state.notes[noteIndex].archived;
    this.setState((prevState) => {
      return {
        ...prevState,
        isArchived: this.state.notes[noteIndex].archived,
      }
    });
  }

  onSearchHandler = (event) => {
    this.setState({
      query: event.target.value,
    });
  };

  onAddNotesHandler({ title, body, archived }) {
    this.setState((prevState) => {
      return {
        notes: [
          ...prevState.notes,
          {
            id: +new Date(),
            title: title,
            body: body,
            createdAt: new Date().toISOString(),
            archived: archived,
          },
        ],
      };
    });
  }

  render() {
    const filteredNotes = this.state.query
      ? this.state.notes.filter((note) =>
          note.title
            .toLowerCase()
            .includes(this.state.query.toLocaleLowerCase())
        )
      : this.state.notes;

    return (
      <>
        <div className="note-app__header">
          <h1>Let's Take Notes</h1>
          <NotesSearchInput onSearch={this.onSearchHandler} />
        </div>
        <div className="note-app__body">
          <NotesAddInput addNotes={this.onAddNotesHandler} />
          <h2>Active Notes</h2>
          <NotesList
            notes={filteredNotes.filter((item) => item.archived === false)}
            onDelete={this.onDeleteHandler}
            onArchive={this.onArchivedHandler}
          />
          <h2>Archived Notes</h2>
          <NotesList
            notes={filteredNotes.filter((item) => item.archived === true)}
            onDelete={this.onDeleteHandler}
            onArchive={this.onArchivedHandler}
          />
        </div>
      </>
    );
  }
}

export default NotesApp;
