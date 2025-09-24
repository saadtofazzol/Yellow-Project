import React from 'react';
import { CgShoppingBag } from "react-icons/cg";
import { CiStop1 } from "react-icons/ci";
import { IoSearchOutline } from "react-icons/io5";

const Navber = () => {
    return (
        <div>
            
            <div className='grid grid-cols-2 mt-10 items-center'>

                <div>
                <h1 className='text-4xl ml-8'> Y E L L O W </h1>
                </div>

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



<div>
<p>Sign In Or Create An Account </p>
</div>


</div>



<div className='flex bg-black text-white  gap-10 justify-center p-5 mt-5'>
<p>পূজা ১৪৩২</p>

<p>FAIL 2025</p>
<p>WOMAN</p>
<p>MAN</p>
<p>KIDS </p>
<p>MINI-ME</p>
<p>HOME</p>
</div>
        </div>
    );
};

export default Navber;