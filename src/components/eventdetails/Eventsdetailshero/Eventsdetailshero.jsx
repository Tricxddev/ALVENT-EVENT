import React from 'react'

import EventSchedule from './EventSchedule';
import Eventticket from '../eventticket/Eventticket';




const mapimg = "https://res.cloudinary.com/dzyvwxh7n/image/upload/v1731627247/Frame1218_katqfy.png"

const Eventsdetailshero = ({eventDetails}) => {
  if (!eventDetails) {
    return <p>Loading event details...</p>; // Show loading if eventDetails is not yet available
  }
  const { eventTitle, eventDesc } = eventDetails;
  console.log("EventDetails:",eventDetails)
  return (
    
    <div className=' w-full  '><div className='py-[60px] font-Lato pt-[120px] md:pt-[120px] px-[20px] md:px-[80px]  '>
      <div className='  text-white rounded-[28px] h-screen md:h-[425px] flex-col  bg-center bg-cover p-[10px] py-[136px]' style={{ backgroundImage: "url('https://res.cloudinary.com/dzyvwxh7n/image/upload/v1731557983/Herosectioniii_zwioul.png')" }}>
        <div className=' flex items-center pt-14 md:pt-0 md:gap-[16px] h-[174px]  gap-y-[50px] lg:w-full pl-[40px] pr-[49px]  justify-between'>
          <div className='bg-customRed w-[60px] h-[60px]'></div>
          <div className='gap-y-10 md:gap-y-12 flex flex-col'>
            <div className='h-[108px]  items-left mx-auto w-full text-[32px] md:text-[42px]  lg:text-[52px] leading-[34.08px] md:leading-[44.08px] lg:leading-[54.08px] font-bold  md:w-full'>
              <h1>{eventDetails.evnttd.eventTitle}</h1>
            </div>
            <div className='h-[27px] leading-[27px]  text-[16px] font-bold'><h1>Organized by {eventDetails.evnttd.organizerName} </h1></div>
          </div>



        </div>
      </div>




      <div className='w-full md:flex sm:flex-none  px-10 justify-between'>
        <div><EventSchedule /></div>

        <div> <Eventticket /></div>

      </div> 

    </div>
   
       <div className='w-[100%] py-[51px] md:px-[80px] items-center mx-auto'>
       <img src={mapimg} alt="map-img" className='w-full' /> </div>

    </div>
  )
}

export default Eventsdetailshero