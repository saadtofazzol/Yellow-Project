import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const ProductPage = () => {

       const [data,setData] = useState([])

  

const {id} = useParams()
    const fetchdata = async() =>{
        try {
            const response = await axios.get(`https://fakestoreapi.com/products/${id}`)

            setData(response.data)
            console.log(response.data)

        } catch (error) {
            
        }
    }

useEffect(() =>{
fetchdata()
},[])

    
    return (
        <div className='grid grid-cols-2'>
            
            <div>
                            <img src={data.image} alt="" srcset="" className='w-full' />

            </div>
                       

                       <div className='mt-10 shadow'>
                         <h1 className='text-3xl  mt-10'>{data.title}</h1>

            <h1 className='text-2xl mt-10'>{data.category}</h1>

            <h1 className='text-xl mt-10'>{data.description}</h1>
                       </div>
        </div>
    );
};

export default ProductPage;