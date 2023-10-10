import React from 'react';
import ProgressBar from "@ramonak/react-progress-bar";

const Skills = () => {
  return (
    <div name="skills" className='max-w-full bg-[#0B0E11] text-gray-400 sm:w-[100%] w-full bg-accent max-w-screen-xl sm:w-[100%]'>
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full md:h-[500px]'>
        <div>
          <p className='text-4xl font-bold inline border-b-4 border-b-4 border-[#00df9a]'>Skills</p>
        </div>
        <div className='w-full h-full my-8 grid grid-cols-3 sm:grid-cols-1 justify-center items-center text-start items-center w-max mt-6 gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3'>
          <div className='w-350'>
            <p className='pb-2 text-xl text-gray-300 sm:text-2xl'>Python [OOP | Django]</p>
            <ProgressBar completed={60} animationOnRender={true} width={300} height={30} className='md:w-[20px]' />
          </div>
          <div className='w-96'>
            <p className='pb-2 text-xl text-gray-300 sm:text-2xl'>JavaScript</p>
            <ProgressBar completed={70} animationOnRender={true} width={300} height={30} />
          </div>
          <div className='w-100'>
            <p className='pb-2 text-xl text-gray-300 sm:text-2xl'>Reactjs</p>
            <ProgressBar completed={65} animationOnRender={true} width={300} height={30} />
          </div>
          <div className='w-100'>
            <p className='pb-2 text-xl text-gray-300 sm:text-2xl'>Nextjs</p>
            <ProgressBar completed={45} animationOnRender={true} width={300} height={30} />
          </div>
          <div className='w-100'>
            <p className='pb-2 text-xl text-gray-300 sm:text-2xl'>Tailwind css</p>
            <ProgressBar completed={90} animationOnRender={true} width={300} height={30} />
          </div>
          <div className='w-100'>
            <p className='pb-2 text-xl text-gray-300 sm:text-2xl'>css3</p>
            <ProgressBar completed={95} animationOnRender={true} width={300} height={30} />
          </div>
          <div className='w-100'>
            <p className='pb-2 text-xl text-gray-300 sm:text-2xl'>html5</p>
            <ProgressBar completed={100} animationOnRender={true} width={300} height={30}/>
          </div>
          <div className='w-100'>
            <p className='pb-2 text-xl text-gray-300 sm:text-2xl'>Wordpress</p>
            <ProgressBar completed={85} animationOnRender={true} width={300} height={30}/>
          </div>
          <div className='w-100'>
            <p className='pb-2 text-xl text-gray-300 sm:text-2xl'>Git</p>
            <ProgressBar completed={75} animationOnRender={true} width={300} height={30}/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Skills
