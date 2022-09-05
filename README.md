# Router
npm install react-router-dom@5  assign version 5

### _useHistory_
The useHistory hook gives you access to the history instance that you may use to navigate.

### _useLocation_
The useLocation hook returns the location object that represents the current URL. You can think about it like a useState that returns a new location whenever the URL changes.


```
import { useHistory,  useLocation } from 'react-router-dom';

const history = useHistory();
const location = useLocation();

const queryParams = new URLSearchParams(location.search);// trnasfer location.search to js object
const isSortingAscending = queryParams.get('sort') === 'asc';

history.push({
  pathname: location.pathname,
  search: `?sort=${(isSortingAscending ? 'desc':'asc')}`
})
```

### _useParams_
useParams returns an object of key/value pairs of URL parameters. Use it to access match.params of the current <Route>.

### _useRouteMatch_
It is kind of similar to useLocation, but it has more information about the urrently loaded route. Not just about the URL but about some internally managed data React Router is aware of.
```
 const match = useRouteMatch();
 
 match.path  // Not an acutally path in a URL, but the path it was define by us for React Router.
 
 match.url // Actual full URL.
```
