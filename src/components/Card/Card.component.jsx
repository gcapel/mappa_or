import React from "react";
import "./Card.styles.scss";

const Card = (props) => {
    return(
    <div className="card">
        {props.testo}
        </div>)
};

export default Card;