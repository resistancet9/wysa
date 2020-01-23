import React, { Component } from 'react';
import './Modal.css'

class Modal extends Component {
  render() {
    return (
      <div>
        <div className={`view-modal modal ${this.props.showModal ? 'animate' : ''}`}>
          <div className="title">
            <div>
              {this.props.note.title}
            </div>
            <div className="trash-edit">
              <i class="fa fa-close" onClick={this.props.handleShowModal}></i>
            </div>
          </div>
          <div className="content">
          {this.props.note.content}
          </div>
        </div>
      </div>
    );
  }
}

export default Modal;