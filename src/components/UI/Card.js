import "./Card.scss";

function Card(props) {
  const deleteHandler = () => {
    // setDeleteText('(Deleted!)');
    props.onDelete(props.id);
  };

  return (
    <li className="card-item" onClick={deleteHandler}>
      {props.children}
    </li>
  );
}

export default Card;
