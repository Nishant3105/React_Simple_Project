import classes from "./Card.css"

const Card=(props)=>{
    return <div className={`${classes.card} ${props.cssClassName}`}>{props.children}</div>
}

export default Card