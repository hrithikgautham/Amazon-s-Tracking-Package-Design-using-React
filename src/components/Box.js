import React from 'react';
import "./BoxStyles.css";

function Box(props){
    return (
        <div className = "box-container">
            <div className = "tick">
                <div></div>
                <div></div>
            </div>
        </div>
    )
}

export default Box;