import React from "react";

class NotesAddInput extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      title: "",
      body: "",
      archived: false,
      maxText: 50,
    };

    this.onTitleChangeHandler = this.onTitleChangeHandler.bind(this);
    this.onBodyChangeHandler = this.onBodyChangeHandler.bind(this);
    this.onSubmitChangeHandler = this.onSubmitChangeHandler.bind(this);
    this.onTitleChangeHandler = this.onTitleChangeHandler.bind(this);
  }

  onTitleChangeHandler(event) {
    const maxChar = 50;
    const userInputTitle = event.target.value.slice(0, maxChar);
    const userInputTitleLength = userInputTitle.length;

    this.setState((prevState) => {
      return {
        ...prevState,
        title: userInputTitle,
        maxText: maxChar - userInputTitleLength,
      };
    });
  }

  onBodyChangeHandler(event) {
    this.setState((prevState) => {
      return {
        ...prevState,
        body: event.target.value,
      };
    });
  }

  onSubmitChangeHandler(event) {
    event.preventDefault();
    if (
      this.state.title === "" ||
      this.state.title === null ||
      this.state.body === "" ||
      this.state.body === null
    ) {
      alert("Please fill in all fields!");
    } else {
      this.props.addNotes(this.state);
    }
  }

  render() {
    return (
      <div className="note-input">
        <h2>Make a Note</h2>
        <form onSubmit={this.onSubmitChangeHandler}>
          <p className="note-input__title__char-limit">
            Characters left: {this.state.maxText}
          </p>
          <input
            type="text"
            placeholder="Write down the title here..."
            className="note-input__title"
            value={this.state.title}
            onChange={this.onTitleChangeHandler}
          />
          <textarea
            type="text"
            placeholder="Write down the note here..."
            className="note-input__body"
            value={this.state.body}
            onChange={this.onBodyChangeHandler}
          />
          <button type="submit">Create</button>
        </form>
      </div>
    );
  }
}

export default NotesAddInput;
