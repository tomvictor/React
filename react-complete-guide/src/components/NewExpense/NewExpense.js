import ExpenseForm from "./ExpenseForm";
import './NewExpense.css'
import {useState} from "react";

const NewExpense = (props) => {
    const [isEditing, setIsEditing] = useState(false);
    const expenseDataHandler = (inputData) => {
        const data = {
            ...inputData,
            id: Math.random()
        };
        props.onNewExpense(data);
    }

    const startEditingHandler = () => {
        setIsEditing(true);
    }
    const stopEditingHandler = () => {
        setIsEditing(false);
    }
    return (

        <div className="new-expense">
            {!isEditing && <button onClick={startEditingHandler}>Add new Expense</button>}
            {isEditing && <ExpenseForm onExpenseData={expenseDataHandler} cancelEditHandler={stopEditingHandler}/>}
        </div>

    );
};

export default NewExpense;