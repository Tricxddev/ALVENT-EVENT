import React from 'react'
import locatn from "/locatn.svg"
import arrowd from "/arrowd.svg"
import line from "/line.svg"
import search from "/search.svg"

const Eventshero = () => {
  return (
    <div className='py-[60px] font-Lato pt-[120px] md:pt-[120px] px-[20px] md:px-[80px]  '>
      <div className=' text-center text-white rounded-[28px] h-screen md:h-[425px] flex-col bg-center bg-cover p-[10px] ' style={{ backgroundImage: "url('https://res.cloudinary.com/dzyvwxh7n/image/upload/v1731433218/Hero_Section_2_gm5mal.png')" }}>
      <div className=' flex flex-col pt-14 md:pt-0 md:gap-[10px] h-[174px]  gap-y-[50px]'>
        <div className='h-[54px] py-[118px] items-center mx-auto w-[300px] text-[42px] md:text-[42px] lg:text-[52px] leading-[54.08px]  md:w-full'>
          <h1>Explore events around you</h1>
        </div>


        <div className='md:flex md:max-w-[500px] lg:max-w-[613px] text-[16px] h-[100px] md:h-[64px] mx-auto justify-between border-[2px] rounded-[10px] border-white py-[12px] px-[24px] items-center'>
          <ol className=' flex items-center h-9 w-[223px] justify-between '>
            {/* location section */}
            <ol className='flex items-center space-x-2 '>
              <li className='w-[24px] h-[24px]'>
                <img src={locatn} alt="locatn" />
                </li>
             <ol className=''><li className='w-[99px] h-[24px]'>Port Harcourt</li>
               </ol>
            {/* arrow section */}
            <ol className='w-[11.41px] h-[7.12px]'>
              <img src={arrowd} alt="arrowd" /></ol>
          </ol></ol> 

          <ol>

            
            <img className='hidden mr-5 md:flex' src={line} alt="line" /></ol>

          <ol className='flex justify-between w-[254px] items-center'>
            <li className='  w-[138px] h-[24px]'>Search for an event</li>
           <li className='w-[35px] h-[35px] md:w-[40px] md:h-[40px]'> <img className='' src={search} alt="search" /></li>
          </ol>

        </div>




      </div>
</div>

    </div>

  )
}

export default Eventshero