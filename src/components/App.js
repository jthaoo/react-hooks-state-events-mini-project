import React, { useState } from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";
// console.log("Here's the data you're working with");
// console.log({ CATEGORIES, TASKS });


function App() {

  const [list, setList] = useState(TASKS)
  const [selectedCategory, setCategory] = useState('All')
  const [details, setDetails] = useState('')
  const [chosenCat, setChosenCat] = useState('')

function handleCatClick(cat){
  setCategory(cat)
}

function handleTaskFormSubmit(e){
  e.preventDefault()
  const newItem = {text : details, category : chosenCat}
  setList([...list, newItem])
  setChosenCat('')
  setDetails('')
}

function handleTextChange(e){
  setDetails(e.target.value)
}

function handleCatChoose(e){
  setChosenCat(e.target.value)
}

const filteredList = list.filter(item => selectedCategory === 'All' ? true : item.category === selectedCategory)


console.log(list)

  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter categories = {CATEGORIES} selectedCategory = {selectedCategory} handleCatClick = {handleCatClick}/>
      <NewTaskForm 
      categories = {CATEGORIES} 
      handleCatChoose = {handleCatChoose} 
      onTaskFormSubmit = {handleTaskFormSubmit} 
      handleTextChange ={handleTextChange} 
      details ={details}
      chosenCat = {chosenCat}
      />
      <TaskList list = {filteredList} setList = {setList}/>
    </div>
  );
}

export default App;
