import React from "react";

class NoteInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      body: "",
    };
    this.onSubmitEventHandler = this.onSubmitEventHandler.bind(this);
    this.onTitleChangeEventHandler = this.onTitleChangeEventHandler.bind(this);
    this.onBodyChangeEventHandler = this.onBodyChangeEventHandler.bind(this);
  }
  onBodyChangeEventHandler(event) {
    this.setState(() => {
      return {
        name: event.target.value,
      };
    });
  }
  onTitleChangeEventHandler(event) {
    this.setState(() => {
      return {
        name: event.target.value,
      };
    });
  }
  onSubmitEventHandler(event) {
    event.preventDefault();
    this.props.addNote(this.state);
  }
  render() {
    return (
      <div>
        <h2>Buat Catatan</h2>
        <form>
          <p className="note-input__title__char-limit">"Sisa karakter:" "50"</p>
          <input className="note-input__title" type="text" placeholder="Ini adalah judul..." required value={this.state.title} />
          <textarea className="note-input__body" type="text" placeholder="Tuliskan catatan kamu disini..." required value={this.state.body}></textarea>
          <button type="submit">Buat</button>
        </form>
      </div>
    );
  }
}
export default NoteInput;
