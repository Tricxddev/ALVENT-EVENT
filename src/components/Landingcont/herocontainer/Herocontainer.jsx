import { useState,useEffect  } from "react";
import locatn from "/locatn.svg"
import arrowd from "/arrowd.svg"
import line from "/line.svg"
import search from "/search.svg"


                 
const states = [
  "Abia", "Adamawa", "Akwa Ibom", "Anambra", "Bauchi", "Bayelsa", 
  "Benue", "Borno", "Cross River", "Delta", "Ebonyi", "Edo", 
  "Ekiti", "Enugu", "Gombe", "Imo", "Jigawa", "Kaduna", "Kano", 
  "Katsina", "Kebbi", "Kogi", "Kwara", "Lagos", "Nasarawa", 
  "Niger", "Ogun", "Ondo", "Osun", "Oyo", "Plateau", "Rivers", 
  "Sokoto", "Taraba", "Yobe", "Zamfara", "FCT (Abuja)"
];


// Mock search functionality


const Herocontainer = () => {

  const [states, setStates] = useState([]);
  const [selectedState, setSelectedState] = useState("");
  const [events, setEvents] = useState([]);



    // Fetch states from backend
    useEffect(() => {
      fetch('/api/states') // Replace with your backend endpoint
        .then(response => response.json())
        .then(data => setStates(data))
        .catch(error => console.error("Error fetching states:", error));
    }, []);

     // Handle search button click

      // Handle search button click
  const searchEvents = () => {
    if (!selectedState) {
      alert("Please select a state!");
      return;
    }

    fetch(`/api/events?state=${selectedState}`) // Replace with your backend endpoint
      .then(response => response.json())
      .then(data => setEvents(data))
      .catch(error => console.error("Error fetching events:", error));
  };

  return (
    <div className='px-5 md:px-[80px] pt-[60px] my-[60px] '>
 
<div loading="lazy" className=' bg-cover   bg-black opacity-[100%]  bg-center  h-screen rounded-[28px] w-full '  style={{ backgroundImage: "url('https://res.cloudinary.com/dzyvwxh7n/image/upload/v1731364264/Hero_Section_ooujz0.png')" }} >

<div className='flex flex-col text-[16px] gap-y-[71px] text-white items-center justify-center px-[10px] w-full py-[184px] '>
<div className= 'leading-[30px] max-w-[300px] md:max-w-[700px] lg:max-w-[858px] lg:h-[108px] text-[32px] md:text-[42px] lg:text-[52px]  text-center md:leading-[54.08px] font-bold '>
  <h4 className=''>Find, Explore, and Experience Events with a Single Click!</h4>
</div>




<div className='md:flex   md:max-w-[500px] lg:max-w-[613px] text-[16px] h-[100px] md:h-[64px] mx-auto justify-between border-[2px] rounded-[10px] border-white py-[12px] px-[24px] items-center'>
          <ol className=' flex items-center h-9 w-[223px] justify-between '>
            {/* location section */}
            <ol className='flex items-center space-x-2 '>
              <li className='w-[24px] h-[24px]'>
                <img src={locatn} alt="locatn" />
                </li>
             
             
             <ol className=' text-black ' >    <select
          className=" border-customdarkblue text-white bg-transparent  rounded-md p-3"
          value={selectedState}
          onChange={(e) => setSelectedState(e.target.value)}
        >
          <option value="" disabled>Select a state</option>
          {states.map((state, index) => (
            <option className="bg-customdarkblue" key={index} value={state}>
              {state}
            </option>
          ))}
        </select>
               </ol>



               
            {/* arrow section */}
           
          </ol></ol> 

          <ol>

            
            <img className='hidden mr-5 md:flex' src={line} alt="line" /></ol>

          <ol className='flex justify-between w-[254px] items-center'>

          <button
          className=" flex gap-6 w-full text-white px-4 py-2 rounded-md"
          onClick={searchEvents}
        >
    <li>Search for an event</li> 
     <li className='w-[35px] h-[35px] md:w-[40px] md:h-[40px]'> <img className='' src={search} alt="search" /></li>
        </button>
            {/* <li className='  w-[138px] h-[24px]'>Search for an event</li> */}
           {/* <li className='w-[35px] h-[35px] md:w-[40px] md:h-[40px]'> <img className='' src={search} alt="search" /></li> */}
          </ol>

        </div>


</div>
</div>
</div>




  )
}

export default Herocontainer