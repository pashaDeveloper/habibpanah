'use client'
import { Container } from "@/app/components/shared/contianer/container";
import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export function CardSkeletonSwiper() {
  // Sample data for skeleton cards
  const skeletonCards = [
    { id: 1 },
    { id: 2 },
    { id: 3 },
    { id: 4 },
    { id: 5 },
    { id: 6 },
    { id: 7 },
    { id: 8 },
  ];

  return (
    <>
      <h2 className="text-2xl font-bold mb-6 text-center">From Our Blog</h2>
      <div className="relative">
        {/* Mobile swiper view with partial views */}
        <div className="md:hidden">
          <Swiper
            spaceBetween={10}
            slidesPerView={1.2}
            centeredSlides={true}
            loop={true}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            className="mySwiper h-48"
          >
            {skeletonCards.map((card) => (
              <SwiperSlide key={card.id}>
                {/* Skeleton Card */}
                <div className="rounded-xl flex flex-col relative h-full bg-palette-card border shadow-sm">
                  {/* Image skeleton */}
                  <div className="w-full bg-slate-400/30 p-1 rounded-t-xl flex items-center justify-center" style={{ height: '60%' }}>
                    <div className="flex items-center h-full w-full rounded-lg bg-gray-200 dark:bg-gray-700 animate-pulse"></div>
                  </div>
                  
                  {/* Content skeleton */}
                  <div className="flex flex-col justify-between flex-grow p-2">
                    {/* Skeleton product name */}
                    <div className="mb-1">
                      <div className="h-3 bg-gray-200 dark:bg-gray-700 rounded animate-pulse"></div>
                      <div className="h-3 bg-gray-200 dark:bg-gray-700 rounded animate-pulse mt-1 w-3/4"></div>
                    </div>
                    {/* Skeleton price */}
                    <div className="flex items-center">
                      <div className="h-4 w-16 bg-gray-200 dark:bg-gray-700 rounded animate-pulse"></div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <Container>

        {/* Desktop grid view */}
        <div className="hidden md:grid grid-cols-2 lg:grid-cols-4 gap-4 mt-4">
          {skeletonCards.slice(0, 4).map((card) => (
            <div key={card.id} className="shadow-xl rounded-xl flex flex-col relative min-h-[180px] bg-palette-card">
              {/* Image skeleton */}
              <div className="w-full relative bg-slate-400/30 p-2 rounded-t-xl flex items-center justify-center" style={{ aspectRatio: '1/1' }}>
                <div className="flex items-center h-full w-full rounded-lg bg-gray-200 dark:bg-gray-700 animate-pulse"></div>
              </div>
              
              {/* Content skeleton */}
              <div className="flex flex-col justify-between flex-grow p-3">
                <div className="flex justify-center flex-col flex-grow overflow-hidden">
                  {/* Skeleton star rating */}
                  <div className="flex items-center mb-2">
                    {[...Array(5)].map((_, i) => (
                        <div key={i} className="h-4 w-4 bg-gray-200 dark:bg-gray-700 rounded-full animate-pulse mr-1"></div>
                    ))}
                  </div>
                  {/* Skeleton product name */}
                  <div className="mb-2">
                    <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded animate-pulse"></div>
                    <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded animate-pulse mt-2 w-3/4"></div>
                  </div>
                </div>
                {/* Skeleton price */}
                <div className="flex flex-col items-center">
                  <div className="h-5 w-20 bg-gray-200 dark:bg-gray-700 rounded animate-pulse"></div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
                        </Container>
        {/* Orange "View More Articles" button */}
        <div className="flex justify-center mt-8">
          <button className="bg-orange-500 cursor-pointer hover:bg-orange-600 text-white font-bold py-3 px-6 rounded-full transition-colors duration-300 shadow-lg">
            View More Articles
          </button>
        </div>
      </div>
    </>
  );
}