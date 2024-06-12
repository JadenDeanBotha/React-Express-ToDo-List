import React, { useState, useEffect } from "react";
import "./App.css";
import ToDoItem from './components/ToDoItem';

function App() {
  // Creating a state component which will hold the ToDo List items
  const [content, setContent] = useState({webProjects: []});

  // Created a function which can be used to update the content
  const updateState = (data) => {
    console.log(data);
    setContent(data);
  }

  // Created a useEffect which fetches the current data being stored
  useEffect(() => {
    fetch('/api', {
      method: "GET",
      headers: {
        "Content-type": "application/json",
      }
    })
    .then((response) => response.json())
    .then((response) => {
      // Currently, no databse attached
      setContent(response)
    })
  })

  return (
    <div className="App">
      <h1>Testing a few things lol</h1>
      {content.webProjects.map((project) => (
        <div className="">
          <ToDoItem
            key = {project.ID}
            id = {project.ID}
            title = {project.TITLE}
            description = {project.DESCRIPTION}
            category = {project.CATEGORY}
          />
        </div>
      ))}
    </div>
  );
}

export default App