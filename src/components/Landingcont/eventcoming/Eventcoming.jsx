import React from 'react'
import { Link } from 'react-router-dom';
const manwoman = "https://res.cloudinary.com/dzyvwxh7n/image/upload/v1731332783/manwoman_ffelhs.png"
const Eventcoming = () => {
  return (
    <div className='  items-center bg-customRed justify-between pt-[52px] md:flex pb-5  flex-col md:flex-row w-full md:h-[274px] '>
<ol className=' lg:ml-[82px] mb-6 lg:mb-20 md:object-contain  flex shrink-0 max-w-[300px] md:max-w-[400px] lg:max-w-[543px] h-[304px]'>
    <img  loading='lazy' src={manwoman} alt="" /></ol>

<ol className='text-white max-w-[361px] px-8 md:px-0 md:max-w-[361px]  lg:max-w-[361px] flex flex-col gap-y-[32px] h-[169px]  md:mr-[348px]'>
    <h2 className='font-bold ' >Have an Event Coming Up?</h2>
    <p className='h-[28px] md:w-[35vw]  lg:min-w-[361px] font-light leading-[14px]'>Create awreness for your events with ease, fast track ticket sales  by listing your event on Alvent</p>
    <button className='border font-normal bg-white py-[14px] px-[32px] w-[155px] text-customRed h-[50px] text-[16px] leading-[16px] items-center  rounded-[10px] text-left'> <Link to="/signUp">Create Event</Link> </button>
</ol>


    </div>
  )
}

export default Eventcoming