import React from 'react';
import Footer from './Footer';

const Contact = () => {
  return (
    <div name="skills" className='bg-[#0B0E11;] text-gray-400'>
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center py-10'>
        <div>
            <p className='text-5xl inline border-b-4 border-[#00df9a]'>Contact Me</p>
            <p className='py-4'>Shoot me on my Email on: alo.ndubuisi07@gmailcom</p>
        </div>
        <div className='w-full py-8'>
          <form action="https://getform.io/f/b4e42540-0a14-4bbd-ad83-8ce7e060198e" method="POST" className="flex flex-col max-w-[600px] w-full my-4">
            <input className="mt-4 p-2 text-2xl text-[#000]" type="text" placeholder="Name" name="name"/>
            <input className="my-4 p-2 text-2xl text-[#000]" type="email" placeholder="Email" name="email" />
            <textarea className="p-2 text-2xl text-[#000]" name="message" placeholder='Message' rows="10"></textarea>
            <button className='bg-black rounded-md font-medium px-4 py-3 my-8 mx-auto w-[300px] text-[#00df9a] item-center text-3xl'>Send Message</button>
          </form>
        </div>
      </div>
      <Footer/>
    </div>
  );
}

export default Contact;


