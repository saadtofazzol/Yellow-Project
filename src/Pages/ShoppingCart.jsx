import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { decreeMentCart, deleteCart, incrementCart } from '../redux/cartSlice';
import { IoMdClose } from "react-icons/io";

const ShoppingCart = () => {
  const cartItem = useSelector(state => state.persistedeReducer.cart);

  const dispatch = useDispatch()
  return (
    <div>

   <div className='grid grid-cols-6 text-center bg-gray-300 p-4 mt-10  w-250 justify-center m-auto ml-20 '>

    <div className='col-span-3'>
      Product
    </div>

    <div>
      Price
    </div>



     <div>
      Quantity
    </div>






     <div>
      Total
    </div>


   </div>

 
   {
 cartItem.map((item) => (
          <div className='grid grid-cols-7 items-center w-230 h-50 justify-center  ml-20 border-1    '>

            <div className='flex m-20 items-center col-span-3'> 
              <img src={item.image} alt="" srcset="" className='w-24 h-24 object-contain ' />
          <p className='ml-4'>
              {item.title.split(' ').slice(0, 4).join(' ')}
             <br />
             {item.category}

          </p>
            
            </div>

            <div>
Tk {item.price}
            </div>

            
            <div className='flex items-center border-1 w-30 justify-center h-10 '>
              <button className='m-2' onClick={() => dispatch(decreeMentCart(item.id))}> - </button>
              <p className='m-2' >{item.quantity ? item.quantity : 1 }</p>
              <button className='m-2' onClick={() => dispatch(incrementCart(item.id))}> +</button>
            </div>


              <div>
                
Tk {(item.price * (item.quantity || 1)).toFixed(2)}
            </div>





 <div >
              <button className='text-3xl' onClick={() => dispatch(deleteCart(item))}> <IoMdClose /> </button>
           
            </div>


          </div>
        ))
   }
       
       
    </div>
  );
};

export default ShoppingCart;
