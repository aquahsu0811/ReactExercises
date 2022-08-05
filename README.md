# forwardRef && useImperativeHandle
forwardRef returns a react component, and react component is capable of being bound to a ref.
Expose functionalities from a react component to its parent component , then use your component in the parent component through refs and trigger certain functionalities .
### _useImperativeHandle_
Allows to use the component or functionalities from inside this component imperatively. Not through the regular state props management, not by controlling the component through state in the parent component, but instead by directly calling or manipulating something in the component programmatically.

### parent component
```
const App = () => {
    const emailInputRef = useRef();
    
    const submitHandler = (event) => {
        emailInputRef.current.focus(); // from useImperativeHandle 
    };
    
     return ( <Input ref={emailInputRef} /> );
};
```
### child Input component
```
import React, { useRef, useImperativeHandle } from 'react';

const Input = React.forwardRef((props, ref) => {
  const inputRef = useRef();

  useImperativeHandle(ref, () => {
    return {
      focus: activate,
    };
  });
});
```
