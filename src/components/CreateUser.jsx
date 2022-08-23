import React, { useState } from 'react'
import Input from './Input'
import Select from './Select'

function CreateUser({onAdd}) {

    const [input, setInput] = useState({
        firstName : "",
        lastName : "",
        email : "",
        role : "",
        status : ""
    })

    const [errors, setErrors] = useState({
        firstNameError : "",
        lastNameError : "",
        emailError : "",
        roleError : "",
        statusError : ""
    })

    const validate = () => {
        let firstNameError = "";
        let lastNameError = "";
        let emailError = "";
        let roleError = "";
        let statusError = "";

        if(!input.firstName) {
            firstNameError = "firstname can not be blank"
        }

        if(!input.lastName) {
            lastNameError = "lastname can not be blank"
        }

        if(!input.email.includes('@')) {
            emailError = "invaild email"
        }

        if(!input.role) {
            roleError = "select a role"
        }

        if(!input.status) {
            statusError = "select a role"
        }

        if(emailError || firstNameError || lastNameError || roleError || statusError ) {
            setErrors({ emailError, firstNameError, lastNameError, roleError, statusError })
            return false
        }

        return true;
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const isvalid = validate();
        if(isvalid) {
            onAdd(input);
        }
    }

    return (
        <div className='form-container' data-testid='form-section'>
            <form className='form-field'>
                <div className='input-field'>
                    <Input label="First-name" name="firstName" input={input} setInput={setInput} />
                    <span data-testid='err' className='err'>{errors.firstNameError}</span>
                </div>
                <div className='input-field'>
                    <Input label="Last-name" name="lastName" input={input} setInput={setInput} />
                    <span data-testid='err' className='err'>{errors.lastNameError}</span>
                </div>
                <div className='input-field'>
                    <Input label="Email" name="email" input={input} setInput={setInput} />
                    <span data-testid='err' className='err'>{errors.emailError}</span>
                </div>
                <div className='select'>
                    <div className='select-field'>
                        <Select label="Role" name="role" input={input} setInput={setInput} itemone="accountant" itemtwo="doctor" itemthree="admin" />
                        <span className='err'>{errors.roleError}</span>
                    </div>
                    <div className='select-field'>
                        <Select label="Status" name="status" input={input} setInput={setInput} itemone="active" itemtwo="inactive" />
                        <span className='err'>{errors.statusError}</span>
                    </div>
                </div>
                <div className='btn-field'>
                    <button data-testid='btn-add' className='btn-add' onClick={handleSubmit} type='button'>ADD USER</button>
                </div>
            </form>
        </div>
        
    )
}

export default CreateUser