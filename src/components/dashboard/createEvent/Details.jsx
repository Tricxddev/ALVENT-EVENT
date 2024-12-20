import React, { useState, useRef, useEffect} from "react";
import cloudIcon from "../../../assets/cloudIcon.svg"
// import Section1 from './Section1
import Onboardingleft from "../onboardingleft/Onboardingleft";
import ProfileSearchBar from "../../dashboard/OnBoarding/ProfileSearchBar"
import delectIcon from "../../../assets/delectIcon.svg";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import axios from "axios";
import questionmark from "../../../assets/questionmark.svg"
import Ticketing from "./Ticketing"; 
//import React from "react";


const CreateEvent = () => {
  const [formData, setFormData] = useState()
  const [uploadedImage, setUploadedImage] = useState(null); // Moved to parent
  const [userID, setUserID] = useState("");
  const [maximumattedees, setMaximumattedees] = useState("");
  const [countries, setCountries] = useState([]);
  const [states, setStates] = useState([]);
  const [cities, setCities] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState("");
  const [selectedState, setSelectedState] = useState("");
  const [selectedCity, setSelectedCity] = useState("");
  const [eventTitle, setEventTitle] = useState("");
  const [eventDesc, seteventDesc] = useState("");
  // const [eventDate, setEventDate] = useState("");
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [StartTime, setStartTime] = useState(null);
  const [EndTime, setEndTime] = useState(null);
  const [eventurl, setUrl] = useState(null);
  const [eventType, setEventType] = useState("");
  const [file, setFile] = useState(null);
  const [imagePreview, setImagePreview] = useState("");
  // const [eventImgURL, setEventImgURL] = useState("");
  const [eventUrl, seteventUrl ] = useState("");
  const [isLoading, setIsLoading] = useState(false);
    const [showMessageBox1, setShowMessageBox1] = useState(false);
    const [showMessageBox2, setShowMessageBox2] = useState(false);
    const [tickeType, setTickeType] = useState("");
    const [ticketPrice, setTicketPrice] = useState("");



    
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
   const ticketTypes1Ref = useRef(null);
    const ticketTypes2Ref = useRef(null);
  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };
    // Show and hide message box 1
    const handleAddTicketType = () => {
      setShowMessageBox1(true);
      setTimeout(() => {
        setShowMessageBox1(false);
      }, 3000);
    };
      // Show and hide message box 2
  const handleCreateEvent = () => {
    setShowMessageBox2(true);
    setTimeout(() => {
      setShowMessageBox2(false);
    }, 3000);
  };
   // Clear inputs in ticketTypes1 container
   const clearTicketTypes1Inputs = () => {
    const inputs = ticketTypes1Ref.current.querySelectorAll("input");
    const select = ticketTypes1Ref.current.querySelector("select");

    // Clear all input fields
    inputs.forEach((input) => (input.value = ""));

    // Reset the select field to its default option
    if (select) {
      select.value = "selectEventType";
    }
  };
    //const [userID, setUserID] = useState(''); // User email state
  useEffect(() => {
    const storedEmail = localStorage.getItem('userEmail');
    if (storedEmail) {
      setUserID(storedEmail);
      fetchUserID(storedEmail);
    }
  }, []);
  const fetchUserID = async (userEmail) => {
    try {
      const response = await fetch(`https://alphaeventappdevmode.onrender.com/userNamFetch/${userEmail}`);
      //console.log("NEW:",response)
      if (response.ok) {
        const data = await response.json();
        let useID=data.data.userID
        console.log('Fetched ID:', useID);
        setUserID(useID); 
      } else {
        console.error('Failed to fetch total revenue:', response.statusText);
      }
    } catch (error) {
      console.error('Error fetching total revenue:', error);
    }
  };


