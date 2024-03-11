import React from 'react'

const VideoTitle = ({title , overview}) => {
  return (
    <div className="absolute top-0 overflow-hidden w-screen aspect-video px-20 bg-gradient-to-r from-black  text-white w-1/2 z-100">
      <div className="w-1/2 py-[30%]">
        <h1 className="font-bold text-5xl my-2">{title}</h1>
        <p className="text-lg  my-3">{overview}</p>
        <div>
            <button className="bg-white py-3 px-12 rounded-lg text-black font-semibold text-lg mr-2 hover:bg-opacity-80">
                ▶Play
            </button>
            <button className="bg-gray-600 py-3 px-12 rounded-lg text-white font-semibold text-lg bg-opacity-90">
                More Info
            </button>
        </div>
        </div>
    </div>
  )
}

export default VideoTitle