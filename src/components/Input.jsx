import React from 'react'
import '../stylesheet/Input.css'

function Input({label, name, input, setInput}) {

    const handleChange = (e) => {
        const {name, value} = e.target
        setInput({...input, [name]: value})
    }

    return (
        <div className='col-input'>
            <label className='label'>{label}</label>
            <input data-testid={name} placeholder={name} value={input.name} name={name} onChange={handleChange} />
        </div>
    )
}

export default Input