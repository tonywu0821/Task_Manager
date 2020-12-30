# Task_Manager
This is a single-page application that can help people manage tasks. 
It is created with the MongoDB, Express.js, React.js, Node.js (MERN) stack.

## Demonstration
[Demo-Heroku](https://guarded-mesa-78058.herokuapp.com/)
[Demo-AWS](http://3.19.53.239/)

* **Create designee:** Create a designee to take care of tasks.
![](demo/create-designee.png)

* **Designees:** Show current designees created by the user.
![](demo/designees.png)

* **Create tasks:** Create a Task and appoint someone to it. 
![](demo/create-new-task.png)

* **Task Manager:** Show current Tasks information.
![](demo/tasks.png)

## Directory Structure

    Task-Manager
    ├── README.md
    │
    ├── frontend              
    │   └─── src 
    │        ├── index.js
    │        ├── App.js
    │        ├── package.json         # NPM Package file
    │        └── components           # React components
    │           
    │
    └── backend
        ├── server.js                 
        ├── package.json              # NPM Package file
        ├── .env                      # Environment variables file
        ├── routes                    # Backend routes files
        └── models                    # MongoDB schema files
