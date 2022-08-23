import React from 'react';
import { FiEdit } from 'react-icons/fi';
import { RiDeleteBin6Line } from 'react-icons/ri';
import '../stylesheet/SingleUser.css'

function SingleUser({user, deleteUser, id, handleEditClick}) {

  return (
    <tr>
      <td>{id + 1}</td>
      <td data-testid={user.firstName}>{user.firstName.toUpperCase()}</td>
      <td>{user.lastName.toUpperCase()}</td>
      <td>{user.email.toUpperCase()}</td>
      <td>{user.role.toUpperCase()}</td>
      <td>{user.status.toUpperCase()}</td>
      <td>
        <div className='action-btn'>
          <FiEdit data-testid={user.lastName} className='icon' onClick={(e) => handleEditClick(e, user)} />
          <RiDeleteBin6Line data-testid={id + 1} onClick={() => deleteUser(id)} className='icon' />
        </div>
      </td>
    </tr>
  )
}

export default SingleUser