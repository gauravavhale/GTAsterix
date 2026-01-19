import React from "react";

const Card = ({ title, value, icon }) => {
  return (
    <div className="bg-white/90 backdrop-blur-md rounded-2xl shadow-md p-6 flex flex-col justify-between hover:shadow-xl transition-shadow duration-300 min-w-50">
      
      <div className="flex items-center justify-between mb-4">
        <p className="text-gray-500 font-medium">{title}</p>
        {icon && <div className="text-blue-500 text-2xl">{icon}</div>}
      </div>

      <h2 className="text-3xl font-bold text-gray-800">{value}</h2>

      <p className="text-sm text-gray-400 mt-2">
      </p>
    </div>
  );
};

export default Card;
