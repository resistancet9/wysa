import React, { Component } from 'react';
import './Note.css';
const labelColours = ['red', 'orange', 'green', 'blue', 'yellow'];

class Note extends Component {
  render() {
    let { title, labels, content, index} = this.props.note;

    return (
      <div className="note-container">
        <div className="note">
          <div className="title">
            <div className="ellipsise" onClick={e => this.props.handleShowNote(index)}>
              {title}
            </div>
            <div className="trash-edit" >
              <i className="fa fa-trash" onClick={e => this.props.handleDelete(index)}></i>
              <i className="fa fa-edit" onClick={e => this.props.toggleEditMode(index)}></i>
            </div>
          </div>
          <div className="content">
            {content}
          </div>
        </div>
        <div className="labels">
          {labels.map((label, idx) => {
            return <div key={idx} className={`label ${labelColours[idx%labelColours.length]}`}>{label}</div>
          })}
        </div>
      </div>
    );
  }
}

export default Note;