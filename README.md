# useContent
Props for configuration, context for state management, across components or possibly across the entire app.
### Limitaions
React context is not optimized for high frquency change. 
Ialso shouldn't be used to replace all component communications and props.

### _createContext_
```
const AuthContext = React.createContext({
  isLoggedIn: false,
  onLogout: () => {},
  onLogin: (email, password) => {}
});

```
### _Provider_

```
<AuthContext.Provider
  value={{
    isLoggedIn: isLoggedIn,
    onLogout: logoutHandler,
    onLogin: loginHandler,
  }}
>
  {props.children}
</AuthContext.Provider>
```
