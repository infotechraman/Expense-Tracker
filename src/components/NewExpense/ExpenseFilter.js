import React from "react";
import './ExpenseFilter.css';

const ExpenseFilter = (props) => {

    const dropdownChangeHandler = (event) => {
        console.log(event);
        props.onChangeFilter(event.target.value);
    }
    let yearArr=[];   
      for(let i=2015; i<= new Date().getFullYear(); i++){
    yearArr[i] = i;
    }

  return (
    <div className="expenses-filter">
      <div className="expenses-filter__control">
        <label>Filter by year</label>
        <select value={props.selected} onChange={dropdownChangeHandler}>
          {/* <option value="2022">2022</option>
          <option value="2021">2021</option>
          <option value="2020">2020</option>
          <option value="2019">2019</option> */}
              {yearArr.map((data)=>{
                               return <option value={data}>{data}</option>
                 })}
        </select>
      </div>
    </div>
  );
};

export default ExpenseFilter;