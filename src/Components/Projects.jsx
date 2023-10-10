import React from 'react'

// Live projects section starts
const Projects = () => {
  return (
    <div name="projects" className="w-full bg-white p-10">
      <div className="flex bg-gray-40 p-4 mx-auto flex-col md:flex">
        <div>
          <h1 className='text-3xl text-[#000] inline border-b-4 border-[#00df9a]'>LIVE PROJECTS</h1>
        </div>
        <div className="mx-auto my-10 flex flex-col md:flex">
        
        <div>
          <a href="https://goshenadelak.com/" className='text-3xl inline text-[#00df9a] hover:text-[#000]'>
              Goshen Adelak Autos | A Car listing website
          </a>
          <p className='py-3 sm:text-2xl'>This project was built on Wordpress using the latest plugins(elementor)</p>
        </div>
         <div>
            <a href="https://goodnewshealthservices.com" className='text-3xl inline text-[#00df9a] hover:text-[#000]'>
              Health care services platform for both disabilities
            </a>
            <p className='py-3 sm:text-2xl'>This was built and developed using python and django to implement CRUD operation</p>
        </div>
        <div>
            <a href="https://github.com/AloNdubuisi/student-mgt-dashboard-app" className='text-3xl inline text-[#00df9a] hover:text-[#000]'>
              student management dashboard
            </a>
            <p className='py-3 sm:text-2xl'>This was built and developed using python and django to implement CRUD operation</p>
          </div>
          <div>
            <a href="https://github.com/AloNdubuisi/django-e-learning-landing-page" className='text-3xl inline text-[#00df9a] hover:text-[#000]'>
              E-learning Landing page
            </a>
            <p className='py-3 sm:text-2xl'>This was built on python and django</p>
          </div>
          <div>
            <a href="https://js-currency-converter-api.vercel.app" className='text-3xl inline text-[#00df9a] hover:text-[#000]'>
              js currency converter api
            </a>
            <p className='py-3 sm:text-2xl'>This was built on JavaScript to demonstrate how to fetch API in JavaScript</p>
          </div>
          <div>
            <a href="https://materials.disqussion.com/" className='text-3xl inline text-[#00df9a] hover:text-[#000]'>
              Disqussion forum
            </a>
            <p className='py-3 sm:text-2xl'>An academic platform providing undergraduates with project topics and materials.</p>
          </div>
          <div>
            <a href="https://github.com/AloNdubuisi/m-classicalemart-react" className='text-3xl inline text-[#00df9a] hover:text-[#000]'>
              Mary Classical E-commerce
            </a>
            <p className='py-3 sm:text-2xl'>An E-commerce platform for Mary Classical, for selling wears.</p>
          </div>
          <div>
            <a href="https://alondubuisi.github.io/digital_marketing_showcase/" className='text-3xl inline text-[#00df9a] hover:text-[#000]'>
              Digital Marketing website
            </a>
            <p className='py-3 sm:text-2xl'>This is a digital marketing landing page.</p>
          </div>
        </div>
      </div>
      <div className='border-b-4 border-gray-200'></div>
      {/* skills section ends */}
      {/* our works section starts */}
      <div className="p-4 mx-auto flex flex-col md:flex">
        <div>
          <h1 className='text-4xl text-[#000] inline border-b-4 border-[#00df9a]'>OUR WORKS</h1>
        </div>
        <div className="mx-auto my-10 flex flex-col md:flex">
          <div>
            <h1 className='text-3xl inline'>Frontend Web App Development</h1>
            <p className='py-4'>We give you a top notch of an application that is secured and scalable using latest techlogies</p>
          </div>          
          <div>
            <h1 className='text-3xl inline'>Backend Web App Development</h1>
            <p className='py-4'>We give you a top notch of an application that is secured and scalable using latest techlogies</p>
          </div>          
          <div>
            <h1 className='text-3xl inline'>Data Analysis & Data Science</h1>
            <p className='py-4'>We give you a top notch of different analysis that makes an informed descisions using the latest tools</p>
          </div>          
        </div>
      </div>
{/* our works section ends */}
    </div>
  );
}
export default Projects;

