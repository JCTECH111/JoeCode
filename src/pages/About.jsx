import React from 'react';
import ImageGallery from '../components/ImageAnimation';
function About() {
  return (
    <div className='mt-[12cm] md:mt-[14cm] md:ml-[4rem]'>
      <h1 className='text-3xl md:text-4xl font-bold text-gray-800 mb-6'>Profile</h1>
      
      <p className='text-lg md:text-xl text-gray-700 mb-8 leading-relaxed'>
        Turning ideas into reality through code, innovation, and relentless curiosity.
      </p>
      

        <p className='text-gray-700 mb-4'>
          I'm <span className='font-semibold'>Jonathan Phillip</span>, 19, a self-taught developer who began this journey in 2021 fueled by pure passion and a vision to create.
        </p>
        <p className='text-gray-700 mb-4'>
          My coding path started with simple experiments and grew into real-world projects, overcoming countless challenges through determination, problem-solving, and endless learning.
        </p>
        <p className='text-gray-700 mb-4'>
          Along the way, I've mastered front-end and back-end development, tackled complex architectures, and built scalable, innovative solutions.
        </p>
        <p className='text-gray-700 mb-4'>
          Every line of code I write reflects my intellectual curiosity, self-driven mindset, and passion for transforming ideas into powerful digital experiences.
        </p>
        <p className='text-gray-700 mt-4'>
          Innovation is not just a goal, it's the foundation of everything I create.
        </p>
        <ImageGallery />
    </div>
  );
}

export default About;
