import React, { Component } from 'react';
import './AddModal.css'

class Modal extends Component {

  state = {
    title: "",
    content: "",
    labels: [],
    stop: false
  }

  onChange(e) {
    const labels = this.state.labels
    let index
    if (e.target.checked) {
      labels.push(e.target.value)
    } else {
      index = labels.indexOf(e.target.value)
      labels.splice(index, 1)
    }

    this.setState({ labels: labels })
  }

  handleTnC(e, type) {
    this.setState({ [type == 't' ? 'title': 'content' ]: e.target.value })
  }

  handleSubmit() {
    this.props.handleAdd({
      title: this.state.title,
      content: this.state.content,
      labels: this.state.labels
    })
  }

  render() {
    let editMode = this.props.editMode;
    let note = this.props.note;

    if(editMode && !this.state.stop) {
      this.setState({
        ...note,
        stop: true
      })
    } else if(!editMode && this.state.stop) {
      this.setState({
        stop: false,
        title: '',
        content: '',
        label: []
      })
    }

    return (
      <div className={`modal-backdrop ${this.props.showAddModal ? 'show' : 'hide'}`}>
        <div className="modal">
          <div className="title">
            <div>
              {editMode ? `Editing: ${note.title}`: `Add new note`}
            </div>
            <div className="trash-edit">
              <i class="fa fa-close" onClick={this.props.handleShowAddModal}></i>
            </div>
          </div>
          <div className="content">
            <form>
              <div>
                <input type="text" name="title" value={this.state.title} placeholder="Enter the title" onChange={e => this.handleTnC.bind(this, e, 't')()} />
              </div>
              <div>
                <textarea rows={6} placeholder="Enter the content" value={this.state.content} onChange={e => this.handleTnC.bind(this,e, 'c')()}/>
              </div>
              Select Labels:
              <div className="checkboxes">
                <div>
                  Naveen <input type="checkbox" name="label" value="Naveen" checked={this.state.labels.indexOf("Naveen") > -1 ? true: false} onChange={this.onChange.bind(this)} />
                </div>
                <div>
                  AWS<input type="checkbox" name="label" value="AWS" checked={this.state.labels.indexOf("AWS") > -1 ? true: false} onChange={this.onChange.bind(this)} />
                </div>
                <div>
                  React <input type="checkbox" name="label" value="React" checked={this.state.labels.indexOf("React") > -1 ? true: false} onChange={this.onChange.bind(this)} />
                </div>
                <div>
                  Nodejs <input type="checkbox" name="label" value="Nodejs" checked={this.state.labels.indexOf("Nodejs") > -1 ? true: false} onChange={this.onChange.bind(this)} />
                </div>
                <div>
                  Wysa<input type="checkbox" name="label" value="Wysa" checked={this.state.labels.indexOf("Wysa") > -1 ? true: false} onChange={this.onChange.bind(this)} />
                </div>
              </div>
              <button onClick={e => { e.preventDefault(); this.handleSubmit.bind(this)()}}>Submit</button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Modal;