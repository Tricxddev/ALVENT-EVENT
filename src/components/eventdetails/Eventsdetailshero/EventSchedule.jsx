import React, { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";
// import data from "../../../../../data/db4.json"
function EventSchedule() {
  //const [event, setEvent] = useState(null);
  const { eventID } = useParams(); // Extract eventId from the URL
  const [event, setEvent] = useState(null);
  console.log("eventID:",eventID)

  useEffect(() => {
    // Fetch event details using the eventId
    const fetchEventDetails = async () => {
      try {
        
        const response = await fetch(`https://alphaeventappdevmode.onrender.com/eventDetails/${eventID}`);
        console.log("details:",response)
        if (response.ok) {
          const data = await response.json();
          console.log('Fetched event details:', data)
          setEvent(data);
        } else {
          console.error('Failed to fetch event details:', response.statusText);
        }
      } catch (error) {
        console.error('Error fetching event details:', error);
      }
    };    
    if (eventID) {
      fetchEventDetails();
    }
  }, [eventID]);
    

  if (!event) {
    return <div>Loading event details...</div>; // Render a loading state while fetching event details
  }

  return (
 
  <div className='lg:min-h-[648px] w-full flex flex-col gap-y-[45px] md:w-[30.38vw]' >




      {/* Event schedule section */}
    
    
    <div className='pt-[30px] '>
     <h3 className='font-bold text-[24px]'>{event.evnttd.eventTitle}</h3>
        <div className='w-[247px] py-3 font-normal text-customlightgray text-[18px]  h-[80px] flex flex-col gap-y-[10px]'>
       
          <ol className='flex gap-[10px] '>
            {/* <li className='items-left'><img src={event.dateDetails.img} alt="" /></li> */}
            <li><h2>{event.evnttd.eventStart}</h2></li>
          </ol>
          {/* <ol className='flex gap-[10px]'>
            <li><img src={event.timeDetails.img} alt="" /></li>
            <li><h2>{event.timeDetails.time}</h2></li>
          </ol> */}
          <ol className='flex gap-[10px]'>
            {/* <li><img src={event.location.img} alt="" /></li> */}
            <li><h2>{event.evnttd.eventLocation.eventVenue },{event.evnttd.eventLocation.eventCity },{ event.evnttd.eventLocation.eventCountry}.</h2></li>
            
          </ol>
        </div>

        {/* about section */}
        <div className='gap-[5px] my-12  flex flex-col  h-full md:max-w-[30.83vw]'>
          {/* <h2 className='font-bold text-[24px]'>{event.aboutDetails.name}</h2> */}
          <p className='w-full h-[]'>{event.evnttd.eventDesc}</p>
        </div>

          {/* Eventperks */}
        {/* <div className='flex flex-col'>
          <h3 className='font-bold pb-2  text-[24px]'>Event Perks </h3>
          <div className=" flex gap-[16px] flex-col">
         
            {event.perks.map((perk, index) => (
              <ol className='' key={index}>
                <p>{perk.title}{perk.description}</p>
           
              </ol>
            ))}
          </div>
        </div> */}
</div>
  

</div>

   
  );
}

export default EventSchedule;
