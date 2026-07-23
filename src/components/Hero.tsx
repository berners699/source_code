import React from 'react';
import banner from '../assets/banner.png';

const Hero = () => {
  return (
    <div className="relative h-[500px] w-full overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img 
          src={banner} 
          alt="Hero Banner" 
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
};

export default Hero;
