import React, { useState } from 'react';

import Button from '../UI/Button';
import Modal from '../Modal/Modal';
import './AddUser.scss'

function AddUser(props) {
  const [userName, setUserName] = useState('');
  const [userAge, setUserAge] = useState('');
  const [error, setError] =useState('');

  const formSubmitHandler = (event) => {
    event.preventDefault();
    console.log("submit");

    if(userName.trim().length === 0 || userAge.trim().length === 0 ){ //trim is to remove the blank begin or the end
      setError({
        title:'Invalid Input!',
        message:'Please enter a valid name and age.'
      })
      return;
    }

    if(+userAge < 1 ){
      setError({
        title:'Invalid Age!',
        message:'Please enter a valid age.'
      })
      return;
    }
    
    setUserName('');
    setUserAge('');
    props.onAddUser(userName, userAge);
  }; 

  const inputUserNameHandler = (event)=>{
    setUserName(event.target.value);
  }

  const inputUserAgeHandler = (event)=>{
    setUserAge(event.target.value);
  }

  const errorHandler =(val)=>{
    setError(null)
  }

  return (
    <div>
      <form onSubmit={formSubmitHandler}>
        <div className="form-control">
          <label>Username</label>
          <input 
            type="text" 
            value={userName}
            onChange={inputUserNameHandler} 
          />
          <label >Age</label>
          <input 
            type="number" 
            value={userAge}
            onChange={inputUserAgeHandler} 
          />
        </div>
        <Button type="submit">Add User</Button>
      </form>

      {error && <Modal onConfirm={errorHandler} title={error.title} message={error.message} />}
    </div>
  );

}

export default AddUser;
