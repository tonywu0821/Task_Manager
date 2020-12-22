
import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

export default class CreateDesignee extends Component {
  constructor(props) {
    super(props);
    this.onChangeName = this.onChangeName.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.state = {
      name: '',
    }
  }

  onChangeName(e) {
    this.setState({
      name: e.target.value
    })
  }

  onSubmit(e) {
    e.preventDefault();
    const designee = {
      name: this.state.name,
    }

    console.log(designee);

    axios.post('http://localhost:5000/designees/add', designee)
      .then(res => console.log(res.data));
    this.setState({
      name: '',
    })
    window.location = '/designees-list';
  }

  render() {
    return (
      <div>
        <h3>Create New Designee</h3>
        <form onSubmit={this.onSubmit}>
          <div className="form-row">
            <div className="form-group col-md-6"> 
              <label>Designee's Name </label>
              <input  type="text"
                required
                className="form-control"
                value={this.state.name}
                onChange={this.onChangeName}
                />
            </div>
          </div>
          <div className="form-group">
            <div className="btn-toolbar" role="toolbar" aria-label="Toolbar with button groups">
              <div className="input-group mr-2">
                <input type="submit" value="Submit" className="btn btn-primary" /> 
              </div>
              <div className="btn-group" role="group">
                <Link to="/">
                  <input type="button" value="Cancel" className="btn btn-danger" />
                </Link>
              </div>
            </div>
          </div>
        </form>
      </div>
    )
  }
}