import React from 'react'
import computerGuy from '../images/long-card.png'
const Established = () => {
  return (
    <>
    <div className='max-w-[1200px] mx-auto my-10 flex flex-col sm:flex-row justify-center items-center gap-10 shadow-2xl py-6 px-6 rounded-xl' >
        <div className=' ' >
            <h1 className='font-bold text-3xl mb-6' >Long Established</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque commodo gravida neq ue, Fe id euismod tellus pellentesque eu</p>
            <p className='mt-4' >8 Feb 2022 </p>
            <p className='text-right' >Read More</p>

        </div>

        <img src={computerGuy}  alt="" />
    </div>
    </>
  )
}

export default Established