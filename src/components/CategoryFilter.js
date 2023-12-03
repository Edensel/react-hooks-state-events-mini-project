import React from "react";

function CategoryFilter({categories, updateCategory}) {

  function buttonSelection(e){
    e.target.classList.add('selected')
  const buttons = Array.from(document.querySelectorAll('.allButtons'));
  buttons.forEach((button)=> button.classList.remove('selected'))
  e.target.classList.add('selected')
  const category = e.target.textContent
  updateCategory(category)

  }

  return (
    <div className="categories">
      <h5>Category filters</h5>
      {categories.map((category,index)=>{
        return <button className="allButtons" onClick={buttonSelection} key={index}>{category}</button>
      })}
    </div>
  );
}

export default CategoryFilter;