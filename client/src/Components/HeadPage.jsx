import React from 'react'

const HeadPage = () => {
  return (
    <div className='w-full bg-black text-white md:h-10 flex flex-col gap-2 items-center md:flex-row md:items-center md:justify-center'>
        <p className='text-center'>Summer Sale For All Swim Suits And Free Express Delivery-OFF 50%! ShopNow</p>
        <div className='md:relative md:left-60'>
            <select className=''>
                <option value="en">English</option>
                <option value="fr">French</option>
            </select>
        </div>
    </div>
  )
}

export default HeadPage