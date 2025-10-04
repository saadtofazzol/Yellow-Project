import React from 'react';
import { useSelector } from 'react-redux';

const ShoppingCart = () => {
  const cartItem = useSelector(state => state.cart);

  return (
    <div>
   {
 cartItem.map((item) => (
          <div>
            <img src={item.image} alt="" srcset="" />
            <h1 key={item.id}>{item.title}</h1>
          </div>
        ))
   }
       
    
    </div>
  );
};

export default ShoppingCart;
