import React from 'react'

const Card1 = ({ imagePath, heading }) => {
  return (
    <div className="relative overflow-hidden rounded-lg shadow-md h-90vh">
      <img src={imagePath} alt="Card Background" className="w-full flex-sm-column bg-contain h-90vh" />
      <div className="absolute inset-0 flex items-end p-10 justify-center text-white text-4xl font-bold bg-black bg-opacity-50">
        {heading}
      </div>
    </div>
  )
}

export default Card1