import React from 'react';

const CreateAccount = () => {


    return (
        <div className='text-center mt-10'>
            <h1> CREATE ACCOUNT  </h1>

            <p className='mt-4'>Please register below to create an account</p>



<div className='mt-15 w-100 m-auto'>
<div>
    <h1 className='text-left'> First Name </h1>
    <input type="text" className='border-1 active:border-1 w-100 p-2  my-5'  />

</div>




<div>
    <h1 className='text-left'> Last name </h1>
    <input type="text" className='border-1 active:border-1 w-100 p-2  my-5'  />

</div>




<div>
     <h1 className='text-left'>  Your Email Address *
 </h1>
    <input type="text" className='border-1 active:border-1 w-100 p-2  my-5'  />

</div>





<div>
    <h1 className='text-left'>  Your Password * </h1>
    <input type="text" className='border-1 active:border-1 w-100 p-2 my-5'  />

</div>

<div className='text-left flex'>
    <input type="checkbox" />

    <p className='ml-3'>Subscribe to email marketing</p>
</div>


<button className='bg-black text-white text-xs py-3 px-10 hover:bg-white hover:border-1 hover:text-black mr-50 mt-5'> CREATE AN ACCOUNT </button>

</div>



        </div>
    );
};

export default CreateAccount;