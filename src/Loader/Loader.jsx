import React from "react";

//importing required images
import linkedinLogo from '../assets/logo.png'

const Loader = () => {
  return (
    <div className="flex flex-col gap-6 items-center justify-center h-screen bg-gray-100">
      {/* LinkedIn Logo */}
      <div className="flex items-center gap-2">
        <h2 className="text-5xl font-bold text-blue-600">Linked</h2>
        <img
          src={linkedinLogo}
          alt="LinkedIn Logo"
          className="w-11 h-11 object-contain"
        />
      </div>

      {/* loader animation  */}
      <div className="flex gap-2">
          <div className="w-3 h-3 rounded-full animate-pulse bg-blue-600"></div>
          <div className="w-3 h-3 rounded-full animate-pulse bg-blue-600"></div>
          <div className="w-3 h-3 rounded-full animate-pulse bg-blue-600"></div>
      </div>
    </div>
  );
};

export default Loader;
