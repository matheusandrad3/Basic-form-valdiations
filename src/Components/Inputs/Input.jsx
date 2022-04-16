import React from 'react'
import "../Inputs/Input.css"

function Input({type, value, setValue, placeholder, id, name, error}) {
  return (
    <div className='row'>
        <label htmlFor={id}>{name}</label>

        <input type={type}
         name={name}
          id={id}
           value={value}
            placeholder={placeholder}
            onInput={(event) => setValue(event.target.value)} />
            {error?<span>{error}</span> : ''}
    </div>
  )
}

export default Input
