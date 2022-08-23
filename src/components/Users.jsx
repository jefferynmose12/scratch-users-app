import React, { Fragment, useState } from 'react'
import ReadOnly from './ReadOnly'
import '../stylesheet/Users.css'
import EditableRow from './EditableRow';

function Users({users, setUsers, setShowCreate, deleteUser}) {

    const [editFormData, setEditFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        role: "",
        status: "",
    });

    const [editUser, setEditUser] = useState(null)

    const handleCreateUser = () => {
        setShowCreate(true)
    }

    const handleEditFormChange = (event) => {
        event.preventDefault();
        const {name, value} = event.target
        setEditFormData({...editFormData, [name]: value})
    };

    const handleEditClick = (event, user) => {
        event.preventDefault();
        setEditUser(user.id);
    
        const formValues = {
          firstName: user.firstName,
          lastName: user.lastName,
          email: user.email,
          role: user.role,
          status: user.status
        };
    
        setEditFormData(formValues);
    };

    const handleEditFormSubmit = (e) => {
        e.preventDefault();

        const editedUser = {
            id : editUser,
            firstName : editFormData.firstName,
            lastName : editFormData.lastName,
            email : editFormData.email,
            role : editFormData.role,
            status : editFormData.status
        }

        const newUsers = [...users]

        const index = users.findIndex((user) => user.id === editUser)

        newUsers[index] = editedUser;

        setUsers(newUsers);
        setEditUser(null);
    }

    const handleCancelClick = () => {
        setEditUser(null);
    };

    return (
        <div className='main'>
            <div className='btn-container'>
                <button data-testid='btn-create' className='btn-create' onClick={handleCreateUser}>Create a user</button>
            </div>

            <div className="app-container">
                <form onSubmit={handleEditFormSubmit}>
                    <table>
                        <thead>
                            <tr>
                                <th>Id</th>
                                <th>First Name</th>
                                <th>Last Name</th>
                                <th>Email</th>
                                <th>Role</th>
                                <th>Status</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                users.map((user, index) => (
                                    <Fragment key={index}>
                                        {
                                            editUser === user.id ? 
                                            <EditableRow
                                                id={index}
                                                user={user}
                                                editFormData={editFormData}  
                                                handleCancelClick={handleCancelClick}
                                                handleChange={handleEditFormChange}
                                                handleEditClick={handleEditClick}
                                            /> : 
                                            <ReadOnly  
                                                id={index} 
                                                user={user} 
                                                deleteUser={deleteUser}
                                                handleEditClick={handleEditClick}
                                            />
                                        }
                                    </Fragment>
                                ))
                            }
                        </tbody>
                    </table>
                </form>
            </div>
        </div>
    )
}

export default Users