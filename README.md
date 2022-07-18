# ReactExercises

## _ReactDOM.createPortal_

Using createPortal to render children component in DOM to avoid children component influencing by parent component.
One of the most commonly affected examples is the Modal popup window.
- Create backdrop and overlay root div in index.html
- Assign the root div to createPortal 
![image](https://github.com/aquahsu0811/ReactExercises/blob/react-portals/img/modal.png)
### Usage
```sh
ReactDOM.createPortal(child, container)
```

