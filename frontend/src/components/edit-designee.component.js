
import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

export default class EditDesignee extends Component {
  constructor(props) {
    super(props);

    this.onChangeName = this.onChangeName.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      name: '',
    }
  }
  
  componentDidMount() {
    axios.get('http://localhost:5000/designees/'+this.props.match.params.id)
      .then(response => {
        this.setState({
          name: response.data.name,
        })   
      })
      .catch(function (error) {
        console.log(error);
      })
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

    axios.post('http://localhost:5000/designees/update/' + this.props.match.params.id, designee)
      .then(res => console.log(res.data));
    window.location = '/designee-list';
  }

  render() {
    return (
      <div>
        <h3>Edit Designee</h3>
        <form onSubmit={this.onSubmit}>
          <div className="form-group"> 
            <label>Name </label>
            <label style={{color:'red'}}>＊ </label>
            <input  type="text"
                required
                className="form-control"
                value={this.state.name}
                onChange={this.onChangeName}
                />
          </div>
          <div className="form-group">
            <div className="btn-toolbar" role="toolbar" aria-label="Toolbar with button groups">
              <div className="input-group mr-2">
                <input type="submit" value="Submit" className="btn btn-primary" /> 
              </div>
              <div className="btn-group" role="group">
                <Link to="/designee-list">
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