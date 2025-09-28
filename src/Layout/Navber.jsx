import React from 'react';
import { CgShoppingBag } from "react-icons/cg";
import { CiStop1 } from "react-icons/ci";
import { IoSearchOutline } from "react-icons/io5";
import { NavLink } from 'react-router-dom';

const Navber = () => {
    return (
        <div>
            
            <div className='grid grid-cols-2 mt-10 items-center'>

                <NavLink to="/" >
                <h1 className='text-4xl ml-8'> Y E L L O W </h1>
                </NavLink>

            <div className='ml-auto mr-10 relative'>
                <input type="search" placeholder='Search' className='bg-black text-white text-sm p-2 text-bold' />
                <IoSearchOutline className='absolute top-2 text-white left-35 items-center ' />
            </div>

            </div>
      
<div className='flex gap-5 justify-end mr-10 mt-5'>
    <div className='flex items-center  gap-2'>
<CgShoppingBag />

<p> Shopping Cart</p>
<p className=' bg-pink-200 w-5  rounded-full text-center'>0</p>
    </div>


    <div className='flex items-center  gap-2'>
<CiStop1 />

<p> My Wish List</p>
    </div>





<NavLink to="/register">
 <p>Sign In Or Create An Account </p>
</NavLink>

</div>



<div className='flex bg-black text-white  gap-10 justify-center p-5 mt-5'>



<NavLink to="/puja">
    <p>পূজা ১৪৩২</p>
</NavLink>
<NavLink to="/fail">
   <p>FAIL 2025</p>
</NavLink>


<NavLink to="/woman">
<p>WOMAN</p>
</NavLink>



<NavLink to="/man">
  <p>MAN</p>
</NavLink>



<NavLink to="/kids">
    <p>KIDS </p>
</NavLink>




<NavLink to="/mini">
   <p>MINI-ME</p>
</NavLink>



<NavLink to="/">
  <p>HOME</p>
</NavLink>







</div>
        </div>
    );
};

export default Navber;