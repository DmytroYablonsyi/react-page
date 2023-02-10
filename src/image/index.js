import React from "react";
import './index.css'

const Image = (props) => {
    return (
        <img className="image" src={props.source}/>
    )
}
export default Image