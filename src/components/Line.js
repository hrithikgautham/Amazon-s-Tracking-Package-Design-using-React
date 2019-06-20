import React from 'react';
import "./LineStyles.css";

function Line(props){
    return (
        <div className = "line-container">
            <div className = "line" style = {{width : "20%", height : "100%"}}></div>
        </div>
    )
}

export default Line;