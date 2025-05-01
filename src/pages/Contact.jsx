import React, { useState } from 'react';
import contactButtonBg from '../assets/button-image.jpeg';
import axios from 'axios';

function Contact() {
  const backendUrl = import.meta.env.VITE_BACKEND_URL;
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [id]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);
  
    try {
      const response = await axios.post(`${backendUrl}/Mailer.php`, formData, {
        headers: {
          'Content-Type': 'application/json',
        },
      });
   if(response.data.status == "success"){
    setSubmitStatus({ success: true,
                     message: response.data.message || 'Message sent successfully!' });
      setFormData({ fullName: '', email: '', message: '' });
   }else{
    setSubmitStatus({ 
      success: false, 
      message: response.data.message || 'Failed to send message' 
    });
   }
      
      
    } catch (error) {
      if (error) {
        // Server responded with a status outside 2xx
        setSubmitStatus({ 
          success: false, 
          message:'Failed to send message' 
        });
      } else {
        // Network error or no response
        setSubmitStatus({ success: false, message: 'Network error. Please try again.' });
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className='bg-white mt-20 md:ml-16 max-w-4xl rounded-xl p-6'>
      <h2 className='text-3xl md:text-4xl font-bold text-gray-800 mb-6'>Get in touch</h2>
      
      <p className='text-gray-600 mb-8 leading-relaxed'>
        Let's create something great together. Whether it's sharing ideas, professional engagement, 
        teaming up on a project, or walking you through my portfolio, I'm just a message or a call away.
      </p>

      {submitStatus && (
        <div className={`mb-6 p-4 rounded-lg ${submitStatus.success ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
          {submitStatus.message}
        </div>
      )}

      <form className='space-y-6' onSubmit={handleSubmit}>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
          <div>
            <label htmlFor='fullName' className='block text-sm font-medium text-gray-700 mb-2'>
              Full Name
            </label>
            <input
              type='text'
              id='fullName'
              value={formData.fullName}
              onChange={handleChange}
              className='w-full px-4 py-3 bg-gray-200 rounded-xl focus:ring-blue-500 focus:border-blue-500'
              placeholder='Your name'
              required
            />
          </div>
          
          <div>
            <label htmlFor='email' className='block text-sm font-medium text-gray-700 mb-2'>
              Email Address
            </label>
            <input
              type='email'
              id='email'
              value={formData.email}
              onChange={handleChange}
              className='w-full px-4 py-3 bg-gray-200 rounded-xl focus:ring-blue-500 focus:border-blue-500'
              placeholder='your.email@example.com'
              required
            />
          </div>
        </div>

        <div>
          <label htmlFor='message' className='block text-sm font-medium text-gray-700 mb-2'>
            Write your Message
          </label>
          <textarea
            id='message'
            value={formData.message}
            onChange={handleChange}
            rows={4}
            className='w-full px-4 py-3 bg-gray-200 rounded-xl focus:ring-blue-500 focus:border-blue-500'
            placeholder='Your message here...'
            required
          ></textarea>
        </div>

        <button
          type='submit'
          disabled={isSubmitting}
          className={`relative overflow-hidden w-full px-8 py-3 text-white font-medium rounded-xl transition-opacity ${isSubmitting ? 'opacity-70 cursor-not-allowed' : 'hover:opacity-90'}`}
          style={{
            backgroundImage: `url(${contactButtonBg})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        >
          <span className='relative z-10'>
            {isSubmitting ? 'Sending...' : 'Send Message'}
          </span>
          <div className='absolute inset-0 bg-blue-600 opacity-70 mix-blend-multiply'></div>
        </button>
      </form>
    </div>
  );
}

export default Contact;
