import React, { useState } from 'react'
import google from '../assets/google.png'
import imgsign from '../assets/imgsign.jpg'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'

const SignUp = () => {

    const navigate = useNavigate()

    const [form, setForm] = useState({
        name: "",
        email: "",
        password: ""
    })

    const handleChange = (e) => {
        setForm({...form, [e.target.name]: e.target.value});
    };

    const handleSubmit = async () => {
       try {
         const res = await axios.post("http://localhost:3000/user/register", form);

         if (res.data.success) {
           alert("Compte créé avec succès !");
           navigate("/login");   // 🔥 Redirection après inscription
         }

       } catch (error) {
         alert("Erreur lors de la création du compte");
         console.log(error);
       }
    };

  return (
    <div className='flex justify-center items-center'>
        <div className='md:w-[1200px] h-[600px] mt-10 border flex gap-16'>
            <div className='hidden md:block'>
               <img src={imgsign} className='w-[600px] h-[600px] object-cover' alt="" />
            </div>
            <div className='p-16'>
                <h1 className='text-4xl font-semibold'>Create an account</h1>
                <p className='mt-5'>Enter your details below</p>
                <div className='flex flex-col gap-5 mt-10'>
                    <input name='name' type="text" onChange={handleChange} className='w-[350px] p-3 border-b border-b-gray-300 focus:outline-none' placeholder='Name' />
                    <input name="email" type="email" onChange={handleChange} className='w-[350px] p-3 border-b border-b-gray-300 focus:outline-none' placeholder='Email' />
                    <input name='password' type="password" onChange={handleChange} className='w-[350px] p-3 border-b border-b-gray-300 focus:outline-none' placeholder='Password' />
                    <div className='mt-5'>
                        <button onClick={handleSubmit} className='w-[350px] p-3 bg-red-500 text-white text-center font-semibold cursor-pointer'>Create Account</button>
                        <div className='flex justify-center items-center mt-3 border border-gray-300 w-[350px] p-3'>
                            <img src={google} className='w-[24px] h-[24px]' alt="" />
                            <p className='ml-2'>Sign up with Google</p>
                        </div>
                    </div>
                    <p className='mx-auto'>Already have account? <span className='text-red-500 cursor-pointer'><Link to='/login'>Log in</Link></span></p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default SignUp