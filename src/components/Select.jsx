import React from 'react'
import '../stylesheet/Input.css'

function Select({label, name, input, setInput, itemone, itemtwo, itemthree}) {

    const handleChange = (e) => {
        const {name, value} = e.target
        setInput({...input, [name]: value})
    }

    return (
        <div className='col-input'>
            <label className='label'>{label}</label>
            <select onChange={handleChange} value={input.name} name={name} data-testid={name}>
                <option value=''>Select {name}</option>
                <option value={itemone}>{itemone}</option>
                <option value={itemtwo}>{itemtwo}</option>
                <option value={itemthree}>{itemthree}</option>
            </select>
        </div>
    )
}

export default Select