import React from 'react'
import codeqr from '../assets/codeqr.jpg';
import playstore from '../assets/playstore-removebg-preview.png'
import logoIphone from '../assets/logo-iphone-removebg-preview.png'

const Footer = () => {
  return (
    <div className='w-full md:h-[440px] text-white bg-black mt-10'>
        <div className='md:ml-[100px] flex flex-col md:flex-row items-center gap-10 justify-between py-20'>
            <div className='flex flex-col gap-5 border-b border-b-gray-50 pb-5 md:border-none w-full md:w-auto'>
                <h1 className='text-2xl font-bold'>Exclusive</h1>
                <p className='font-semibold'>Suscribe</p>
                <p>Get 10% off your first order</p>
                <div>
                    <input type="text" className='p-2 pl-4 border border-white' placeholder='Enter Your Email' />
                </div>
            </div>
            <div className='flex flex-col gap-5'>
                <h2>Support</h2>
                <ul className='flex flex-col gap-5'>
                    <li>111 Bijoy sarani, Dhaka, <br />  DH 1515, Bangladesh.</li>
                    <li>exclusive@gmail.com</li>
                    <li>+88015-88888-9999</li>
                </ul>
            </div>
            <div className='flex flex-col gap-5'>
                <h2>Account</h2>
                <ul className='flex flex-col gap-5'>
                    <li>My Account</li>
                    <li>Login / Register</li>
                    <li>Cart</li>
                    <li>Whislist</li>
                    <li>Shop</li>
                </ul>
            </div>
            <div className='flex flex-col gap-5'>
                <h2>Quick Link</h2>
                <ul className='flex flex-col gap-5'>
                    <li>Privacy Policy</li>
                    <li>Terms Of Use</li>
                    <li>FAQ</li>
                    <li>Contact</li>
                </ul>
            </div>
            <div className='md:mr-[100px]'>
                <h2>Download App</h2>
                <p className='mt-5'>Save $3 with App New User Only</p>
                <div className='flex mt-2'>
                    <div>
                        <img src={codeqr} className='w-[80px] h-[80px]' alt="" />
                    </div>
                    <div>
                        <div>
                            <img src="" alt="" />
                            <p>GET IT ON <br /> <span>Google Play</span></p>
                        </div>
                        <div>
                            <img src="" alt="" />
                            <p>Download on the <span>App Store</span></p>
                        </div>
                    </div>
                </div>
                <div></div>
            </div>
        </div>
    </div>
  )
}

export default Footer