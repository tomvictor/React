import "./ExpenseForm.css";

const ExpenseForm = () => {
  const titleChangeHandler = () => {
    console.log("Title Changed") ;
  }
  return (
    <form>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input type="text" onChange={titleChangeHandler}></input>
        </div>

        <div className="new-expense__control">
          <label>Amount</label>
          <input type="number" min=".01" step=".01"></input>
        </div>

        <div className="new-expense__control">
          <label>Date</label>
          <input type="Date" min="2019-01-01" max="2023-01-01"></input>
        </div>

        <div className="expense__actions">
          <button type="submit" className="expense__actions">
            Add Expense
          </button>
        </div>
      </div>
    </form>
  );
};

export default ExpenseForm;