// Fetch all countries

  useEffect(() => {
    fetch("https://alphaeventappdevmode.onrender.com/countries") // Fetch countries from your backend
      .then((response) => response.json())
      .then((data) => {
        console.log("Fetched countries data:", data);
        setCountries(data);
      })
      .catch((error) => console.error("Error fetching countries:", error));
  }, []);

  
  
  const handleCountryChange = (e) => {
    const countryId = e.target.value;
    console.log("Selected Country ID:", countryId); // Debugging log
    setSelectedCountry(countryId);

    fetch(`https://alphaeventappdevmode.onrender.com/states/${countryId}`)
        .then((response) => {
            if (!response.ok) throw new Error("Failed to fetch states");
            return response.json();
        })
        .then((data) => {
            console.log("Fetched States:", data); // Debugging log
            setStates(data);
            setCities([]); // Clear cities when a new country is selected
        })
        .catch((error) => console.error("Error fetching states:", error));
};


const handleCityChange = (e) => {
  const cityId = e.target.value;
  console.log("Selected State ID:", cityId); // Debugging log
  setSelectedCity(cityId);}

const handleStateChange = (e) => {
  const stateId = e.target.value;
  console.log("Selected State ID:", stateId); // Debugging log
  setSelectedState(stateId);

  fetch(`https://alphaeventappdevmode.onrender.com/cities/${stateId}`)
      .then((response) => {
          if (!response.ok) throw new Error("Failed to fetch cities");
          return response.json();
      })
      .then((data) => {
          console.log("Fetched Cities:", data); // Debugging log
          setCities(data);
      })
      .catch((error) => console.error("Error fetching cities:", error));
};













  //  Handle file upload
const handleFileChange = async (event) => {
  const file = event.target.files[0];
  if (file) {
    const validTypes = ["image/png", "image/jpeg", "image/gif"];
    setFile(file);
    setImagePreview(URL.createObjectURL(file)); // Create image preview
    if (!validTypes.includes(file.type)) {
      alert("Please upload a valid image file (PNG, JPG, or GIF).");
      return;
    }
       // Validate file size (e.g., max 2MB)
    const maxSize = 200 * 1024 * 1024;
    if (file.size > maxSize) {
      alert("File size exceeds the 2MB limit.");
      return;
    }
    setIsLoading(true); // Show loading spinner
    
    try{
      // Create form data for Cloudinary upload
    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", "ALVENT_PRESET"); // Replace with your Cloudinary upload preset
    formData.append("cloud_name", "dgeedhozf"); 
    // Upload to Cloudinary
    const response = await fetch("https://api.cloudinary.com/v1_1/dgeedhozf/image/upload", {
      method: "POST",
      body: formData,
    });
    if (!response.ok) {
      throw new Error("Failed to upload image. Please try again.");
    }
    const data = await response.json();
    setUploadedImage(data.secure_url); // Save the secure URL of the uploaded image
    console.log("Uploaded Image URL:", data.secure_url);
  } catch (error) {
    console.error("Image upload failed:", error.message);
    alert("Image upload failed. Please try again.");
  }
}};

const handleSubmit = async (event) => {
  event.preventDefault();
  // const eventType = document.getElementById("eventType");
  // const tickeType = document.getElementById("tickeType"); // Use 'tickeType' for backend
  // const eventTitle = document.getElementById("eventTitle");
  // const eventDesc = document.getElementById("description");
  // const ticketPrice = document.getElementById("ticketPrice"); // Add this field

  const formData = new FormData();
  
  
  formData.append("eventTitle", eventTitle || "");
  formData.append("eventDesc", eventDesc || "");
  //formData.append("eventCat", event.target.eventCategory?.value || "");
  formData.append("eventType", eventType || "");
  formData.append("StartTime", StartTime || "");
  formData.append("EndTime", EndTime || "");
  formData.append("eventType", eventType || "");
 
  formData.append("maximumattedees", maximumattedees );
  //formData.append("customTags", event.target.customTags?.value || "");
  //formData.append("accessibilityOption",event.target.accessibilityOption?.value || "");
  if (startDate) {
    formData.append("eventStart", startDate.toISOString());
  }
  if (endDate) {
    formData.append("eventEnd", endDate.toISOString());
  }
  formData.append("eventCountry", selectedCountry);
  formData.append("eventState", selectedState);
  formData.append("eventCity", selectedCity);
  // formData.append("eventVenue",seteventVenue);

  //formData.append("tickeType", event.target.tickeType?.value || "");
  formData.append("tickeType", tickeType || ""); // Correct name for backend
  formData.append("eventImgURL", uploadedImage || ""); // Uploaded image
  formData.append("ticketPrice", ticketPrice ); // Add ticket price field
  formData.append("eventUrl", eventUrl ); // Add ticket price field
  // formData.append("eventDate", eventDate ); // Add ticket price field

  for (let pair of formData.entries()) {
    console.log(pair[0]+ ': ' + pair[1]);
  }
  










  
  try {
    const response = await axios.post(`https://alphaeventappdevmode.onrender.com/createVnt/${userID}`, formData, {
      headers: { "Content-Type": "application/form-data" },
    });
    console.log("formData:",response)
    alert("Event created successfully!");
  } 
  
  
 catch (error) {
  console.error("Error creating event:", error.response?.data || error.message);
  alert("Failed to create event.");
}

};



  
    //const [uploadedImage, setUploadedImage] = useState(null); // URL of uploaded image
    const fileInputRef = useRef(null);
  const handleDrop = (event) => {
    event.preventDefault();
    const file = event.dataTransfer.files[0];
    if (file) handleFileChange({ target: { files: [file] } });
  };

    // Open the file picker
    const handleClick = () => {
     fileInputRef.current.click();
    };
  
  const [isToggled, setIsToggled] = useState(true);

  //const [eventType, setEventType] = useState('');


