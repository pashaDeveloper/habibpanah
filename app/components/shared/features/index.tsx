'use client'
import { Container } from "@/app/components/shared/contianer/container";
import React, { useState } from "react";

export function Features() {
  // Sample data for features
  const features = [
    {
      id: 1,
      title: "Premium Quality",
      description: "Our fabrics are made with the finest materials and craftsmanship.",
      color: "from-blue-500/10 to-blue-700/10",
      darkColor: "from-blue-700/30 to-blue-900/30"
    },
    {
      id: 2,
      title: "Wide Selection",
      description: "Choose from hundreds of patterns, colors, and textures.",
      color: "from-purple-500/10 to-purple-700/10",
      darkColor: "from-purple-700/30 to-purple-900/30"
    },
    {
      id: 3,
      title: "Fast Delivery",
      description: "Get your fabrics delivered to your doorstep quickly and safely.",
      color: "from-green-500/10 to-green-700/10",
      darkColor: "from-green-700/30 to-green-900/30"
    },
    {
      id: 4,
      title: "Easy Returns",
      description: "Not satisfied? Return within 30 days for a full refund.",
      color: "from-yellow-500/10 to-yellow-700/10",
      darkColor: "from-yellow-700/30 to-yellow-900/30"
    },
    {
      id: 5,
      title: "Expert Support",
      description: "Our fabric specialists are ready to help with your selection.",
      color: "from-pink-500/10 to-pink-700/10",
      darkColor: "from-pink-700/30 to-pink-900/30"
    },

  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrev = () => {
    // Move back by 2 items (one slide)
    setCurrentIndex(currentIndex === 0 ? features.length - 2 : currentIndex - 2);
  };

  const goToNext = () => {
    // Move forward by 2 items (one slide)
    setCurrentIndex(currentIndex >= features.length - 2 ? 0 : currentIndex + 2);
  };

  // Calculate number of dots needed (since 2 items are visible at a time)
  const numberOfDots = Math.ceil(features.length / 2);

  return (
    <Container>
      {/* Mobile swiper view */}
      <div className="md:hidden relative">
        <div className="flex overflow-x-hidden">
          <div 
            className="flex gap-x-2 transition-transform duration-300 ease-in-out" 
            style={{ transform: `translateX(-${(currentIndex / 2) * 100}%)` }}
          >
            {features.map((feature) => (
              <div 
                key={feature.id} 
                className="flex-shrink-0 w-1/2 py-2"
              >
                <div 
                  className={`bg-gray-100 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 p-3 rounded-lg`}
                >
                  <h3 className="text-sm font-semibold mb-1">{feature.title}</h3>
                  <p className="text-xs opacity-90">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Navigation arrows for mobile */}
        <button 
          onClick={goToPrev}
          className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/20 dark:bg-gray-800/50 backdrop-blur-sm rounded-full p-1 transition-all"
          aria-label="Previous slide"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-gray-800 dark:text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        
        <button 
          onClick={goToNext}
          className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/20 dark:bg-gray-800/50 backdrop-blur-sm rounded-full p-1 transition-all"
          aria-label="Next slide"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-gray-800 dark:text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
        
        {/* Dots indicator for mobile - adjusted for w-1/2 items */}
        <div className="flex justify-center mt-2 gap-x-1">
          {Array.from({ length: numberOfDots }).map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index * 2)}
              className={`w-2 h-2 rounded-full transition-all ${
                index === Math.floor(currentIndex / 2) ? 'bg-gray-800 dark:bg-white' : 'bg-gray-400 dark:bg-gray-500'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
      
      {/* Desktop grid view */}
      <div className="hidden md:grid md:grid-cols-5 gap-3 mt-4">
        {features.map((feature) => (
          <div 
            key={feature.id} 
            className={`bg-gray-100 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 p-3 rounded-lg`}
          >
            <h3 className="text-sm font-semibold mb-1">{feature.title}</h3>
            <p className="text-xs opacity-90">{feature.description}</p>
          </div>
        ))}
      </div>
    </Container>
  );
}