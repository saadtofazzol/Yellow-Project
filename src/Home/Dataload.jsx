import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { addtoCart } from '../redux/cartSlice';


const Dataload = () => {


    const [data,setData] = useState([])

    const dispatch = useDispatch()


    const fetchdata = async() =>{
        try {
            const response = await axios.get('https://fakestoreapi.com/products')

            setData(response.data)
            console.log(response.data)

        } catch (error) {
            
        }
    }

useEffect(() =>{
fetchdata()
},[])

    return (
        <div className='grid grid-cols-4'>
            

            {
                data.map((item) =>(
                    <div className='border-1 p-5 text-center'>
                        <Link to={`/product/${item.id}`}>
                        <img src={item.image} alt="" srcset="" className='w-50 h-50 m-auto ' />
                        <h1>{item.title}</h1>
                        <p> {item.price} </p>
                         </Link>
                        <button className='bg-green-500 p-3'
           onClick={() => dispatch(addtoCart(item))}>
                            Add to Cart 
                        </button>


                         <button className='bg-blue-500 p-3 m-4'>
                           Buy Now
                        </button>

                       
                    </div>
                ))
            }
        </div>
    );
};

export default Dataload;