import React from "react";
const SearchInput = ({ onChange }) => {
  return <input type="text" placeholder="Cari catatan..." onChange={onChange} />;
};

class NoteInput extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      title: "",
      body: "",
    };
    this.onTitleChangeEventHandler = this.onTitleChangeEventHandler.bind(this);
    this.onBodyChangeEventHandler = this.onBodyChangeEventHandler.bind(this);
    this.onSubmitEventHandler = this.onSubmitEventHandler.bind(this);
  }
  onBodyChangeEventHandler(event) {
    this.setState(() => {
      return {
        body: event.target.value,
      };
    });
  }
  onTitleChangeEventHandler(event) {
    const newTitle = event.target.value;

    if (newTitle.length <= 50) {
      this.setState({
        title: newTitle,
        showError: false,
      });
    } else {
      this.setState({
        title: newTitle,
        showError,
      });
    }
  }
  onSubmitEventHandler(event) {
    event.preventDefault();
    if (this.state.title.length > 50) {
      alert("Judul tidak boleh melebihi 50 karakter");
    }
    this.props.addNote({
      title: this.state.title,
      body: this.state.body,
    });
  }
  render() {
    const remainingCharacters = 50 - this.state.title.length;
    return (
      <div className="note-input">
        <h2>Buat catatan</h2>
        <form onSubmit={this.onSubmitEventHandler}>
          <p className="note-input__title__char-limit">Sisa Karakter: {remainingCharacters}</p>
          <input className="note-input__title" type="text" placeholder="Ini adalah judul" required value={this.state.title} onChange={this.onTitleChangeEventHandler} />
          <textarea className="note-input__body" placeholder="Tuliskan catatanmu disini..." required value={this.state.body} onChange={this.onBodyChangeEventHandler}></textarea>
          <button type="submit">Buat</button>
        </form>
      </div>
    );
  }
}
export default NoteInput;
