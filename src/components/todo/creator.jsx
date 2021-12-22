import React from 'react'

const Creator = (props) => {

    return (
        <div className = "createForm">
            <form onSubmit={(e)=> {
                e.preventDefault();
                props.data.push({
                name:e.target.title.value,
                description: e.target.description.value,
                deadLine: e.target.ddLine.value,
                status: "Pending",
            })
            localStorage.setItem("todos", JSON.stringify(props.data))
            props.setter(JSON.parse(localStorage.getItem("todos")));
            }}>
                <input required name="title" type="text" placeholder='Card Title' />
                <input required name="description" type="text" placeholder='Description' />
                <input required type="date" name="ddLine" id="ddLine" />
                <input type="submit" value="Submit" />
            </form>
        </div>
    )
}

export default Creator;