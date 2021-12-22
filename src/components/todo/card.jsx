import React from 'react'

const Card = (props) => {

    return (
        <div className = "card">
            <h3>{props.data.name}</h3>
            <p>Description: {props.data.description}</p>
            <p>Deadline: {props.data.deadLine}</p>
            <p>Status: {props.data.status}</p>
            {props.children}
        </div>
    )
}

export default Card;