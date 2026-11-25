import React from 'react'
import story from '../assets/story.jpg'
import { LuHeadphones } from "react-icons/lu";
import james from '../assets/james.png'
import { FaWhatsapp , FaTwitter, FaInstagram} from "react-icons/fa";

const About = () => {
  return (
    <div>
        <div className='flex flex-col md:flex-row md:items-center md:justify-center md:p-16'>
            <div className='md:flex-1 md:pl-24 pl-5 flex flex-col gap-7 mt-10'>
                <h1 className='text-5xl font-bold'>Our Story</h1>
                <p>
                    Launced in 2015, Exclusive is South Asia’s premier online shopping makterplace with an active presense in Bangladesh. Supported by wide range of tailored marketing, data and service solutions, Exclusive has 10,500 sallers and 300 brands and serves 3 millioons customers across the region. 
                </p>
                <p>
                    Exclusive has more than 1 Million products to offer, growing <br /> at a very fast. Exclusive offers a diverse assotment in categories <br /> ranging  from consumer.
                </p>
            </div>
            <div className='md:flex-1 md:ml-10 pl-5 pr-5'>
                <img src={story} className='w-[505px] h-[500px] object-cover' alt="" />
            </div>
        </div>
        <div className='mt-10 flex flex-col md:flex-row items-center justify-center gap-10'>
            <div className='border border-gray-400 w-[249px] h-[161px] flex flex-col items-center justify-center gap-5 hover:bg-red-500 hover:text-white'>
                <div className='p-2 rounded-[50%] bg-gray-300'>
                    <div className='p-2 rounded-[50%] bg-black text-white'>
                        <LuHeadphones size={30} />
                    </div>
                </div>
                <div className='flex flex-col items-center justify-center gap-2'>
                    <p className='font-bold text-2xl'>33k</p>
                    <span className='text-[12px]'>Free delivery for all orders over $140</span>
                </div>
            </div>
            <div className='border border-gray-400 w-[249px] h-[161px] flex flex-col items-center justify-center gap-5 bg-red-500 text-white'>
                <div className='p-2 rounded-[50%] bg-gray-300'>
                    <div className='p-2 rounded-[50%] bg-black text-white'>
                        <LuHeadphones size={30} />
                    </div>
                </div>
                <div className='flex flex-col items-center justify-center gap-2'>
                    <p className='font-bold text-2xl'>33k</p>
                    <span className='text-[12px]'>Free delivery for all orders over $140</span>
                </div>
            </div>
            <div className='border border-gray-400 w-[249px] h-[161px] flex flex-col items-center justify-center gap-5 hover:bg-red-500 hover:text-white'>
                <div className='p-2 rounded-[50%] bg-gray-300'>
                    <div className='p-2 rounded-[50%] bg-black text-white'>
                        <LuHeadphones size={30} />
                    </div>
                </div>
                <div className='flex flex-col items-center justify-center gap-2'>
                    <p className='font-bold text-2xl'>33k</p>
                    <span className='text-[12px]'>Free delivery for all orders over $140</span>
                </div>
            </div>
            <div className='border border-gray-400 w-[249px] h-[161px] flex flex-col items-center justify-center gap-5 hover:bg-red-500 hover:text-white'>
                <div className='p-2 rounded-[50%] bg-gray-300'>
                    <div className='p-2 rounded-[50%] bg-black text-white'>
                        <LuHeadphones size={30} />
                    </div>
                </div>
                <div className='flex flex-col items-center justify-center gap-2'>
                    <p className='font-bold text-2xl'>33k</p>
                    <span className='text-[12px]'>Free delivery for all orders over $140</span>
                </div>
            </div>
        </div>
        <div className='flex flex-col md:flex-row justify-center items-center gap-2 mt-16'>
            <div className='w-[370px] h-[564px]'>
                <div className='h-[430px] bg-gray-200 flex justify-center items-end'>
                    <img src={james} className='w-[236px] h-[391px]' alt="" />
                </div>
                <div className='mt-5'>
                    <h3 className='text-2xl font-semibold'>Tom Cruise</h3>
                    <p className='text-[14px]'>Founder & Chairman</p>
                    <div className='flex items-center gap-2'>
                        <FaWhatsapp size={30} /> 
                        <FaInstagram size={24} />
                        <FaTwitter size={24} />
                    </div>
                </div>
            </div>
            <div className='w-[370px] h-[564px]'>
                <div className='h-[430px] bg-gray-200 flex justify-center items-end'>
                    <img src={james} className='w-[236px] h-[391px]' alt="" />
                </div>
                <div className='mt-5'>
                    <h3 className='text-2xl font-semibold'>Tom Cruise</h3>
                    <p className='text-[14px]'>Founder & Chairman</p>
                    <div className='flex items-center gap-2'>
                        <FaWhatsapp size={30} /> 
                        <FaInstagram size={24} />
                        <FaTwitter size={24} />
                    </div>
                </div>
            </div>
            <div className='w-[370px] h-[564px]'>
                <div className='h-[430px] bg-gray-200 flex justify-center items-end'>
                    <img src={james} className='w-[236px] h-[391px]' alt="" />
                </div>
                <div className='mt-5'>
                    <h3 className='text-2xl font-semibold'>Tom Cruise</h3>
                    <p className='text-[14px]'>Founder & Chairman</p>
                    <div className='flex items-center gap-2'>
                        <FaWhatsapp size={30} /> 
                        <FaInstagram size={24} />
                        <FaTwitter size={24} />
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
                    <p className='font-bold'>FREE AND FAST DELIVERY</p>
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
                    <p className='font-bold'>FREE AND FAST DELIVERY</p>
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
                    <p className='font-bold'>FREE AND FAST DELIVERY</p>
                    <span className='text-[12px]'>Free delivery for all orders over $140</span>
                </div>
            </div>
        </div>
    </div>
  )
}

export default About