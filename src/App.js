import { useState } from 'react';
import { usersData } from './assets/usersData';
import CreateUser from './components/CreateUser';
import Users from './components/Users';
import './App.css';

function App() {

  const image='https://storage.googleapis.com/scratchpay-com-assets/challenges/Brand-logo-Scratch-App-Borrower-RGB%402x.png'

  const [users, setUsers] = useState(usersData);

  const [showCreate, setShowCreate] = useState(false);

  const addUser = (input) => {
    setUsers(prevUsers => {
      return [...prevUsers, {
        id : users.length + 1,
        email : input.email,
        firstName : input.firstName,
        lastName : input.lastName,
        role : input.role,
        status : input.status
      },]
    })
    setShowCreate(false)
  }

  const deleteUser = (id) => {
    setUsers(prevUsers => prevUsers.filter((user, index) => index !== id))
  }

  return (
    <div className='container'>
      <div>
        <img 
          src={image} 
          alt='logo' 
        />
      </div>
      <div>
        {
          showCreate ? 
          <CreateUser  
            onAdd={addUser} 
            setShowCreate={setShowCreate} 
          /> : 
          <Users 
            users={users}
            setUsers={setUsers}
            setShowCreate={setShowCreate}
            deleteUser={deleteUser}
          />
        }
      </div>
    </div>
  );
}

export default App;