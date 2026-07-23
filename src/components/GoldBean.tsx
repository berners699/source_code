import React from 'react';

interface GoldBeanProps {
  className?: string;
}

const GoldBean: React.FC<GoldBeanProps> = ({ className = "w-4 h-4" }) => {
  return (
    <svg 
      viewBox="0 0 100 100" 
      className={className} 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      style={{ display: 'inline-block', verticalAlign: 'middle' }}
    >
      <path 
        d="M75 35C75 15 50 10 35 25C20 40 20 65 40 80C60 95 85 85 85 65C85 55 75 55 75 35Z" 
        fill="#FBBF24"
      />
    </svg>
  );
};

export default GoldBean;
