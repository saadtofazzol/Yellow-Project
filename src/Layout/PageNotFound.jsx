import React from 'react';
import { NavLink } from 'react-router-dom';

const PageNotFound = () => {
    return (
        <div className='m-auto text-center  p-5 w-100 h-100 mt-5 mb-5'>
            
            <h1 className='text-4xl mt-50'> 404 </h1>

            <h1 className='text-3xl'> Opps! Page Not Found </h1>
            <p>Sorry! The page you're looking for clocked out!</p>

          <NavLink to="/">
              <button className='underline'>
Return To Store 
            </button>
          </NavLink>
        </div>
    );
};

export default PageNotFound;