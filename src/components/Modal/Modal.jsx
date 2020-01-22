import React, { Component } from 'react';
import './Modal.css'

class Modal extends Component {
  render() {
    return (
      <div className={`modal-backdrop ${this.props.showModal ? 'show': 'hide'}`}>
        <div className="modal">
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