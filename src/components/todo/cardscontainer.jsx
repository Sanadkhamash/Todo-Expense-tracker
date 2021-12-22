import React from 'react'
import Card from "./card.jsx"
import Buttons from "./buttons.jsx";


const CardsContainer = (props) => {
    return (
        <div className = "cardsContainer">
            {props.data.map((dos,i)=>{
                return <Card key={i} indx = {i} data={dos}>
                            <Buttons indx={i} data = {props.data} setter = {props.setter} />
                        </Card>;
            })}
        </div>
    )
}

export default CardsContainer;