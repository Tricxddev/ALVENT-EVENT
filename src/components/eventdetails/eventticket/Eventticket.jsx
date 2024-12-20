import { loadStripe } from "@stripe/stripe-js";
const stripePromise = loadStripe("your-publishable-key-here");
import React, { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";
const img1 ="https://res.cloudinary.com/dzyvwxh7n/image/upload/v1731611793/Ellipse23_mlj9er.png"

const EventTicket = () => {
  const { eventID } = useParams(); // Extract eventID from the URL
  const [regularQuantity, setRegularQuantity] = useState(0);
  const [event, setEvent] = useState(null);
  const [vipQuantity, setVipQuantity] = useState(0);
  const [ticketMessage, setTicketMessage] = useState("");
console.log("fromtickt:",event)
  useEffect(() => {
    // Fetch event details using the eventId
    const fetchEventDetails = async () => {
      try {
        
        const response = await fetch(`https://alphaeventappdevmode.onrender.com/API/eventDetails/${eventID}`);
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


  function changeQuantity(type, delta) {
    if (type === 'regular') {
      setRegularQuantity((prev) => Math.max(0, prev + delta));
    } else if (type === 'vip') {
      setVipQuantity((prev) => Math.max(0, prev + delta));
    }
  }
  async function purchaseTickets() {
    try {
      const stripe = await stripePromise;
      const totalCost = regularQuantity * event.evnttd.ticketPrice //+ vipQuantity * event.evnttd.vipPrice;
      // Prepare data to send to the backend
      if (totalCost > 0) {
           // Call backend to create a Stripe payment intent
      const response = await fetch(`https://alphaeventappdevmode.onrender.com/create-payment-intent`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ 
          eventID: event.eventID, 
          regularQuantity, 
          vipQuantity, 
          totalCost 
        }),
      });
      const { clientSecret } = await response.json();
          // Redirect to Stripe payment page
          const result = await stripe.confirmCardPayment(clientSecret, {
          payment_method: { card: elements.getElement(CardElement) }, });

     if (result.error) {
            setTicketMessage("Payment failed. Please try again.");
            return;}

        // Payment succeeded; proceed to ticket creation
      completeTicketPurchase();
    } else {
      // Skip payment for free events
      completeTicketPurchase();
    }
  } catch (error) {
    console.error("Error purchasing tickets:", error);
    setTicketMessage("There was an error processing your request.");
  }
}
async function completeTicketPurchase() {

      const response = await fetch(`https://alphaeventappdevmode.onrender.com/tickzCrt/${eventID}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ regularQuantity, vipQuantity }),
      });
      const result = await response.json();
      if (response.ok) {
        setTicketMessage(`Tickets purchased successfully! Ticket ID: ${result.newTicket.ticketID}`);
      } else {
        setTicketMessage(result.msg || "Error purchasing tickets.");
      }
    }
  if (!event) {
    return <div>Loading event details...</div>; // Render a loading state while fetching event details
  }
  //function purchaseTickets() {
   // alert(`Regular Tickets: ${regularQuantity}\nVIP Tickets: ${vipQuantity}`);
    // Here you could send data to the server if needed.
    // fetch('/purchase', {
    //     method: 'POST',
    //     body: JSON.stringify({ regularQuantity, vipQuantity }),
    //     headers: { 'Content-Type': 'application/json' }
    // });
 // }

  return (
    <div className='flex  flex-col items-center font-Lato mb-12 gap-[10px]'>
   
   {/* purchase ticket section */}
    <div className='rounded-[10px] px-[20px] py-[10px] bg-customlightpink mt-[30px] w-[344px] h-[276px] '>
      <div className='w-[304px] flex flex-col gap-y-[15px] h-[112px]'>
        <h4 className=''>Tickets</h4>
        <div className='flex justify-between'>

          <label className='h-[px]'>
            <ol className='text-customSkyblue text-[16px] font-bold'>REGULAR</ol>  <ol>NGN {event.evnttd.ticketPrice}</ol></label>
          <label className='space-x-3'><button className='w-[24px] rounded-[3px] text-white bg-customlightgray h-[24px]' onClick={() => changeQuantity('regular', -1)}> - </button>
          <span className='font-bold'>{regularQuantity}</span>
          <button className='w-[24px] rounded-[3px] text-white  bg-customSkyblue h-[24px]' onClick={() => changeQuantity('regular', 1)}> + </button>
       </label> </div>

        {/* <div className='flex justify-between '>
          <label className='h-[36px]'><ol className='font-bold text-customSkyblue'>VIP </ol> <ol>NGN 5,000</ol></label>
          <label className='space-x-3 '><button className="w-[24px] rounded-[3px] bg-customlightgray text-white h-[24px]" onClick={() => changeQuantity('vip', -1)}>-</button>
          <span className='font-bold'>{vipQuantity}</span>
          <button className='w-[24px] bg-customSkyblue h-[24px] rounded-[3px] text-white' onClick={() => changeQuantity('vip', 1)}>+</button>
        </label></div> */}
<div className='text-center  text-white h-[44px] mt-5 rounded-[10px] border px-[32px] py-[16px] bg-customSkyblue'><button  onClick={purchaseTickets}>Purchase Tickets</button></div>
        </div>
      
    </div>

{/* Add to calender section */}
    <div>
    <div class="w-[344px] h-[194px] p-4 bg-customlightpink  rounded-[10px]">
  <h2 class="text-[18px] leading-[27px] font-bold text-gray-800">Event Date & Time</h2>
  <p class="text-customlightgray mt-[7px]">  <span class="font-bold">{event.evnttd.eventStart}</span></p>
  
  <button class="mt-[25px] px-[20px] py-2 border border-blue-500 text-blue-500 rounded-[10px] hover:bg-blue-50 w-full">
    Add to Calendar
  </button>
</div>
    </div>


    <div class="w-[344px] h-[161px] px-[20px] py-[10px] bg-customlightpink  rounded-[10px]">
  <h5 class="text-[18px] leading-[27px] font-bold ">Event Organizers</h5>
  
  <div class="flex items-center justify-between mt-2">
    <div class="flex items-center">
      <img src={img1} alt="Organizer" class="w-10 h-10 rounded-full"/>
      <span class="ml-3 text-customlightgray font-normal">{event.evnttd.organizerName}</span>
    </div>
    <a href="#" class="text-customSkyblue text-sm font-medium hover:underline">+ Follow</a>
  </div>
  
  <button class="mt-4 px-4 py-2 border border-customSkyblue text-customSkyblue rounded-lg hover:bg-blue-50 w-full">
    Contact the organizer
  </button>
</div>
<div>
<div class="max-w-sm h-[78px] mx-auto p-4">
  <h2 class="text-lg font-semibold text-gray-800">Tags</h2>
  
  <div class="flex flex-wrap gap-[15px] justify-between text-customlightgray  mt-3">
    <span class="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm">CareerPath</span>
    <span class="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm">Coaching</span>
    <span class="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm">Abuja events</span>
    <span class="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm">Growth</span>
    <span class="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm">Networking</span>
    <span class="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm">Innovative</span>
    <span class="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm">CareerEmpowerment</span>
  </div>
</div>
</div>
  

    </div>
  );
};



export default EventTicket