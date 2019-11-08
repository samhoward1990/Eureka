import React from "react";

export function Generate(props) {
    return (
        <button onClick={e => { props.handleClick(e); }}> Generate</button>
    );
}

export default Generate;