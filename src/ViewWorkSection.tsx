import React from 'react';

interface ViewWorkSectionProps {
  onOpenModal: () => void;
}

const ViewWorkSection: React.FC<ViewWorkSectionProps> = ({ onOpenModal }) => (
  <div
    className="flex flex-col items-center w-full relative mt-32 sm:mt-16 md:mt-24 lg:mt-32 xl:mt-72 2xl:mt-80 3xl:mt-96 4xl:mt-[28rem] 5xl:mt-[32rem] 6xl:mt-[40rem] xl:left-0 xl:bottom-[720px] xl:ml-[-57px]"
  >
    <div
      className="flex flex-col items-center w-full h-full lg:h-full max-w-xs sm:max-w-md md:max-w-2xl lg:max-w-3xl xl:max-w-4xl 2xl:max-w-5xl 3xl:max-w-6xl 4xl:max-w-7xl 5xl:max-w-8xl 6xl:max-w-full relative"
    >
      {/* Main center image - increased by 20-30% for large screens */}
      <img
        src="/img/LP-Frame2.png"
        alt="Campaign Management"
        className="mx-auto rounded-xl shadow-lg 
          w-60 h-36 
          sm:w-80 sm:h-48 
          md:w-96 md:h-56 
          lg:w-[420px] lg:h-[250px]
          xl:w-[650px] xl:h-[380px] 
          2xl:w-[750px] 2xl:h-[440px]
          3xl:w-[850px] 3xl:h-[500px]
          4xl:w-[1000px] 4xl:h-[590px]
          5xl:w-[1200px] 5xl:h-[710px]
          6xl:w-[1400px] 6xl:h-[830px]
          -mt-8 sm:-mt-12"
      />
      {/* Left rotated image - increased by 20-30% for large screens */}
      <img
        src="/img/LP13.png"
        alt="Work Card"
        className="absolute left-1/2 top-8 rounded-xl shadow-lg transform rotate-12
          w-40 h-24 
          sm:w-56 sm:h-32 
          md:w-72 md:h-40 
          lg:w-[320px] lg:h-[190px]
          xl:w-[650px] xl:h-[440px] 
          2xl:w-[750px] 2xl:h-[510px]
          3xl:w-[850px] 3xl:h-[580px]
          4xl:w-[1000px] 4xl:h-[680px]
          5xl:w-[1200px] 5xl:h-[820px]
          6xl:w-[1400px] 6xl:h-[960px]"
      />
      {/* Right rotated image - increased by 20-30% for large screens */}
      <img
        src="/img/LP18.png"
        alt="Privacy Card"
        className="absolute right-1/2 top-8 rounded-xl shadow-lg transform -rotate-12
          w-40 h-24 
          sm:w-56 sm:h-32 
          md:w-72 md:h-40 
          lg:w-[320px] lg:h-[190px]
          xl:w-[650px] xl:h-[440px] 
          2xl:w-[750px] 2xl:h-[510px]
          3xl:w-[850px] 3xl:h-[580px]
          4xl:w-[1000px] 4xl:h-[680px]
          5xl:w-[1200px] 5xl:h-[820px]
          6xl:w-[1400px] 6xl:h-[960px]"
      />
      {/* View Work button - responsive sizing */}
      <button
        className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/20 border border-white/40 backdrop-blur-md shadow-lg text-black font-semibold transition hover:bg-white/30
          px-6 py-2 text-sm
          sm:px-8 sm:py-3 sm:text-base
          md:px-10 md:py-4 md:text-lg
          lg:px-12 lg:py-5 lg:text-xl
          xl:px-14 xl:py-6 xl:text-2xl
          2xl:px-16 2xl:py-7 2xl:text-3xl
          3xl:px-18 3xl:py-8 3xl:text-4xl
          4xl:px-20 4xl:py-9 4xl:text-5xl
          5xl:px-24 5xl:py-10 5xl:text-6xl
          6xl:px-28 6xl:py-12 6xl:text-7xl"
        onClick={onOpenModal}
      >
        View Work
      </button>
    </div>
  </div>
);

export default ViewWorkSection; 