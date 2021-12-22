import React from 'react';
import "../../assets/style.css"


const PageContainer = (props) => {
    return (
        <div className = "bigContainer">
            <h1>{props.appname} App</h1>
            <h2>Welcome !</h2>
            <div className = "container">
                {props.children}
            </div>

        </div>
    )
}

export default PageContainer;