import React, { useState } from 'react';
import { auth } from './FIrebase';
import {  signInWithEmailAndPassword } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';

const Login = () => {


  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

const navigate = useNavigate()
const handleRegister = async () =>{
    try{
        await signInWithEmailAndPassword(auth, email , password)
     
      setEmail('');
      setPassword('');
      console.log("Login Successully")
    navigate("/")
    }catch (err){
console.log(err)
    }
}

    return (
        <div className='text-center mt-10'>
            <h1> CREATE ACCOUNT  </h1>

            <p className='mt-4'>Please register below to create an account</p>



<div className='mt-15 w-100 m-auto'>







<div>
     <h1 className='text-left'>  Your Email Address *
 </h1>
    <input type="text" className='border-1 active:border-1 w-100 p-2  my-5' onChange={ (e) => setEmail(e.target.value) }   />

</div>





<div>
    <h1 className='text-left'>  Your Password * </h1>
    <input type="password" className='border-1 active:border-1 w-100 p-2 my-5'  onChange={ (e) => setPassword(e.target.value) }  />

</div>

<div className='text-left flex'>
    <input type="checkbox" />

    <p className='ml-3'>Subscribe to email marketing</p>
</div>


<button className='bg-black text-white text-xs py-3 px-10 hover:bg-white hover:border-1 hover:text-black mr-50 mt-5' onClick={handleRegister}> CREATE AN ACCOUNT </button>

</div>



        </div>
    );
};

export default Login;


