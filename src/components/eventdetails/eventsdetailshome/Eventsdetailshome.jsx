import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Eventsdetailshero from '../Eventsdetailshero/Eventsdetailshero'
import EventSchedule from '../Eventsdetailshero/EventSchedule.jsx'
import Eventicket from '../eventticket/Eventticket.jsx'
import TrendingEvents from "../TrendingEvent/TrendingEvent.jsx"

const Eventsdetailshome = () => {
  const { eventID } = useParams(); // Extract eventId from the URL
  const [eventDetails, setEventDetails] = useState(null);
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
          setEventDetails(data);
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
  return (
    
    <div>
      <Eventsdetailshero eventDetails={eventDetails} />
      <TrendingEvents />
    </div>

  )
}

export default Eventsdetailshome