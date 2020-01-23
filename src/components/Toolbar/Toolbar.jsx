import React, { Component } from 'react';
import './Toolbar.css';

class Toolbar extends Component {

  handleFilter(e) {
    this.props.handleFilter(e.target.value);
  }

  render() {
    return (
      <div className="toolbar">
        <div className="content">
          <h4>Notes</h4>
          <div className="filter-add">
          <div className="filter-txt">Filter</div>
          <select name="filter" id="filter" onChange={this.handleFilter.bind(this)}>
              <option value="">Select One...</option>
              <option value="React">React</option>
              <option value="Nodejs">Nodejs</option>
              <option value="Naveen">Naveen</option>
              <option value="AWS">AWS</option>
              <option value="Wysa">Wysa</option>
            </select>
            <button onClick={this.props.handleShowAddModal}>Add</button>
          </div>
        </div>
      </div>
    );
  }
}

export default Toolbar;