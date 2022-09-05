# Router
npm install react-router-dom@5  assign version 5

### _useHistory_
The useHistory hook gives you access to the history instance that you may use to navigate.

### _useLocation_
The useLocation hook returns the location object that represents the current URL. You can think about it like a useState that returns a new location whenever the URL changes.

### _useParams_
useParams returns an object of key/value pairs of URL parameters. Use it to access match.params of the current <Route>.

### _useRouteMatch_
It is kind of similar to useLocation, but it has more information about the urrently loaded route. Not just about the URL but about some internally managed data React Router is aware of.
