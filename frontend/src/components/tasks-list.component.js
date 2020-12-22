import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons'
import { faEdit } from '@fortawesome/free-solid-svg-icons'


const Task = props => (
  <tr>
    <td>{props.task.taskName}</td>
    <td>{props.task.description}</td>
    <td>{props.task.designee}</td>
    <td>{props.task.status}</td>
    <td>{props.task.startDate.substring(0,10)}</td>
    <td>{props.task.endDate.substring(0,10)}</td>

    <td>
      <div className="btn-toolbar" role="toolbar" aria-label="Toolbar with button groups">
        <div className="btn-group mr-3" id="tableButton" role="group" >
          <Link to={"/edit-task/"+props.task._id} >
            <FontAwesomeIcon icon={faEdit} />
          </Link>
        </div>
        <div className="btn-group" id="tableButton" role="group">
          <a href="#" onClick={() => { props.deleteTask(props.task._id) }} style={{color:'red'}}>
            <FontAwesomeIcon icon={faTrashAlt} />
          </a>
        </div>
      </div>
    </td>
  </tr>
)

export default class TasksList extends Component {
  constructor(props) {
    super(props);

    this.deleteTask = this.deleteTask.bind(this)
    this.state = {tasks: []};
  }

  componentDidMount() {
    axios.get('http://localhost:5000/tasks/')
      .then(response => {
        // get all the fields of the job (id, discription, duration, ...) 
        console.log(response.data);
        this.setState({ tasks: response.data });        
      })
      .catch((error) => {
        console.log(error);
      })
  }

  deleteTask(id) {
    axios.delete('http://localhost:5000/tasks/'+id)
      .then(response => { console.log(response.data)});
    this.setState({
      tasks: this.state.tasks.filter(el => el._id !== id)
    })
  }

  taskList() {
    return this.state.tasks.map(currentTask => {
      return <Task task={currentTask} deleteTask={this.deleteTask} key={currentTask._id}/>;
    })
  }

  render() {
    return (
      <div className="resposiveTable">
        <h3>Tasks</h3>
        <table className="table">
          <thead>
            <tr>
              <th>Task</th>
              <th>Description</th>
              <th>Designee</th>
              <th>Status</th>
              <th>Start Date</th>
              <th>Due Date</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            { this.taskList() }
          </tbody>
        </table>
      </div>
    )
  }
}


