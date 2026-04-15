import React, { useState } from "react";
import "./App.css";
import GridOverlay from "./GridOverlay";

interface CaseStudy {
  id: string;
  title: string;
  category: string;
  image: string;
  preText: string;
  detailImage: string;
}

function App() {
  const [showGrid, setShowGrid] = useState(false);
  const [showWorkGallery, setShowWorkGallery] = useState(false);
  const [showBrandingGallery, setShowBrandingGallery] = useState(false);
  const [currentBrandingIndex, setCurrentBrandingIndex] = useState(0);

  const handleSetupCall = () => {
    window.open(
      "https://cal.com/bharathi-raja-hastjw/15min?overlayCalendar=true",
      "_blank",
    );
  };

  const handleSeeWork = () => {
    setShowWorkGallery(true);
    setShowBrandingGallery(false);
    setCurrentBrandingIndex(0);
  };

  const handleBackToHome = () => {
    setShowWorkGallery(false);
    setShowBrandingGallery(false);
    setCurrentBrandingIndex(0);
  };

  const handleBrandingClick = () => {
    setShowBrandingGallery(true);
  };

  const handleBackToWorkGallery = () => {
    setShowBrandingGallery(false);
    setCurrentBrandingIndex(0);
  };

  const handleNextBranding = () => {
    setCurrentBrandingIndex((prev) => (prev + 1) % brandingImages.length);
  };

  const handlePrevBranding = () => {
    setCurrentBrandingIndex((prev) => (prev - 1 + brandingImages.length) % brandingImages.length);
  };

  // Branding images for thumbnail grid and carousel (first 6 images)
  const brandingImages = [
    {
      id: 'ldw',
      image: '/LDW.svg',
      title: 'Leverage Design Works Logo',
      preText: 'A comprehensive branding identity for Leverage Design Works, focusing on clean, modern aesthetics that reflect the studio\'s commitment to precision and empathy in design. The logo embodies the balance between engineering depth and design intuition.'
    },
    {
      id: 'leverage',
      image: '/LEVERAGE.png',
      title: 'Leverage Brand Identity',
      preText: 'A bold brand identity that communicates strength and strategic thinking. This design system creates a cohesive visual language that helps businesses stand out and connect with their audience.'
    },
    {
      id: 'card1',
      image: '/Card-1.png',
      title: 'Card Design 1',
      preText: 'A modern card design that emphasizes clarity and user experience. This design focuses on creating an intuitive interface that guides users through their journey with precision and elegance.'
    },
    {
      id: 'card2',
      image: '/Card-2.png',
      title: 'Card Design 2',
      preText: 'An innovative card design solution that balances functionality with aesthetic appeal. This piece showcases our ability to create designs that are both beautiful and highly functional.'
    },
    {
      id: 'first-idea',
      image: '/First Idea.png',
      title: 'First Idea',
      preText: 'The initial concept that sparked a series of innovative design solutions. This early exploration demonstrates our creative process and how we transform ideas into tangible design experiences.'
    },
    {
      id: 'inspiration',
      image: '/Inspiration.png',
      title: 'Inspiration',
      preText: 'A visual exploration of inspiration and creative direction. This work represents our approach to finding unique solutions that resonate with audiences and drive meaningful engagement.'
    },
  ];

  // All other work images (displayed vertically)
  const workImages = [
    {
      id: 'gradientecture',
      image: '/img/Gradient.png',
      title: ''
    },
    {
      id: 'menu',
      image: '/img/menu.png',
      title: ''
    },
    {
      id: 'logo',
      image: '/img/LogoWork.png',
      title: ''
    },
    {
      id: 'campaign',
      image: '/img/campaign.png',
      title: ''
    },
    {
      id: 'cards',
      image: '/img/cards.png',
      title: ''
    },
    {
      id: 'date',
      image: '/img/releasedate.png',
      title: ''
    },
    {
      id: 'menuselect',
      image: '/img/menuselect.png',
      title: ''
    }
  ];

  // Branding Gallery View (one image at a time with navigation)
  if (showBrandingGallery) {
    const currentImage = brandingImages[currentBrandingIndex];
    return (
      <div className="App bg-white relative" style={{ minHeight: '1200px' }}>
        {showGrid && <GridOverlay />}
        <div className="w-full max-w-8xl mx-auto px-8 py-16">
          <div className="grid grid-cols-9 gap-[40px] w-full">
            {/* Back button */}
            <div className="col-span-1">
              <button
                onClick={handleBackToWorkGallery}
                className="text-black underline font-semibold hover:text-gray-600 transition-colors"
                style={{
                  width: '120px',
                  height: '40px',
                  fontSize: '12px'
                }}
              >
                ← Back
              </button>
            </div>
            {/* Empty space */}
            <div className="col-span-2"></div>
            {/* Branding content */}
            <div className="col-span-6">
              <div className="space-y-6">
                <div>
                  <span className="text-sm text-gray-500 uppercase tracking-wide">Branding</span>
                  <h2 className="text-2xl font-bold text-black mt-2">{currentImage.title}</h2>
                </div>
                <div className="mt-4 flex justify-center items-center" style={{ minHeight: '500px', maxHeight: '600px', width: '100%' }}>
                  <div className="flex justify-center items-center w-full h-full">
                    <img
                      src={currentImage.image}
                      alt={currentImage.title}
                      className="rounded-lg"
                      style={{ 
                        maxWidth: '100%', 
                        maxHeight: '600px',
                        width: 'auto',
                        height: 'auto',
                        objectFit: 'contain'
                      }}
                    />
                  </div>
                </div>
                {/* Small text section below image */}
                <div className="mt-4">
                  <p className="text-gray-600 text-sm leading-relaxed text-left col-3">
                    {currentImage.preText}
                  </p>
                </div>
                {/* Navigation buttons */}
                <div className="flex justify-between items-center mt-6">
                  <button
                    onClick={handlePrevBranding}
                    className="bg-gray-300 text-black w-12 h-12 rounded-full flex items-center justify-center hover:bg-gray-400 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                    disabled={brandingImages.length <= 1}
                  >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                  </button>
                  <span className="text-gray-600 text-sm">
                    {currentBrandingIndex + 1} / {brandingImages.length}
                  </span>
                  <button
                    onClick={handleNextBranding}
                    className="bg-gray-300 text-black w-12 h-12 rounded-full flex items-center justify-center hover:bg-gray-400 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                    disabled={brandingImages.length <= 1}
                  >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Work Gallery View
  if (showWorkGallery) {
    return (
      <div className="App bg-white relative" style={{ minHeight: '1200px' }}>
        {showGrid && <GridOverlay />}
        <div className="w-full max-w-8xl mx-auto px-8 py-16">
          <div className="grid grid-cols-9 gap-[40px] w-full">
            {/* Back button */}
            <div className="col-span-1">
              <button
                onClick={handleBackToHome}
                className="text-black underline font-semibold hover:text-gray-600 transition-colors"
                style={{
                  width: '120px',
                  height: '40px',
                  fontSize: '12px'
                }}
              >
                ← Back
              </button>
            </div>
            {/* Empty space */}
            <div className="col-span-2"></div>
            {/* Content */}
            <div className="col-span-6">
              {/* Branding thumbnail grid section - single preview */}
              <div className="mb-12">
                <h2 className="text-2xl font-bold text-black mb-6">Branding</h2>
                <div className="relative group" style={{ maxWidth: '400px' }}>
                  {/* Single smaller preview image */}
                  <img
                    src={brandingImages[0].image}
                    alt="Branding Preview"
                    className="w-full h-auto rounded-lg object-cover"
                  />
                  {/* Read More overlay button */}
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-all duration-300 rounded-lg flex items-center justify-center">
                    <button
                      onClick={() => {
                        setCurrentBrandingIndex(0);
                        handleBrandingClick();
                      }}
                      className="opacity-0 group-hover:opacity-100 bg-white text-black px-6 py-3 rounded-lg font-semibold transition-opacity"
                    >
                      Read More
                    </button>
                  </div>
                </div>
              </div>

              {/* All other work images - displayed vertically one after another */}
              <div>
                <h2 className="text-2xl font-bold text-black mb-6">Case Studies</h2>
                <div className="space-y-6">
                  {workImages.map((item) => (
                    <div key={item.id}>
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-full h-auto rounded-lg"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Main Landing Page View
  return (
    <div className="App bg-white relative" style={{ height: '1200px' }}>
      {showGrid && <GridOverlay />}
      <div className="h-full">
        {/* 9 Column Grid */}
        <div className="grid grid-cols-9 gap-[40px] w-full">
          {/* Left side - Logo, Title, and Text (2 columns) */}  
                  
          <div className="ml-8 col-span-2 sticky top-16 self-start flex flex-col gap-5 h-fit" style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            {/* Logo */}
            <div className="flex flex-row">
            <img
              src="/LDW.svg"
              alt="Logo"
              width="64"
              height="64"
            />
            {/* Title */}
            <h1 className="px-4 mt-2 text-6xl leading-6 md:text-6xl lg:text-2xl font-bold text-gray-900 text-left" >
              L.DW              
            </h1>
            </div>
            {/* Text paragraphs */}
            <p className="mt-4 text-gray-700 text-2xl leading-8 text-left">
              With a rare blend of design intuition and engineering depth.
              <br />
              We design website, branding, and product that balance beauty
              <br />
              with real-world outcomes.
            </p>

            <p className="mt-4 text-gray-700  text-2xl leading-8 text-left">
              We're team of two designers based out of Chennai India.
              <br></br>
              Leverage design works is a small corner in the vast internet
              <br />
              Where we design and collobrate with 
              <br />
              <p className="text-2xl leading-10 font-semibold text-black py-2">Startups, AI-Native Company, Web3 Platforms</p>
            </p>

            
            <p className="mt-2 text-gray-700 text-lg leading-normal text-left">
              We charge <span className="font-bold text-black">1.5K USD</span> for <span className="font-bold text-black">website</span>, <span className="font-bold text-black">1.2K USD</span> for <span className="font-bold text-black">branding</span>.
              <br></br>
              Product design on short/long term subscription basis
            </p>

            {/* Buttons - Setup a Call and See my work */}
            <div className="mt-4 flex items-center" style={{ gap: '4px' }}>
              <button
                onClick={handleSetupCall}
                className="bg-black text-white font-semibold text-lg hover:bg-gray-900 transition-colors"
                style={{
                  width: '140px',
                  height: '60px',
                  borderRadius: '60px',
                  fontSize: '16px'
                }}
              >
                Setup a Call
              </button>             
            </div>
          </div>

          <div className="col-span-7 max-w-full">
              {/* <div className="text-8xl font-bold">L.DW</div> */}
              
              <div className="flex flex-col ml-12">
                {workImages.map((item) => (
                  <div key={item.id} className="w-full">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full"
                      sizes="1100px"
                    />
                    <p className="mt-2 text-sm">{item.title}</p>
                  </div>
                ))}
              </div>
            </div>
        </div>
        
      </div>
    </div>
  );
}

export default App;
