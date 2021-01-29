import React from 'react'

export const Input = ({name, handleChange, type}) => {
    return (
        <input name={name} onChange={handleChange} type={type} />
    )
}
