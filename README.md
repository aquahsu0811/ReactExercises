# Redux
Reducers must be pure, side-effect free, synchronous functions.
side-effects and async tasks could be executed inside the components(useEffect) or action creators.

### Action creators- Thunk
A function that delays an action until later.
An action creator function that does not return the action itself but another function which eventually reutrns the action.

### App.js
```
  useEffect(() => {
    dispatch(fetchCartData());
  }, [dispatch]);
```

### cart-action.js

```
export const fetchCartData = () => {

  return async(dispatch) =>{

    const fetchData = async () => {
      const response = await fetch('https://reacthttp-3339f-default-rtdb.firebaseio.com/cart.json');
      
      if(!response.ok){
        console.log('error');
        throw new Error('Could not fetch cart data!');
      }
      const data =await response.json();
      
      return data;
    };

    try{
      const data = await fetchData();
      console.log(data);
      dispatch( cartActions.replaceCart({
        items: data.items || [],
        totalQuantity: data.totalQuantity
      }) );
    }
    catch(error){
      console.log("error");
      dispatch(
        uiActions.showNotification({
          status: 'error',
          title:'Error!',
          message:'Fetching cart data failed!',
        })
      );
    }

  };
};
```
