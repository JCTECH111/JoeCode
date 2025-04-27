import React from 'react'
import avatar from "../assets/avatar.png"

function Home() {
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
    </div>
  )
}

export default Home
