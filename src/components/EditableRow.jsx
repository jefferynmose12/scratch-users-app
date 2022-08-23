import React from 'react'
import EditSelect from './EditSelect'
import { AiFillSave } from 'react-icons/ai';
import { MdCancel } from 'react-icons/md';
import userEvent from '@testing-library/user-event';

function EditableRow({id , user, handleChange, editFormData, handleCancelClick}) {
  return (
    <tr>
        <td>{id + 1}</td>
        <td>
            <input
                type="text"
                required="required"
                placeholder='firstName'
                name='firstName'
                className='input-space'
                value={editFormData.firstName}
                onChange={handleChange}
                data-testid='editfirstName'
            />
        </td>
        <td>
            <input
                type="text"
                required="required"
                placeholder='lastName'
                name='lastName'
                className='input-space'
                value={editFormData.lastName}
                onChange={handleChange}
                data-testid='editlastName'
            />
        </td>
        <td>
            <input
                type="text"
                required="required"
                placeholder='email'
                name='email'
                className='input-space'
                value={editFormData.email}
                onChange={handleChange}
                data-testid='editemail'
            />
        </td>
        <td>
            <EditSelect 
                value={editFormData.role} 
                handleChange={handleChange} 
                name="role" 
                itemone="accountant" 
                itemtwo="doctor" 
                itemthree="admin"
                edit="editrole"
            />
        </td>
        <td>
            <EditSelect
                value={editFormData.status} 
                handleChange={handleChange} 
                name="status" 
                itemone="active" 
                itemtwo="inactive"
                edit="editstatus"
            />
        </td>
        <td>
            <div className='action-btn'>
                <button type='submit' className='btn-cover'>
                    <AiFillSave data-testid='save' className='icon' />
                </button>
                <MdCancel className='icon' onClick={handleCancelClick} />
            </div>
        </td>
    </tr>
  )
}

export default EditableRow