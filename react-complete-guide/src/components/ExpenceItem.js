import './ExpenceItem.css' ;

function ExpenceItem() {
    const expenseDate = new Date(2022, 7, 8);
    const expenseDesription = 'Car Insurance';
    const expensePrice = 90 ;
    return (
        <div className='expense-item'>
            <div>{expenseDate.toISOString()}</div>
            <div className='expense-item__description'>
                <h1>{expenseDesription}</h1>
                <div className='expense-item__price'>${expensePrice}</div>
            </div>
        </div>
    );
}

export default ExpenceItem;