import React from 'react'
import Navbar from '../../navbar/navbar'
import Footer from '../Footer/Footer'

const Applayout = ({children}) => {
  return (
    <div> 
        <Navbar/>
       
{children}
 <Footer/>
    </div>
  )
}

export default Applayout