import React, { Component } from 'react';
import './Toolbar.css';

class Toolbar extends Component {
  render() {
    return (
      <div className="toolbar">
        <div className="content">
          <h4>Notes</h4>
          <button onClick={this.props.handleShowAddModal}>Add</button>
        </div>
      </div>
    );
  }
}

export default Toolbar;