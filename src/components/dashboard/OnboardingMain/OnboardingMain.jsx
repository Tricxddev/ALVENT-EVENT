import React from 'react'
import Onboardingleft from '../onboardingleft/Onboardingleft.jsx'
import ProfileSearchBar from '../../dashboard/OnBoarding/ProfileSearchBar.jsx'
import OnBoarding from '../../dashboard/OnBoarding/OnBoarding.jsx'

const OnboardingMain = () => {
  return (
    <>
    <section>
        <div className='flex' >
          <div><Onboardingleft/></div>
       <div className='w-full'><ProfileSearchBar />
        <OnBoarding /></div> 
        </div>
    </section>
    </>
  )
}

export default OnboardingMain