import React, { Component } from 'react';
import { Link } from 'react-router-dom';


export default class Navbar extends Component {
  render() {
    return (
      <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
        <Link to="/" className="navbar-brand">Task Manager</Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar" >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="collapsibleNavbar">
          <ul className="navbar-nav mr-auto">
            <li className="navbar-item">
            <Link to="/designees-list" className="nav-link">Designees</Link>
            </li>
            <li className="navbar-item">
            <Link to="/create-task" className="nav-link">Create Task</Link>
            </li>
            <li className="navbar-item">
            <Link to="/create-designee" className="nav-link">Create Designee</Link>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}