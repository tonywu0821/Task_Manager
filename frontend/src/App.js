import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import './App.css';

import Navbar from "./components/navbar.component"
import TasksList from "./components/tasks-list.component";
import DesigneesList from "./components/designees-list.component";
import CreateTask from "./components/create-task.component";
import CreateDesignee from "./components/create-designee.component";
import EditTask from "./components/edit-task.component";
import EditDesignee from "./components/edit-designee.component";

function App() {
  return (
    // The component is the code that will be loaded 
    // when a user goes to that path.
    <Router>
      <div className="container">
        <Navbar />
        <br/>
        <Route path="/" exact component={TasksList} />
        <Route path="/designees-list" exact component={DesigneesList} />
        <Route path="/create-task" component={CreateTask} />
        <Route path="/create-designee/" component={CreateDesignee} />
        <Route path="/edit-task/:id" component={EditTask} />
        <Route path="/edit-designee/:id" component={EditDesignee} />
      </div>
    </Router>
  );
}

export default App;
