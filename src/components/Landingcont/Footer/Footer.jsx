import React from 'react'
import Section2Footer from '../Footer/Section2Footer.jsx'
import {SignUp} from './SignUp.jsx'



const Footer = () => {
  return (
    <>
    <section className='bg-[#2F3B4C] w-full px-[30px] md:px-[100px] py-[60px] '>
    {/* <Form /> */}
    <SignUp />
    <Section2Footer />
    </section>
    </>
  )
}

export default Footer