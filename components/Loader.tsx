"use client"
import React from 'react'
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import { Typewriter, Cursor } from 'react-simple-typewriter';

const Loader = () => {
  return (
    <div className='flex  items-center'>
      <div>
        <DotLottieReact
          src="https://lottie.host/b2cda178-b82d-472b-8b9c-a908fc3651d3/iwaxjyJhvT.lottie"
          loop
          className='w-[22rem] h-[22rem]'
          autoplay
        />
      </div>
      <div>
        <span className='text-primary font-bold text-3xl' >
          <Typewriter
            typeSpeed={70}
            words={[
              `Summarizing your video`,
              'Thank you for your patience',
              'Quickly understand any Video'
            ]}
            loop={false} />
        </span>
      </div>
    </div>
  )
}

export default Loader