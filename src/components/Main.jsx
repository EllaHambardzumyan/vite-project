import React from 'react'
import { TypeAnimation } from 'react-type-animation'
import {FaFacebookF , FaInstagram} from 'react-icons/fa'
import { MdAlternateEmail } from 'react-icons/md'

const Main = () => {
  return (
    <div className='w-full h-screen object-cover bg-no-repeat bg-cover ' id='main' style={{
        backgroundImage: `url(https://images.unsplash.com/photo-1604937455095-ef2fe3d46fcd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80)`
    }} >

  <div className='max-w-[700px] m-auto h-full w-full flex flex-col justify-center lg:items-start items-center'>
    <h1 className='sm:text-5xl text-4xl font-bold text-pink-400'>My name is Ella</h1>
    <h2 className='flex gap-[10px] sm:text-3xl text-2xl pt-4 text-gray-800'>
        I'm  
        <TypeAnimation
      sequence={[
          ' an Access student', 
        2000, 
          ' a member of ESN Yerevan', 
        2000, 
          ' a  finalist of FLEX program',
        2000,
       
      ]}
      wrapper="div"
      cursor={true}
      repeat={Infinity}
      style={{ fontSize: '1em' , paddingleft:'5px' }}
       />
    </h2>
    <div className='flex items-center justify-between pt-6 max-w-[200px] w-full'>
        <a href='https://www.facebook.com/profile.php?id=100076949634402&mibextid=ZbWKwL'><FaFacebookF  className='cursor-pointer' size={20}/></a>
        <a href='https://instagram.com/_e3ee__?igshid=YmMyMTA2M2Y='><FaInstagram  className='cursor-pointer' size={20}/></a>
        <MdAlternateEmail  className='cursor-pointer' size={20}/>
    </div>
  </div>
    </div>
  )
}

export default Main
