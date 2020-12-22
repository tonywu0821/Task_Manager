import React, { Component } from 'react';
import axios from 'axios';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import { Link } from 'react-router-dom';


export default class EditTask extends Component {
  constructor(props) {
    super(props);

    this.onChangeTaskName = this.onChangeTaskName.bind(this);
    this.onChangeDescription = this.onChangeDescription.bind(this);
    this.onChangeDesignee = this.onChangeDesignee.bind(this);
    this.onChangeStatus = this.onChangeStatus.bind(this);
    this.onChangeStartDate = this.onChangeStartDate.bind(this);
    this.onChangeEndDate = this.onChangeEndDate.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      taskName: '',
      description: '',
      designee:'',
      status: '',
      startDate: new Date(),
      endDate: new Date(),
      designees: []
    }
  }

  componentDidMount() {
    axios.get('http://localhost:5000/tasks/'+this.props.match.params.id)
      .then(response => {
        this.setState({
          taskName: response.data.taskName,
          description: response.data.description,
          designee: response.data.designee,
          status: response.data.status,
          startDate: new Date(response.data.startDate),
          endDate: new Date(response.data.endDate)
        })   
      })
      .catch(function (error) {
        console.log(error);
      })
    axios.get('http://localhost:5000/designees/')
      .then(response => {
        if (response.data.length > 0) {
          this.setState({
            designees: response.data.map(designee => designee.name),
            })
          }
        })
      .catch((error) => {
        console.log(error);
      })
  }

  onChangeTaskName(e) {
    this.setState({
      taskName: e.target.value
    })
  }

  onChangeDescription(e) {
    this.setState({
      description: e.target.value
    })
  }

  onChangeDesignee(e) {
    this.setState({
      designee: e.target.value
    })
  }

  onChangeStatus(e) {
    this.setState({
      status: e.target.value
    })
  }

  onChangeStartDate(date) {
    this.setState({
      startDate: date
    })
  }
  onChangeEndDate(date) {
    this.setState({
      endDate: date
    })
  }


  onSubmit(e) {
    e.preventDefault();
    const task = {
      taskName: this.state.taskName,
      description: this.state.description,
      designee: this.state.designee,
      status: this.state.status,
      startDate: this.state.startDate,
      endDate:this.state.endDate,
    }

    console.log(task);

    axios.post('http://localhost:5000/tasks/update/' + this.props.match.params.id, task)
      .then(res => console.log(res.data));
    window.location = '/';
  }

  render() {
    return (
    <div>
      <h3>Edit Task</h3>
      <form onSubmit={this.onSubmit}>
        <div className="form-group"> 
          <label>Task Name </label>
          <input  type="text"
              required
              className="form-control"
              value={this.state.taskName}
              onChange={this.onChangeTaskName}
              />
        <div className="form-group"> 
          <label>Description </label>
          <input  type="text"
              required
              className="form-control"
              value={this.state.description}
              onChange={this.onChangeDescription}
              />
        </div>
        </div>
        <div className="form-group"> 
          <label>Designee</label>
          <select ref="userInput"
            required
            className="form-control"
            value={this.state.designee}
            onChange={this.onChangeDesignee}>
            {
              this.state.designees.map(function(designee) {
                return <option 
                  key={designee}
                  value={designee}>{designee}
                  </option>;
              })
            }
          </select>
        </div>
        <div className="form-group"> 
          <label>Status </label>
          <input  type="text"
              className="form-control"
              value={this.state.status}
              onChange={this.onChangeStatus}
              />
        </div>
        <div className="form-group">
          <label>Start Date </label>
          <div>
            <DatePicker
              selected={this.state.startDate}
              onChange={this.onChangeStartDate}
            />
          </div>
        </div>
        <div className="form-group">
          <label>Start Date </label>
          <div>
            <DatePicker
              selected={this.state.startDate}
              onChange={this.onChangeEndDate}
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