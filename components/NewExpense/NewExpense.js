import React, { useState } from "react";
import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";

const NewExpense = (props) => {
  const [isEditing, setIsEditing] = useState(false);

  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      id: Math.random().toString(),
      ...enteredExpenseData,
    };
    props.onGetNewExpense(expenseData);
    setIsEditing(false);
  };
  const showExpenseForm = () => setIsEditing(true);
  const notShowExpenseForm = () => setIsEditing(false);

  return (
    <div className="new-expense">
      {!isEditing && <button onClick={showExpenseForm}>Add Expense</button>}
      {isEditing && (
        <ExpenseForm
          onNotShow={notShowExpenseForm}
          onCancel={notShowExpenseForm}
          onSaveExpenseData={saveExpenseDataHandler}
        />
      )}
    </div>
  );
};

export default NewExpense;
