import React from 'react'

const Card = ({ title, description, imagePath }) => {
  return (
    <div className="w-full md:w-1/3 p-6 h-90vh ">
      <div className="bg-white shadow-lg rounded-lg ">
        <img src={imagePath} alt={""} className="w-full h-45vh " />
        <div className="p-4">
          <p className="text-gray-400 p-6 text-xl line-clamp-5">{description}</p>
        </div>
        <div className="p-4 bg-gray-100">
        <h1 className="text-4xl text-left font-semibold mb-2 text-gray-400">{title}</h1> 
        </div>
      </div>
    </div> 
  );
};

export default Card
