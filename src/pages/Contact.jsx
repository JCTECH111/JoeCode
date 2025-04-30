import React from 'react';
import contactButtonBg from '../assets/button-image.jpeg'; // Update with your image path

function Contact() {
  return (
    <div className='bg-white mt-20 md:ml-16 max-w-4xl rounded-xl '>
      <h2 className='text-3xl md:text-4xl font-bold text-gray-800 mb-6'>Get in touch</h2>
      
      <p className='text-gray-600 mb-8 leading-relaxed'>
        Let’s create something great together. Whether it’s sharing ideas, professional engagement, teaming up on a project, or walking you through my portfolio, I’m just a message or a call away.
      </p>

      <form className='space-y-6'>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
          <div>
            <label htmlFor='fullName' className='block text-sm font-medium text-gray-700 mb-2'>
              Full Name
            </label>
            <input
              type='text'
              id='fullName'
              className='w-full px-4 py-3  bg-gray-200 rounded-xl focus:ring-blue-500 focus:border-blue-500'
              placeholder='Your name'
            />
          </div>
          
          <div>
            <label htmlFor='email' className='block text-sm font-medium text-gray-700 mb-2'>
              Email Address
            </label>
            <input
              type='email'
              id='email'
              className='w-full px-4 py-3  bg-gray-200 rounded-xl focus:ring-blue-500 focus:border-blue-500'
              placeholder='your.email@example.com'
            />
          </div>
        </div>

        <div>
          <label htmlFor='message' className='block text-sm font-medium text-gray-700 mb-2'>
            Write your Message
          </label>
          <textarea
            id='message'
            rows={4}
            className='w-full px-4 py-3  bg-gray-200 rounded-xl focus:ring-blue-500 focus:border-blue-500'
            placeholder='Your message here...'
          ></textarea>
        </div>

        <button
          type='submit'
          className='relative overflow-hidden w-full  px-8 py-3 text-white font-medium rounded-xl hover:opacity-90 transition-opacity'
          style={{
            backgroundImage: `url(${contactButtonBg})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        >
          <span className='relative z-10'>Send Message</span>
          <div className='absolute inset-0 bg-blue-600 opacity-70 mix-blend-multiply'></div>
        </button>
      </form>
    </div>
  );
}

export default Contact;