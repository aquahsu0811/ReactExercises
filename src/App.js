import { useSelector, useDispatch } from 'react-redux';
import { useEffect, Fragment } from 'react';

import Cart from './components/Cart/Cart';
import Layout from './components/Layout/Layout';
import Products from './components/Shop/Products';
import Notification from './components/UI/Notification';
import { uiActions } from './store/ui-slice';

let isInitial = true;

function App() {
  const dispatch = useDispatch();
  const showCart = useSelector((state) => state.ui.cartIsVisible);
  const cart = useSelector((state) => state.cart);
  const notification = useSelector((state)=> state.ui.notification);
  

  useEffect(()=>{
    const sendCartDate = async () =>{
      dispatch(
        uiActions.showNotification({
          status: 'pending',
          title:'Sending...',
          message:'Sending cart data!',
        })
      );
      const response = await fetch('https://reacthttp-3339f-default-rtdb.firebaseio.com/cart.json',{
        method:'PUT',
        body:JSON.stringify(cart),
      });

      if(!response.ok){
        throw new Error('Sending cart data failed.');
      }
      
      //const responseData = await response.json();

      dispatch(
        uiActions.showNotification({
          status: 'success',
          title:'Success!',
          message:'Sending cart data successfully!',
        })
      );
    };

    if(isInitial){
      isInitial = false;
      return;
    }

    sendCartDate().catch(error=>{
      dispatch(
        uiActions.showNotification({
          status: 'error',
          title:'Error!',
          message:'Sending cart data failed!',
        })
      );
    });

  },[cart, dispatch]); //dispatch nerver change, it only because include in

  return (
    <Fragment>
      {notification && <Notification title={notification.title} status={notification.status} message={notification.message}/>}
      <Layout>
        { showCart && <Cart />}
        <Products />
      </Layout>
    </Fragment>
  );
}

export default App;
