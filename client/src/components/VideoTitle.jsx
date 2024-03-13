import React from 'react'

const VideoTitle = ({title , overview}) => {
  return (
    <div className="absolute top-0 px-12 overflow-hidden w-screen aspect-video md:px-20 bg-gradient-to-r from-black  text-white w-1/2 z-100">
      <div className="text-center sm:text-left  md:w-1/2 py-[30%]">
        <h1 className="font-bold text-4xl md:text-5xl mb-4">{title}</h1>
        <p className="text-sm md:text-lg hidden sm:block my-3">{overview}</p>
        <div>
            <button className="bg-white text-sm py-2 px-5 md:py-3 md:px-12 rounded-lg text-black font-semibold md:text-lg mr-2 hover:bg-opacity-80">
                ▶Play
            </button>
            <button className="bg-gray-600 py-2 px-5 text-sm md:py-3 md:px-12 rounded-lg text-white font-semibold md:text-lg bg-opacity-90">
                More Info
            </button>
        </div>
        </div>
    </div>
  )
}

export default VideoTitle