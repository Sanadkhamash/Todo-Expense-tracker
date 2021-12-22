import React from 'react'

const Buttons = (props) => {
    let data1 = props.data;


    return (
        <div className='buttons'>
            <button className="delete" onClick={()=>{
                data1.splice(props.indx,1);
                localStorage.setItem("todos", JSON.stringify(data1));
                props.setter(JSON.parse(localStorage.getItem("todos")));
            }}>Delete Card</button>
            <button className='done' onClick = {()=>{
                data1[props.indx].status = "Done";
                localStorage.setItem("todos", JSON.stringify(data1));
                props.setter(JSON.parse(localStorage.getItem("todos")));
            }}>Done</button>
        </div>
    )
}

export default Buttons;