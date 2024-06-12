import React, { useState, useEffect } from "react";

function ToDoItem({id, title, description, category}) {
  
  return (
    <div className="todo-item-block">
      <h1>{id}</h1>
      <h1>{title}</h1>
      <p>{description}</p>
      <p>{category}</p>
    </div>
  )
}

export default ToDoItem;