import React from 'react'

const VideoTitle = ({title , overview}) => {
  return (
    <div>
        <h1 className="font-bold text-5xl my-2">{title}</h1>
        <p className="text-lg text-gray-900 my-3">{overview}</p>
        <div>
            <button className="bg-gray-600 py-3 px-12 rounded-lg text-white font-semibold text-lg opacity-80 mr-2">
                ▶Play
            </button>
            <button className="bg-gray-600 py-3 px-12 rounded-lg text-white font-semibold text-lg opacity-80">
                More Info
            </button>
        </div>
    </div>
  )
}

export default VideoTitle