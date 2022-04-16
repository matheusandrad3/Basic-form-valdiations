import React from 'react'

function Button ({name, click, type}) {
    return (
    <button type ={type} onClick={click}>{name}</button>);
}

export default Button;