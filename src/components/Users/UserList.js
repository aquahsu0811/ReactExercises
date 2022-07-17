import Card from "../UI/Card";
import "./UserList.scss";

function UserList(props) {
  props.items.map((user) => (
    console.log(user.name)
  ));
  
  return (
    <div>
      <ul className="userList">
        {props.items.map((user) => (
          <Card
            key={user.id}
            id={user.id}
            onDelete={props.onDeleteItem}
          >
            {user.name} is {user.age} years old
          </Card>
        ))}
      </ul>
    </div>
  );
}

export default UserList;
