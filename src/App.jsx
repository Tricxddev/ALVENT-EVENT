import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
//import { Route, Routes } from "react-router-dom";
//import React from 'react'
import { Cloudinary } from '@cloudinary/url-gen';
import { auto } from '@cloudinary/url-gen/actions/resize';
import { autoGravity } from '@cloudinary/url-gen/qualifiers/gravity';
import { AdvancedImage } from '@cloudinary/react';


const Landing = lazy(() => import("./components/Landingcont/landing/Landing.jsx"));
const Eventshome = lazy(() => import("./components/events/eventshome/Eventshome.jsx"));
const ExploreEvents = lazy(() => import("./components/events/exploreEvents/ExploreEvents.jsx"));
const Eventsdetailshome = lazy(() => import("./components/eventdetails/eventsdetailshome/Eventsdetailshome.jsx"));
const OnboardingMain= lazy(() => import("./components/dashboard/OnboardingMain/OnboardingMain.jsx"));
const CreateEvent= lazy(() => import("./components/dashboard/createEvent/CreateEvent.jsx"));
const OnboardEvent= lazy(() => import("./components/dashboard/OnboardEvent/OnboardEvent.jsx"));

import { SignUp } from "./components/signup/SignUp.jsx";
import { LogIn } from "./components/LogIn/LogIn.jsx";
//import Eventsdetailshome from './Eventsdetailshome';

import "./App.css";
import Applayout from "./components/Landingcont/layout/Applayout.jsx";

function App() {
  
  return (
    <>
      <Suspense
        fallback={
          <div className="font-poppins text-center text-4xl font-semibold text-red-600">
            Please wait...
          </div>
        }
      >
    
        <Routes>
          {/* Routes wrapped with Applayout */}
          <Route
            path="/"
            element={
              <Applayout>
                <Landing />
              </Applayout>
            }
          />
          <Route
            path="/eventshome"
            element={
              <Applayout>
                <Eventshome />
              </Applayout>
            }
          />


          <Route
            path="/eventsdetailshome/:eventID"
            element={
              <Applayout>
                <Eventsdetailshome />
              </Applayout>
            }
          />

          <Route
            path="/exploreEvents"
            element={
              <Applayout>
                <ExploreEvents />
              </Applayout>
            }
          />


          <Route
            path="/exploreEvents/:eventID"
            element={
              <Applayout>
                <ExploreEvents />
              </Applayout>
            }
          />


          {/* Standalone SignUp route */}
          <Route path="/signup" element={<SignUp />} />
          <Route path="/Login" element={<LogIn />} />
          <Route path="/OnboardingMain" element={<OnboardingMain />} />
          <Route path="/createEvent" element={<CreateEvent />} />
          <Route path="/OnboardEvent" element={<OnboardEvent />} />
        
          
        {/* Define the route here */}
      
      
        {/* <Route path="/Eventsdetailshome/:eventID" element={<Eventsdetailshome />} /> */}
      
    
      


        </Routes>
       
      </Suspense>
    </>
  );
}

export default App;