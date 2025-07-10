import React from 'react';

interface ViewWorkSectionProps {
  onOpenModal: () => void;
}

const ViewWorkSection: React.FC<ViewWorkSectionProps> = ({ onOpenModal }) => (
  <div
    className="flex flex-col items-center w-full relative mt-32 sm:mt-16 md:mt-24 lg:mt-32 xl:mt-72 xl:left-0 xl:bottom-[720px] xl:ml-[-57px]"
  >
    <div
      className="flex flex-col items-center w-full h-full lg:h-full max-w-xs sm:max-w-md md:max-w-2xl lg:max-w-3xl xl:max-w-3xl relative"
    >
      <img
        src="/img/LP-Frame2.png"
        alt="Campaign Management"
        className="mx-auto rounded-xl shadow-lg w-60 h-36 sm:w-80 sm:h-48 md:w-96 md:h-56 xl:w-[500px] xl:h-[290px] -mt-8 sm:-mt-12"
      />
      <img
        src="/img/LP13.png"
        alt="Work Card"
        className="absolute left-1/2 top-8 w-40 h-24 sm:w-56 sm:h-32 md:w-72 md:h-40 xl:w-[500px] xl:h-[340px] rounded-xl shadow-lg transform rotate-12"
      />
      <img
        src="/img/LP18.png"
        alt="Privacy Card"
        className="absolute right-1/2 top-8 w-40 h-24 sm:w-56 sm:h-32 md:w-72 md:h-40 xl:w-[500px] xl:h-[340px] rounded-xl shadow-lg transform -rotate-12"
      />
      <button
        className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 px-6 py-2 sm:px-8 sm:py-3 rounded-full bg-white/20 border border-white/40 backdrop-blur-md shadow-lg text-black font-semibold transition hover:bg-white/30 text-sm sm:text-base"
        onClick={onOpenModal}
      >
        View Work
      </button>
    </div>
  </div>
);

export default ViewWorkSection; 