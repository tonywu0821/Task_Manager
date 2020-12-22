
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEdit } from '@fortawesome/free-solid-svg-icons'
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons'

const Designee = props => (
  <tr>
    <td>{props.designee.name}</td>
    <td>
      <div className="btn-toolbar" role="toolbar" aria-label="Toolbar with button groups">
        <div className="btn-group mr-3" id="tableButton" role="group">
          <Link to={"/edit-designee/"+props.designee._id}>
            <FontAwesomeIcon icon={faEdit} />
          </Link>
        </div>
        <div className="btn-group" id="tableButton" role="group">
          <a href="#" onClick={() => { props.deleteDesignee(props.designee._id) }} style={{color:'red'}}>
            <FontAwesomeIcon icon={faTrashAlt} />
          </a>
        </div>
      </div>
    </td>
  </tr>
)

export default class DesigneesList extends Component {
  constructor(props) {
    super(props);

    this.deleteDesignee = this.deleteDesignee.bind(this)
    this.state = {designees: []};
  }

  componentDidMount() {
    axios.get('http://localhost:5000/designees/')
      .then(response => {
        console.log(response.data);
        this.setState({ designees: response.data })
      })
      .catch((error) => {
        console.log(error);
      })
  }

  deleteDesignee(id) {
    axios.delete('http://localhost:5000/designees/'+id)
      .then(response => { console.log(response.data)});

    this.setState({
      designees: this.state.designees.filter(el => el._id !== id)
    })
  }

  designeeList() {
    return this.state.designees.map(currentDesignee => {
      return <Designee designee={currentDesignee} deleteDesignee={this.deleteDesignee} key={currentDesignee._id}/>;
    })
  }

  render() {
    return (
      <div className="responsiveTable">
        <h3>Designee</h3>
        <table className="table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            { this.designeeList() }
          </tbody>
        </table>
      </div>
    )
  }
}


