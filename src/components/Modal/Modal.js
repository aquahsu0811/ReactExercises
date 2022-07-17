import "./Modal.scss"
import React from 'react';
import  ReactDOM  from 'react-dom';
import Button from "../UI/Button";

const Backdrop =(props)=>{
  return <div className="backdrop" onClick={props.onConfirm}/>;
}

const ModalOvery=(props)=>{
  return (

      <div className="modal">
          <header className="header">
            <h2>{props.title}</h2>
          </header>
          <div className="content">
            <p>{props.message} </p>
          </div>

          <footer className="actions">
            <Button onClick={props.onConfirm}>Okay</Button>
          </footer>
          
      </div>

  );
}

function Modal(props) {

  return (
    <React.Fragment>
      {ReactDOM.createPortal(
        <Backdrop onConfirm={props.onConfirm}/>, 
        document.getElementById('backdrop-root') 
      )}

      {ReactDOM.createPortal(
        <ModalOvery 
          title={props.title} 
          message={props.message} 
          onConfirm={props.onConfirm} />,  
        document.getElementById('overlay-root') 
      )}
    </React.Fragment>
  );
}

export default Modal;
