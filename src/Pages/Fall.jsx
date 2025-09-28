import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Fall = () => {
    const [data, setData] = useState([]);

    const fetchData = async () => {
        try {
            const response = await axios.get('https://dummyjson.com/products');
            console.log(response.data.products); // Corrected
            setData(response.data.products);     // Fixed: update state
        } catch (error) {
            console.error("Error fetching data", error); // Good practice to log
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <div className='grid grid-cols-4 gap-4 p-5'>
            {data.map((item) => (
                <div key={item.id} className='border p-5 text-center rounded shadow'>
                    <Link to={`/product/${item.id}`}>
                        <img 
                            src={item.images[0]} 
                            alt={item.title} 
                            className='w-full h-48 object-cover mb-4' 
                        />
                        <h1 className='text-lg font-semibold mb-2'>{item.title}</h1>
                        <p className='text-gray-700 mb-2'>${item.price}</p>
                    </Link>
                    <div className='flex justify-center gap-4'>
                        <button className='bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600'>
                            Add to Cart 
                        </button>
                        <button className='bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600'>
                            Buy Now
                        </button>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Fall;
