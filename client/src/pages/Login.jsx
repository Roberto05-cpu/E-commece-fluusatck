import React, { useState } from 'react'
import imgsign from '../assets/imgsign.jpg'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Login = () => {

    const navigate = useNavigate();
    const [form, setForm] = useState({ email: "", password: "" });

    const handleChange = (e) => {
       setForm({...form, [e.target.name]: e.target.value});
    };

    const handleLogin = async () => {
       try {
         const res = await axios.post("http://localhost:3000/user/login", form);

         if (res.data.success) {
        
           // 🔥 Stocker token + utilisateur
           sessionStorage.setItem("token", res.data.token);
           sessionStorage.setItem("user", JSON.stringify(res.data.user));

           alert("Connexion réussie !");
           navigate("/"); // 🔥 Redirection vers Home
           window.location.reload();
         }

       } catch (error) {
         alert("Identifiants incorrects", error);
       }
    };

  return (
    <div className='flex justify-center items-center'>
        <div className='md:w-[1200px] w-full h-[600px] mt-10 border flex items-center gap-16 p-10 md:p-0'>
            <div className='hidden md:block'>
               <img src={imgsign} className='w-[600px] h-[600px] object-cover' alt="" />
            </div>
            <div className=''>
                <h1 className='text-4xl font-semibold'>Log in to Exclusive</h1>
                <p className='mt-5'>Enter your details below</p>
                <div className='flex flex-col gap-5 mt-10'>
                    <input name='email' type="email" onChange={handleChange} className='w-[350px] p-3 border-b border-b-gray-300 focus:outline-none' placeholder='Email' />
                    <input name='password' type="password" onChange={handleChange} className='w-[350px] p-3 border-b border-b-gray-300 focus:outline-none' placeholder='Password' />
                    <div className='mt-5 w-[350px] flex items-center justify-between'>
                        <button onClick={handleLogin} className='w-[100px] p-3 bg-red-500 text-white text-center font-semibold'>Log In</button>
                        <p className='text-red-500'>Forget Password?</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Login