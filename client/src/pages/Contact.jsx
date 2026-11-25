import React from 'react'

const Contact = () => {
  return (
    <div>
        <div className='mt-16 md:ml-[100px] md:mr-[100px] flex flex-col md:flex-row justify-between'>
            <div className='md:w-[340px] h-[457px] shadow shadow-gray-400 p-6'>
                <div className='w-full pb-5 border-b border-b-gray-400 flex flex-col gap-5'>
                    <div className='flex gap-3 items-center'>
                        <div className='bg-red-500 w-[40px] h-[40px] rounded-[50%]'></div>
                        <p className='font-semibold'>Call To Us</p>
                    </div>
                    <p>We are available 24/7, 7 days a week.</p>
                    <p>Phone: +8801611112222</p>
                </div>
                <div className='pt-5 flex flex-col gap-5'>
                    <div className='flex gap-3 items-center'>
                        <div className='bg-red-500 w-[40px] h-[40px] rounded-[50%]'></div>
                        <p className='font-semibold'>Write To Us</p>
                    </div>
                    <p>Fill out our form and we will contact you within 24 hours.</p>
                    <p>Emails: customer@exclusive.com</p>
                    <p>Emails: support@exclusive.com</p>
                </div>
            </div>
            <div className='md:w-[800px] md:h-[457px] shadow shadow-gray-400 p-6'>
                <div className='flex flex-col gap-5 md:gap-0 md:flex-row items-center justify-between'>
                    <input type="text" className='w-[80%] md:w-[235px] h-[50px] pl-3 bg-gray-100 rounded-[5px]' placeholder='Your Name *' />
                    <input type="text" className='w-[80%] md:w-[235px] h-[50px] pl-3 bg-gray-100 rounded-[5px]' placeholder='Your Email *' />
                    <input type="text" className='w-[80%] md:w-[235px] h-[50px] pl-3 bg-gray-100 rounded-[5px]' placeholder='Your Phone *' />
                </div>
                <div className='mt-5 md:w-[750px] h-[220px] bg-gray-100 rounded-[5px]'>
                    <input type="text" className='w-full h-full p-3' placeholder='Your Message' />
                </div>
                <div className='flex justify-end mt-10'>
                    <button className='bg-red-500 w-[215px] h-[56px] text-white text-center rounded-[5px]'>Send Message</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Contact