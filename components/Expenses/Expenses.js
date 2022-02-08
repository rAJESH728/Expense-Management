import React, { useState } from "react";

import "./Expenses.css";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import ExpenseList from "./ExpenseList";
import ExpenseChart from "./ExpenseChart";

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState("2020");
  const selectedDropDown = (selectedYear) => {
    setFilteredYear(selectedYear);
  };
  const filteredList = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });
  

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          defaultSelected={filteredYear}
          onSelectedDropDown={selectedDropDown}
        />
        <ExpenseChart expenses={filteredList} />
        <ExpenseList items={filteredList} />
      </Card>
    </div>
  );
};

export default Expenses;
