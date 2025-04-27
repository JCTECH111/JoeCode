import React from 'react'
import avatar from "../assets/avatar.png"
import LinkingButton from '../components/LinkingButton'
import { FaGithub } from 'react-icons/fa'

function Home() {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };
  return (
    <div className='bg-white flex flex-col gap-3  '>
      <img
        src={avatar}
        className='w-40 h-40 rounded-full'
      />
      <h1 className="text-3xl">
        Hey, I'm Jonathan Phillip. <br />
        Software Engineer
      </h1>
      <p>
        Pushing boundaries with every project I create.<br />
        Challenger by day, fearless innovator by night

      </p>
      <div className='flex gap-3 align-items-center'>
        <LinkingButton
        to="" 
        text="Hire me!"
        onClick={scrollToSection("contact")}
        />
        <LinkingButton
          to="https://github.com/JoeCode001"
          text="My GitHub"
          icon={<FaGithub />}
          isExternal={true}
          target="_blank"
        />
      </div>
    </div>
  )
}

export default Home
