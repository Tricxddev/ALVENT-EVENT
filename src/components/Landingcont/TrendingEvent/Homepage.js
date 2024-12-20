// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import Section3 from './Section2TE';

// const Homepage = () => {
//   const [events, setEvents] = useState([]);

//   useEffect(() => {
//     const fetchEvents = async () => {
//       try {
//         const response = await axios.get('http://localhost:5000/api/events');
//         setEvents(response.data);
//       } catch (error) {
//         console.error('Error fetching events:', error);
//       }
//     };

//     fetchEvents();
//   }, []);

//   return (
//     <div className="p-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
//       {events.length > 0 ? (
//         events.map((event) => (
//           <Section3
//             key={event._id}
//             title={event.title}
//             date={event.date}
//             location={event.location}
//             organizer={event.organizer}
//             priceRange={event.priceRange}
//             image={event.image}
//           />
//         ))
//       ) : (
//         <p>No events available.</p>
//       )}
//     </div>
//   );
// };

// export default Homepage;
