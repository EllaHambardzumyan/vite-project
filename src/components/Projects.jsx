import React from 'react'
import ProjectItem from './ProjectItem'

export default function Projects() {
  return (
    <div id='projects' className=' w-full m-auto md:pl-20 p-4 py-16'>
      
          <h1 className='text-4xl font-bold text-center text-[#8297E4]'>Projects</h1>
          <p  className='text-center py-8 font-bold text-gray-500' >“Experience is the name everyone gives to their mistakes.” – Oscar Wilde</p>
             <div className='grid gap-y-20 gap-x-20 sm:grid-cols-4 gap-12 w-100% h-full'>
              {/* <ProjectItem  img={image1Img} title='Queen Elizabeth'/>
              <ProjectItem  img={image2Img} title=' Game Chess'/>
              <ProjectItem  img={image3Img} title='Book Store'/>
              <ProjectItem  img={image4Img} title=''/> */}
             </div>
    </div>
  )
}
