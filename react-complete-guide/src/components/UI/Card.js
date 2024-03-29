import './Card.css';

function Card(props){
    const classes = 'card ' + props.className ;
    return(
        <ul>
            <div className={classes}>{props.children}</div>
        </ul>
    );
}

export default Card;