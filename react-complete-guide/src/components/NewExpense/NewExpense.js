import ExpenseForm from "./ExpenseForm";
import './NewExpense.css'

const NewExpense = (props) => {
    const expenseDataHandler = (inputData) => {
        const data = {
            ...inputData,
            id : Math.random()
        } ;
        props.onNewExpense(data);
    }
    return (
        <div className="new-expense">
            <ExpenseForm onExpenseData={expenseDataHandler}/>
        </div>
    )
}

export default NewExpense;