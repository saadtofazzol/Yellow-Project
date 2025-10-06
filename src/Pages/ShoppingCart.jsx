import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteCart } from '../redux/cartSlice';

const ShoppingCart = () => {
  const cartItem = useSelector(state => state.cart);

  const dispatch = useDispatch()
  return (
    <div>
   {
 cartItem.map((item) => (
          <div>
            <img src={item.image} alt="" srcset="" />
            <h1 key={item.id}>{item.title}</h1>
            <button onClick={() => dispatch(deleteCart(item))} className='bg-red-500 p-5 text-white'> Delete</button>
          </div>
        ))
   }
       
    
    </div>
  );
};

export default ShoppingCart;
