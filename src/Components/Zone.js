import React from 'react'
import hero from '../images/hero.png'
const Zone = () => {
  return (
    <>
       <div className='max-w-[1200px] mx-auto my-10 flex flex-col sm:flex-row justify-center items-center gap-10 ' >
        <div className='sm:w-1/2 text-center self-center' >
            <h1 className='text-5xl font-extrabold' >Make Zone Better!</h1>
            <h2>Why Better Zone important?</h2>
        </div>
        <img src={hero} alt="" className='sm:w-1/2  rounded-xl ' />
       </div>
    </>
  )
}

export default Zone