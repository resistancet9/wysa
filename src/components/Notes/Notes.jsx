import React, { Component } from 'react';
import Note from './../Note/Note';
import './Notes.css';
import Toolbar from '../Toolbar/Toolbar';
import Modal from '../Modal/Modal';
import AddModal from '../AddModal/AddModal';

class Notes extends Component {
  state = {
    notes: [],
    showAddModal: false,
    showModal: false,
    note: {},
    editMode: false,
    idx: -1
  };

  componentDidMount() {
    let notes = localStorage.getItem('notes');
    let parsedNotes = notes ? JSON.parse(notes) : [];

    this.setState({
      notes: parsedNotes
    })
  }

  handleShowAddModal(set) {
    this.setState(prevState => {
      return {
        showAddModal: !prevState.showAddModal,
        editMode: prevState.editMode ? false: prevState.editMode,
        note: prevState.editMode ? {}: prevState.note,
        idx: prevState.editMode ? {}: prevState.idx
      }
    })
  }

  handleShowModal() {
    this.setState(prevState => {
      return {
        showModal: !prevState.showModal
      }
    })
  }

  handleShowNote(idx) {
    this.setState(prevState => {
      return {
        showModal: !prevState.showModal,
        note: this.state.notes[idx]
      }
    })
  }

  handleAdd(data) {
    let notes = localStorage.getItem('notes');
    let parsedNotes = notes ? JSON.parse(notes) : [];

    if(this.state.editMode) {
      parsedNotes[this.state.idx].title = data.title;
      parsedNotes[this.state.idx].content = data.content;
      parsedNotes[this.state.idx].labels = data.labels;
    } else {
      parsedNotes.push(data);
    }

    this.setState({
      notes: parsedNotes,
      showAddModal: false
    });

    localStorage.setItem('notes', JSON.stringify(parsedNotes));
  }

  handleDelete(idx) {
    let notes = [...this.state.notes];
    notes.splice(idx, 1);

    this.setState({
      notes: notes
    });

    localStorage.setItem('notes', JSON.stringify(notes));
  }

  toggleEditMode(idx) {
    this.setState(prevState => {
      return {
        showAddModal: true,
        note: this.state.notes[idx],
        editMode: true,
        idx
      }
    })
  }

  handleFilter(filter) {
    let notes = localStorage.getItem('notes');
    let parsedNotes = notes ? JSON.parse(notes) : [];
    notes = filter == "" ? parsedNotes: parsedNotes.filter(n => n.labels.indexOf(filter) > -1 )
    this.setState({
      notes
    })
  }

  render() {

    let notes = this.state.notes;

    return (
      <div className="notes">
        <Toolbar handleFilter={ this.handleFilter.bind(this)} handleShowAddModal={this.handleShowAddModal.bind(this)} />
        <Modal note={this.state.note} showModal={this.state.showModal} handleShowModal={this.handleShowModal.bind(this)}/>
        <AddModal note={this.state.note} editMode={this.state.editMode} handleAdd={this.handleAdd.bind(this)} showAddModal={this.state.showAddModal} handleShowAddModal={this.handleShowAddModal.bind(this)}/>
        <div className="notes-collection">
          {notes && notes.length > 0 ? notes.map((note, index) => {
            return <Note toggleEditMode={this.toggleEditMode.bind(this)} handleDelete={this.handleDelete.bind(this)} note={{...note, index}} key={index} handleShowNote={this.handleShowNote.bind(this)} />
          }): <div className="no-notes">
            No notes available. Please add.</div>}
        </div>
      </div>
    );
  }
}

export default Notes;