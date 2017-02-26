import React, {Component} from 'react';
const GW2_BANNER = require('../../../assets/poe-banner.jpg');
require('./talent-calculator.css');

class PathOfExileCalc extends Component {
  constructor() {
    super();
    this.state = {
      notes: [],
      newTitle: '',
      newUrl: '',
      newNote: ''
    };
  }
  componentDidMount() {
    if (JSON.parse(localStorage.getItem("POETalentCalcNotes"))) {
      this.setState({notes: JSON.parse(localStorage.getItem("POETalentCalcNotes"))});
    }
  }
  updateFormStateData(key, event) {
    switch (key) {
    case 'newTitle':
      this.setState({newTitle: event.target.value});
      break;
    case 'newUrl':
      this.setState({newUrl: event.target.value});
      break;
    case 'newNote':
      this.setState({newNote: event.target.value});
    }
  }
  writeNote(event) {
    event.preventDefault();
    let newNoteObj = {title: this.state.newTitle, url: this.state.newUrl, note: this.state.newNote};
    let newNotesArray = this.state.notes;
    newNotesArray.push(newNoteObj);
    this.setState({notes: newNotesArray});
    localStorage.setItem("POETalentCalcNotes", JSON.stringify(newNotesArray));
  }
  deleteNote(ind) {
    let newNotesArray = this.state.notes;
    newNotesArray.splice(ind, 1);
    this.setState({notes: newNotesArray});
    localStorage.setItem("POETalentCalcNotes", JSON.stringify(newNotesArray));
  }
  render() {
    let noteList;
    if (this.state.notes.length == 0) {
      noteList = null;
    } else {
      noteList = this.state.notes.map((ele, ind) => {
        return (
          <div key={ind}>
            <a target="_blank" href={ele.url}><h2>{ele.title}</h2></a>
            <p>{ele.note}</p>
            <button className="talent-calc-buttons" onClick={this.deleteNote.bind(this, ind)}>Delete</button>
          </div>
        );
      });
    }
    return (
      <div>
        <a target="_blank" href="http://poeplanner.com">
          <img className="link-banner" src={GW2_BANNER} />
        </a>
        <br/>
        <div>
          <form onSubmit={this.writeNote.bind(this)}>
            <input type="text" placeholder="Name Your Build Here" onChange={this.updateFormStateData.bind(this, 'newTitle')}></input>
            <br/>
            <input type="text" placeholder="Input Quick Link Url Here" onChange={this.updateFormStateData.bind(this, 'newUrl')}></input>
            <br/>
            <input type="text" placeholder="Write Notes Here" onChange={this.updateFormStateData.bind(this, 'newNote')}></input>
            <br/>
            <input className="small-calc-button" type="submit"></input>
          </form>
        </div>
        <div>
          <ul>
            {noteList}
          </ul>
        </div>
      </div>
    );
  }
}

export default PathOfExileCalc;