// /   const [eventType, setEventType] = useState('');

  const handleEventTypeChange = (e) => {
    setEventType(e.target.value);
  };


  return (
 
<div className="max-w-[1140px] pt-[48px]   h-auto">

{/* first section */}


{/* second section */}

<div className='max-w-[1032px] mt-[32px] rounded-[12px] border-customLighterGray pt-[52px] pb-[40px] px-[40px] h-[335px] roubded-[12px] border-[0.8px]'>
            <div><h4 className='font-bold  text-[18px] mb-[16px] '>
              Event Banner
            </h4></div>

            {/* select image section */}
            <div className=' items-center  text-center max-w-[952px] h-[200px] rounded-[12px] border-[0.8px] '>
              
              <div className='w-[284px] mx-auto py-[46.5px]  flex flex-col gap-y-[24px] h-[107px]' onClick={handleClick}
               onDrop={handleDrop}
               onDragOver={(e) => e.preventDefault()}
              
              >
                
                {uploadedImage ? (
                  // Uploaded image preview
                  <img
                    src={uploadedImage}
                    alt="Uploaded Preview"
                    className="w-full object-fill h-32  rounded-[12px]"
                    
                  />
                ) : (<div>
                  <ol className='mx-auto flex  flex-col'><img className='mx-auto ' src={cloudIcon} alt="cloudIcon" /></ol>
                  <ol className=''>
                    <li>Click to upload or drag and drop</li>
                    <li>PNG, JPG or GIF (MAX. 800x400px)</li>
                  </ol></div>)}
              </div>

              {/* Hidden file input */}
              <input
                type="file"
                accept="image/png, image/jpeg, image/gif"
                ref={fileInputRef}
                onChange={handleFileChange}
                className="hidden"
              />
               
            </div>

          </div>

          {/* Third section */}
          <div className="max-w-[1032px] mt-[24px] min-h-[750px]  border-[0.8px] rounded-[12px] px-[40px] py-[40px]">
          <h2 className="font-semibold text-lg mb-4">Basic Information</h2>
          <form className="space-y-4 "  onChange={handleChange}>
          {/* onSubmit={handleSubmit} */}
              <div>
                <label htmlFor="eventTitle" className="block font-medium mb-2">Event Title</label>
                <input
                name="eventTitle"
                  type="text"
                  id="eventTitle"
                  placeholder="Enter event title"
                  className="w-full border h-[52px] border-customLighterGray rounded-[12px] px-[20px] focus:outline-none focus:ring-2 focus:ring-blue-500"
                  onChange={(event) => setEventTitle(event.target.value)}        
                   />
              </div>

              {/* Description */}
              <div>
                <label htmlFor="ventDesc" className="block font-medium mb-2">Description</label>
                <textarea
                  id="eventDesc"
                  name="eventDesc"
                  placeholder="Enter event description"
                  className="w-full  border-customLighterGray border rounded-[12px] px-[20px]  focus:outline-none focus:ring-2 focus:ring-blue-500"
                  rows="3"
                  onChange={(event) => seteventDesc(event.target.value)} 
                ></textarea>
              </div>

              <div>
            <label htmlFor="eventcapacity"   className="block  font-medium mb-2">Event capacity</label>
           <input
              type="value" 
              id="maximumattedees" name="maximumattedees"
              placeholder="Maximum attedees"
              className="w-full   focus:ring-2 border-customLighterGray h-[52px] border rounded-[12px] px-[20px]  focus:outline-none  focus:ring-blue-500  placeholder:text-[16px] "
              rows="3"
              onChange={(event) => setMaximumattedees(event.target.value)} 
              
              />
 </div>

{/* Event type section */}

<div className="mt-4 max-w-[325px] h-[78px]  ">
  <label htmlFor="eventType" className="block text-sm font-medium text-gray-700 mb-1">Event Type</label>
  <select
    id="eventType"
    name="eventType"
    className="w-full border h-[52px] border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
    value={eventType}
    onChange={handleEventTypeChange}
  >
    <option  value="">Select Event Type</option>
    <option value="online">Online</option>
    <option value="physical">Physical</option>
  </select>
</div>

{eventType === 'online' && (
  <div className="mt-4">
    <label htmlFor="url" className="block text-sm  font-medium text-gray-700 mb-1">URL</label>
    <input
      type="url"
      id="eventUrl"
      name="eventUrl"
      onChange={(event) =>seteventUrl (event.target.value)} 
      placeholder="eg. https://meet.google.com/xyz"
      className="w-full border border-gray-300 h-[52px] pl-2 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
    />
  </div>
)}

{eventType === 'physical' && (
  <div className="max-w-[1032px] mt-[32px] rounded-[12px] border-[0.8px] p-[40px] gap-[20px]">
    <div className="font-bold leading-[27px] text-[18px]">
      <h5>Venue Information</h5>
    </div>

    <div className="grid grid-cols-1  md:grid-cols-2 gap-4">
      {/* Country Dropdown */}
      <div>
        <label htmlFor="country" className="block text-sm font-medium text-gray-700 mb-1">
          Country
        </label>
        <select
          id="country"
          name="country"
          className="w-full border h-[52px] border-gray-300 rounded-md  shadow-sm focus:ring-blue-500 focus:border-blue-500"
          value={selectedCountry}
          onChange={handleCountryChange}
        >
          <option className="" value="">Select Country</option>
          {countries.map((country) => (
            <option key={country.geonameId} value={country.geonameId}> {/* Use country.id as unique key */}
              {country.countryName}
            </option>
          ))}
        </select>
      </div>

      {/* State Dropdown */}
      <div>
        <label htmlFor="state" className="block text-sm font-medium text-gray-700 mb-1">
          State
        </label>
        <select
          id="state"
          name="state"
          className="w-full border h-[52px] border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
          value={selectedState}
          onChange={handleStateChange}
          disabled={states.length === 0} // Disable if no states available
        >
          <option value="">Select State</option>
          {states.length > 0 ? (
            states.map((state) => (
              <option key={state.geonameId} value={state.geonameId}> {/* Use state.id as unique key */}
                {state.stateName}
              </option>
            ))
          ) : (
            <option>No states available</option>
          )}
        </select>
      </div>

      {/* City Dropdown */}
      <div>
        <label htmlFor="city" className="block text-sm font-medium text-gray-700 mb-1">
          City
        </label>
        <select
          id="city"
          name="city"
          className="w-full border h-[52px] border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
          disabled={cities.length === 0} // Disable if no cities available
          onChange= {handleCityChange}
      >
          <option value="">Select City</option>
          {cities.length > 0 ? (
            cities.map((city) => (
              <option key={city.geonameId} value={city.geonameId}> {/* Use city.id if available */}
                {city.cityName}
              </option>
            ))
          ) : (
            <option>No cities available</option>
          )}
        </select>
      </div>


    </div>


    {/* Address Dropdown */}
    <div className="mt-3">
        <label htmlFor="address" className="block text-sm font-medium text-gray-700 mb-1">
          Address
        </label>
      <input type="text" 
          id="address"
          name="address"
          placeholder="address"
          className="w-full border h-[52px] pl-2 border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
         
       />
        
       
      </div>
  </div>
)}

  










              {/* <input
                type="text"
                id="customTags" 
                placeholder="Custom Tags (comma-seperated)" name="customTags"
                className="w-full   focus:ring-2 border-customLighterGray h-[52px] border rounded-[12px] px-[20px]  focus:outline-none  focus:ring-blue-500  placeholder:text-[16px]"
                rows="3"
              />
              <input
                type="text"
                id="accessibilityOption"
                placeholder="Accessibilty option" name="accessibilityOption"
                className="w-full   focus:ring-2 border-customLighterGray h-[52px] border rounded-[12px] px-[20px]  focus:outline-none  focus:ring-blue-500  placeholder:text-[16px]"
                rows="3"
              /> */}
           

    


              {/* Dropdowns for Event Category and Format */}
         
            
        {/* Event date section */}
        <div>
            <div className="flex  justify-between">
            <h2 className="font-medium text-gray-800 text-[16px] mb-2">Starts</h2>
            <h2 className="font-medium text-gray-800 text-[16px] mb-2">Ends</h2>
            </div>



       <div className="flex  w-full  h-[145px] justify-between">
        <div className="max-w-[288px] h-[64px]">
          {/* first date */}
          <div className="bg-gray-100 border  border-gray-300 rounded-md p-4 flex items-center">
            <div className="">
              <label
                htmlFor="startDate" name="startDate"
                className="block text-gray-500 text-sm mb-1"
              >
               Label (mm/dd/yyyy)
              </label>
              <DatePicker
                selected={startDate}
                onChange={(date) => setStartDate(date)}
                dateFormat="MM/dd/yyyy"
                placeholderText="mm/dd/yyyy"
                className="w-full bg-gray-100 text-gray-700 text-sm border-none focus:outline-none"
                 id="eventDate"
          name="eventDate"
       
             />
            </div>
          

          </div>
        </div>


{/* second date */}
        <div className="max-w-[288px]  h-[64px]">
          
          <div className="bg-gray-100 border  border-gray-300 rounded-md p-4 flex items-center">
            <div className="">
              <label
                htmlFor="endDate" name="endDate"
                className="block text-gray-500 text-sm mb-1"
              >
               Label (mm/dd/yyyy)
              </label>
              <DatePicker
                selected={endDate}
                onChange={(date) => setEndDate(date)}
                dateFormat="MM/dd/yyyy"
                placeholderText="mm/dd/yyyy"
                className="w-full bg-gray-100 text-gray-700 text-sm border-none focus:outline-none"
                     id="endDate"
          name="endDate"
             />
            </div>
          
          </div>
        </div>
        </div>
       </div>

       <div class="">
  <h2 class="text-lg font-semibold mb-4">Event Time</h2>

      {/* <!-- Starts Section --> */}
  <div class="grid grid-cols-1 gap-2 lg:grid-cols-2 justify-between">

   

<div >
      <h3 class="text-sm font-medium mb-2">Starts</h3>
      <div>
        <div className="pt-3 border rounded-md shadow-sm px-2 border-900 bg-[#F4F4F4]">
      <div class="flex items-center gap-2 place-items-center  h-[64px] ">
        
       
       
        <div class="flex h-[64px] w-[100px]  flex-col">
          <label class="text-xs font-medium  text-gray-600" for="start-time">Time</label>
          <input
          name="startTime"
            id="startTime"
           type="time"
            placeholder="hh:mm"
            class="border rounded-md  py-1 text-sm text-gray-800 w-20 focus:outline-none focus:ring focus:ring-indigo-200"
            onChange={(event) => setStartTime(event.target.value)}
          />
        </div>
      
      
      
      
      </div>
      </div>
      </div>
    </div>


    {/* <!-- Ends Section --> */}
    <div >
      <h3 class="text-sm font-medium mb-2">Ends</h3>
      <div>
        <div className="pt-3 border rounded-md shadow-sm px-2 box-content border-900 bg-[#F4F4F4]">
      <div class="flex items-center gap-2 place-items-center  h-[64px] ">
        
       
       
        <div class="flex h-[64px] w-[100px]  flex-col">
          <label class="text-xs font-medium  text-gray-600" for="end-time">Time</label>
          <input
          name="EndTime"
            id="EndTime"
            type="time"
            placeholder="hh:mm"
            class="border rounded-md  py-1 text-sm text-gray-800 w-20 focus:outline-none focus:ring focus:ring-indigo-200"
            onChange={(event) => setEndTime(event.target.value)}
                  />
        </div>
      
      
      
    
      </div>
      </div>
      </div>
    </div>
  </div>
</div>

 
    
        
        {/* <div className="max-w-full mt-[32px] mb-[60px] mx-[10px] text-center rounded-[8px] px-[32px] py-[16px] text-white text-[20px] items-center  bg-customSkyblue"><button className="">Proceed</button></div> */}
           <section className="flex w-full overflow-hidden mt-[28px]">
             {/* Ticket type container */}
             <div id="tickeType" className="ticketTypes w-full">
               <form onSubmit={handleSubmit}>
                 {/* Ticket Types 1 */}
                 <div
                   ref={ticketTypes1Ref}
                   className="ticketTypes1 border border-[#757575] rounded-[12px] w-full lg:w-[738px] px-[16px] py-[16px] mr-[45px]"
                 >
                   <div className="tickeType">
                     <p className="text-[18px] font-bold">Ticket type</p>
                     <div className="flex flex-col lg:flex-row gap-[10px] mt-[36px] w-full">
                       <div className="inputOption flex border border-[#3A7BD5] px-[10px] rounded-tl-[8px] rounded-tr-[8px] w-full lg:w-[352px]">
                         <select
                           name="tickeType"
                           id="tickeType"
                           className="text-[12px] font-normal w-full lg:w-[352px] focus:outline-none"
                        onChange={(event) => setTickeType(event.target.value)}
                         >
                           <option value="selectEventType">
                             Select Ticket Type
                           </option>
                           {/* <option value="earlyBird">Early Bird</option> */}
                           <option value="vip">Vip</option>
                           <option value="Regular">Regular</option>
                         </select>
                       </div>
                       <div>
                         <img
                           src={delectIcon}
                           alt="Delete Icon"
                           className="deleteIcon1 cursor-pointer"
                           onClick={clearTicketTypes1Inputs}
                         />
                       </div>
                     </div>
                   </div>
     
                   <div className="flex flex-col lg:flex-row gap-[40px] mt-[120px]">
                     <fieldset>
                       <label
                         htmlFor="ticketPrice"
                         className="px-[8px] text-[16px] font-bold text-[#525252]"
                       >
                         Ticket Price
                       </label>
                       {/* <br /> */}
                       <input

                       name ="ticketPrice"
                       id="ticketPrice"
                         type="text"
                         placeholder="0"
                         className="border border-[#BEBEBE] rounded-[12px] w-full lg:w-[217px] h-[52px] px-[20px] py-[18px]"
                      onChange={(event) => setTicketPrice(event.target.value)}  
                      />
                     </fieldset>
                  
                   </div>
     
     
                 {/* Message Box 1 */}
                 {showMessageBox1 && (
                   <div className="messageBox1 bg-green-500 text-white p-4 rounded mt-4">
                     Ticket Type Added Successfully
                   </div>
                 )}
     
               
              
                 </div>
     
     
     
                 {/* Message Box 2 */}
                 {showMessageBox2 && (
                   <div className="messageBox2 bg-green-500 text-white p-4 rounded mt-4">
                     You have Successfully Publish an Event
                   </div>
                 )}
     
                 {/* <button
                   type="button"
                   onClick={handleCreateEvent}
                   className="bg-[#3A7BD5] text-[#FFFFFF] mt-[32px] w-full lg:w-[700px] px-[16px] py-[16px] text-center rounded-[8px]"
                 >
                   Publish Event
                 </button> */}
                    <button
                type="submit"
                className="w-full h-[56px] py-3 mt-4 bg-customSkyblue text-white font-semibold rounded-[8px]"
                onClick={handleSubmit}
              >
                Proceed</button>
               </form>
             </div>
           </section>
      </form>


</div>
  </div>


  )
}

export default CreateEvent