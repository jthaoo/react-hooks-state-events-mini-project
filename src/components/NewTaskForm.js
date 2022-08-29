import React from "react";

function NewTaskForm( { categories, onTaskFormSubmit, details, handleTextChange, handleCatChoose, chosenCat } ) {

  const minusAll = categories.filter(cat => cat !== 'All')
  const categoryList = minusAll.map(cat => {
    return <option key = {cat} value = {cat} >{cat}</option>
  })

  return (
    <form className="new-task-form" onSubmit ={onTaskFormSubmit}>
      <label>
        Details
        <input type="text" name="text" onChange ={handleTextChange} value = {details} />
      </label>
      <label>
        Category
        <select name="category" onChange = {handleCatChoose} value = {chosenCat}>
          {categoryList}
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;
