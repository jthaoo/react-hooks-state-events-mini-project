import React from "react";
import Task from "./Task";

function TaskList({list, setList}) {


function handleDelete(t){
  const newList = list.filter( item => item.text !== t )
  setList(newList)
}
  

  const elementList = list.map((task) => {
    return <Task key = {task.text} t = {task.text} c = {task.category} handleDelete = {handleDelete} />
  })

  
  // console.log(list)
  return (
    <div className="tasks">
      <ul>
      {elementList}
      </ul>
    </div>
  );
}

export default TaskList;