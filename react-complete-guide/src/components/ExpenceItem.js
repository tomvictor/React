import "./ExpenceItem.css";

function ExpenceItem(props) {
  return (
    <div className="expense-item">
      <div>{props.date}</div>
      <div className="expense-item__description">
        <h1>{props.description}</h1>
        <div className="expense-item__price">${props.price}</div>
      </div>
    </div>
  );
}

export default ExpenceItem;
