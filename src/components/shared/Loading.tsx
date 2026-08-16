// components/LoadingDots.tsx
'use client';

import React from 'react';

const Loading: React.FC = () => {
  return (
    <div className="w-50 h-15 relative z-10">
      {/* Circles */}
      <div
        className="w-5 h-5 absolute rounded-full bg-[#1F2937] left-[15%] origin-center 
                   animate-[circle7124_0.5s_alternate_infinite_ease]"
      />
      <div
        className="w-5 h-5 absolute rounded-full bg-[#1F2937] left-[45%] origin-center 
                   animate-[circle7124_0.5s_alternate_infinite_ease] 
                   [animation-delay:0.2s]"
      />
      <div
        className="w-5 h-5 absolute rounded-full bg-[#1F2937] right-[15%] origin-center 
                   animate-[circle7124_0.5s_alternate_infinite_ease] 
                   [animation-delay:0.3s]"
      />

      {/* Shadows */}
      <div
        className="w-5 h-1 rounded-full bg-black/90 absolute top-15.5 left-[15%] 
                   origin-center -z-10 blur-[1px] 
                   animate-[shadow046_0.5s_alternate_infinite_ease]"
      />
      <div
        className="w-5 h-1 rounded-full bg-black/90 absolute top-15.5 left-[45%] 
                   origin-center -z-10 blur-[1px] 
                   animate-[shadow046_0.5s_alternate_infinite_ease] 
                   [animation-delay:0.2s]"
      />
      <div
        className="w-5 h-1 rounded-full bg-black/90 absolute top-15.5 right-[15%] 
                   origin-center -z-10 blur-[1px] 
                   animate-[shadow046_0.5s_alternate_infinite_ease] 
                   [animation-delay:0.3s]"
      />
    </div>
  );
};

export default Loading;
