import React from 'react'
import boombox from '../assets/boombox.png'
import ProductCard from './ProductCard'
import casque from '../assets/Casque-removebg-preview.png';
import ps5 from '../assets/ps5.jpg';
import { LuHeadphones } from "react-icons/lu";
import women from '../assets/women.png'
import speaker from '../assets/speaker.png'
import { Link } from 'react-router-dom';

const DownHome = () => {
  return (
    <div className='md:ml-[100px] md:mr-[100px]'>
        <div className='mt-[100px] w-full md:h-[500px] bg-black p-5 flex flex-col md:flex-row justify-between text-white'>
            <div className='md:flex-1 flex flex-col  gap-10 p-10 ml-10'>
                <span className='text-[12px] text-green-500'>Categories</span>
                <h1 className='text-4xl'>Enhance Your <br /> Music Experience</h1>
                <div className='flex items-center gap-5'>
                    <div className='w-[62px] h-[62px] rounded-[50%] flex flex-col justify-center items-center bg-white text-black p-2'>
                        <span className='font-semibold'>05</span>
                        <span>Days</span>
                    </div>
                    <div className='w-[62px] h-[62px] rounded-[50%] flex flex-col justify-center items-center bg-white text-black p-2'>
                        <span className='font-semibold'>23</span>
                        <span>Hours</span>
                    </div>
                    <div className='w-[62px] h-[62px] rounded-[50%] flex flex-col justify-center items-center bg-white text-black p-2'>
                        <span className='font-semibold'>59</span>
                        <span>Minutes</span>
                    </div>
                    <div className='w-[62px] h-[62px] rounded-[50%] flex flex-col justify-center items-center bg-white text-black p-2'>
                        <span className='font-semibold'>35</span>
                        <span>Secondes</span>
                    </div>
                </div>
                <div>
                    <button className='py-3 px-10 text-white bg-green-400 rounded-[5px]'>Buy Now</button>
                </div>
            </div>
            <div className='md:flex-1 mr-10'>
                <img src={boombox} className='md:w-[670px] md:h-[500px]' alt="" />
            </div>
        </div>
        <div>
            <div className="flex gap-2 items-center mt-16">
                <div className="w-[20px] h-[40px] bg-red-500"></div>
                <p className="text-red-500">Today's</p>
            </div>
            <p className="font-semibold text-4xl mt-5">Explore Our Products</p>
            <div className='w-full mt-10 grid md:grid-cols-4 place-content-center'>
                <ProductCard img={casque} name="Kids Electric Car" oldPrice={120} newPrice={100}/>
                <ProductCard img={casque} name="Kids Electric Car" oldPrice={120} newPrice={100}/>
                <ProductCard img={casque} name="Kids Electric Car" oldPrice={120} newPrice={100}/>
                <ProductCard img={casque} name="Kids Electric Car" oldPrice={120} newPrice={100}/>
                <ProductCard img={casque} name="Kids Electric Car" oldPrice={120} newPrice={100}/>
                <ProductCard img={casque} name="Kids Electric Car" oldPrice={120} newPrice={100}/>
                <ProductCard img={casque} name="Kids Electric Car" oldPrice={120} newPrice={100}/>
                <ProductCard img={casque} name="Kids Electric Car" oldPrice={120} newPrice={100}/>
            </div>
            <div className="flex justify-center mt-5">
                <button className="py-2 px-4 bg-red-500 text-white ml-[-45px] cursor-pointer"><Link to='/allproducts'>View All Products</Link> </button>
            </div>
        </div>
        <div>
            <div className="flex gap-2 items-center mt-16">
                <div className="w-[20px] h-[40px] bg-red-500"></div>
                <p className="text-red-500">Featured</p>
            </div>
            <p className="font-semibold text-4xl mt-5">New Arrival</p>
            <div className='mt-10 flex flex-col md:flex-row gap-10 md:gap-16'>
                <div className='md:w-[600px] h-[600px]'>
                    <img src={ps5} className='w-full h-full' alt="" />
                </div>
                <div>
                    <div className='md:w-[600px] h-[284px] bg-black text-white flex items-end justify-between p-5'>
                        <div className='flex flex-col gap-5 w-[42%]'>
                            <h3 className='text-[20px] font-bold'>Women's Collections</h3>
                            <p>Featured womans collection that give you another vibe</p>
                            <a href="" className=''>Shop Now</a>
                        </div>
                        <div className='w-[58%]'>
                            <img src={women} className='w-[332px] h-[250px]' alt="" />
                        </div>
                    </div>
                    <div className='mt-4 flex gap-5'>
                        <div className='w-[290px] h-[300px] bg-black flex items-end justify-center p-5'>
                             <img src={speaker} className='h-[300px] w-[320px]' alt="" />
                            <div className='text-white z-50 relative left-[-120px]'>
                                <h3>Speakers</h3>
                                <p>Amazon wireless speaker</p>
                                <a href="" className=''>Shop Now</a>
                            </div>
                        </div>
                        <div className='w-[290px] h-[300px] bg-black'></div>
                    </div>
                </div>
            </div>
        </div>
        <div className='mt-10 flex items-center justify-center gap-10'>
            <div className='w-[249px] h-[161px] flex flex-col items-center justify-center gap-5'>
                <div className='p-2 rounded-[50%] bg-gray-300'>
                    <div className='p-2 rounded-[50%] bg-black text-white'>
                        <LuHeadphones size={30} />
                    </div>
                </div>
                <div className='flex flex-col items-center justify-center gap-2'>
                    <p className='font-semibold'>FREE AND FAST DELIVERY</p>
                    <span className='text-[12px]'>Free delivery for all orders over $140</span>
                </div>
            </div>
            <div className='w-[249px] h-[161px] flex flex-col items-center justify-center gap-5'>
                <div className='p-2 rounded-[50%] bg-gray-300'>
                    <div className='p-2 rounded-[50%] bg-black text-white'>
                        <LuHeadphones size={30} />
                    </div>
                </div>
                <div className='flex flex-col items-center justify-center gap-2'>
                    <p className='font-semibold'>FREE AND FAST DELIVERY</p>
                    <span className='text-[12px]'>Free delivery for all orders over $140</span>
                </div>
            </div>
            <div className='w-[249px] h-[161px] flex flex-col items-center justify-center gap-5'>
                <div className='p-2 rounded-[50%] bg-gray-300'>
                    <div className='p-2 rounded-[50%] bg-black text-white'>
                        <LuHeadphones size={30} />
                    </div>
                </div>
                <div className='flex flex-col items-center justify-center gap-2'>
                    <p className='font-semibold'>FREE AND FAST DELIVERY</p>
                    <span className='text-[12px]'>Free delivery for all orders over $140</span>
                </div>
            </div>
        </div>
    </div>
  )
}

export default DownHome