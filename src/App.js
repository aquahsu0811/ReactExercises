import React,{useState} from 'react';

import AddUser from './components/Users/AddUser';
import UserList from './components/Users/UserList';
import './App.scss'

function App() {

  const [userLists, setUserLists] = useState([]);

  const addUserHandler = (userName, userAge)=>{
    setUserLists(prevLists => {
      const updatedLists = [...prevLists];
      updatedLists.unshift({ name: userName, age:userAge, id: Math.random().toString() });
      return updatedLists;
    });

  };
  const deleteItemHandler =(userId)=>{
    setUserLists(prevUserLists => {
      const updatedLists = prevUserLists.filter(user => user.id !== userId);
      return updatedLists;
    });
  }

  console.log(userLists);
  return (
    <React.Fragment>
      <section id="form">
        <AddUser onAddUser={addUserHandler}/>
      </section>
      <section id="form">
        <UserList items={userLists} onDeleteItem={deleteItemHandler}/>
      </section>
    </React.Fragment>
  );

}

export default App;
