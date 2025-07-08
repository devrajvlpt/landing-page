import React, { useState, useEffect } from 'react';
// import logo from './logo.svg';
import './App.css';

function App() {
  const [showModal, setShowModal] = useState(false);

  // Handle modal open with history
  const openModal = () => {
    setShowModal(true);
    window.history.pushState({ modal: true }, "Modal");
  };

  // Handle modal close
  const closeModal = () => {
    setShowModal(false);
    // Only go back if the last state was the modal
    if (window.history.state && window.history.state.modal) {
      window.history.back();
    }
  };

  // Listen for browser back/forward
  useEffect(() => {
    const handlePopState = () => {
      if (showModal) {
        setShowModal(false);
      }
    };
    window.addEventListener("popstate", handlePopState);
    return () => window.removeEventListener("popstate", handlePopState);
  }, [showModal]);

  // Close modal on Escape key
  useEffect(() => {
    if (!showModal) return;
    const handleEsc = (event: KeyboardEvent) => {
      if (event.key === "Escape") setShowModal(false);
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, [showModal]);

  const handleBookCall = () => {
    window.open('https://cal.com/bharathi-raja-hastjw/15min?overlayCalendar=true', '_blank');
  };

  return (
    <div className="App">
      
      
      {/* Header Section */}
      <header className="w-full max-w-3xl text-left mx-auto mt-16 flex flex-row items-center ml-[20px]">
        <img src="/LDW.svg" alt="Leverage Design Works Logo" className="h-10 mb-2 px-4" />
        <span className="text-black text-xl">Leverage Design Works</span>
      </header>

      {/* Main Content Section */}
      <div className="mt-48 flex flex-col items-center w-full ">
        <div className="w-full max-w-3xl text-left ml-[20px]">
          {/* Available for Projects */}
          <p className="text-xl text-gray-500 font-regular leading-10 pb-4 flex items-center">
            <span className="relative flex h-4 w-4 mr-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-4 w-4 bg-green-500"></span>
            </span>
            Available for Projects
          </p>
          {/* Main Heading */}
          <h1 className="text-4xl md:text-4xl  text-black font-semibold leading-10">
            Landing pages, branding, product design—<br />
            We design with care and empathy,<br />
            So you can focus on building real solutions<br />
            for your customers.
          </h1>
          {/* Supporting Text */}
          <p className="text-gray-600 mt-8 text-xl">
            We craft the pitch, shape the product, and design the first touchpoint.<br />
            With precision and empathy, You build the solution. <br />
            We make it resonate.
          </p>
          {/* Book a call Button */}
          <button
            className="mt-8 px-6 py-3 rounded-full bg-black text-white font-medium"
            onClick={handleBookCall}
          >
            <div className='flex flex-row items-center'>
              <img src="/img/phone.png" alt="Leverage Design Works Logo" />
              <span className="ml-2 py-1">Book a call</span>
            </div>
          </button>
        </div>
      </div>

      {/* Work Section */}
      <div
        className="fixed left-0 flex flex-col items-center w-full"
        style={{ bottom: "720px", marginLeft: "-57px" }}
      >
        <div className="flex flex-col items-center w-full max-w-3xl">
          <img src="/img/LP-Frame2.png" alt="Campaign Management" className="mx-auto rounded-xl shadow-lg w-96 -mt-12" />
          <img src="/img/LP13.png" alt="Work Card" className="absolute left-1/2 top-24 w-80 rounded-xl shadow-lg transform rotate-12" />
          <img src="/img/LP18.png" alt="Privacy Card" className="absolute right-1/2 top-24 w-80 rounded-xl shadow-lg transform -rotate-12" />
          <button
            className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 px-8 py-3 rounded-full bg-white/20 border border-white/40 backdrop-blur-md shadow-lg text-black font-semibold transition hover:bg-white/30"
            onClick={openModal}
          >
            View Work
          </button>
        </div>
      </div>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-white overflow-y-auto" style={{ maxHeight: "300vh" }}>
          <button
            className="absolute top-8 right-8 text-4xl font-bold text-gray-700 hover:text-black focus:outline-none"
            onClick={closeModal}
            aria-label="Close"
          >
            &times;
          </button>
          <div className="bg-white rounded-lg pt-96 mt-96 pb-12 px-8 max-w-5xl w-full relative flex flex-col items-center">
            {/* Add a heading if you want */}
            <div className="flex flex-col gap-12 items-center w-full">
              <h2 className="text-2xl font-bold mb-8">Our Work</h2>
              <img src="/img/LP-Frame2.png" alt="Campaign Management" className="rounded-xl" />
              <img src="/img/Gradientecture.png" alt="Work Card" className="rounded-xl" />
              <img src="/img/LP18.png" alt="Privacy Card" className="rounded-xl shadow-lg" />
              <img src="/img/T1-3.png" alt="Work Card" className="rounded-xl" />
              <img src="/img/GreenMacha.png" alt="Privacy Card" className="rounded-xl" />      
              <img src="/img/LP-Frame2.png" alt="Campaign Management" className="rounded-xl" />        
            </div>
          </div>
        </div>
      )}
      
      {/* Footer Section */}
      <div className="fixed bottom-0 left-0 w-full bg-white text-center py-4 text-xl text-black font-regular shadow flex justify-center">
        <div className="w-full max-w-3xl text-left">
          2025 © With Love by Leverage Design Works — All rights reserved<br />
          Founded by @bharathiraja
        </div>
      </div>

    </div>
  );
}

export default App;
