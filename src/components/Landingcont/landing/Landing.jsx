import React from 'react'
import Herocontainer from "../../Landingcont/herocontainer/Herocontainer.jsx"
import Amazing from "../../Landingcont/amazing/Amazing.jsx"
import Eventcoming from '../../Landingcont/eventcoming/Eventcoming.jsx'
import FeacturedEvents from '../../Landingcont/FeacturedEvents/FeacturedEvents.jsx'
import TrendingEvent from '../../Landingcont/TrendingEvent/TrendingEvent.jsx'
const Landing = () => {
  return (
    <div>

      <Herocontainer />
      <Amazing />
      <FeacturedEvents />
      <TrendingEvent />
      <Eventcoming />
    </div>
  )
}

export default Landing