import React from "react";

export function Generate(props) {
    return (
        <button className="btn btn-outline-warning " onClick={e => { props.handleClick(e); }}> Generate <i className="fas fa-bolt"></i></button>
    );
}

export default Generate;