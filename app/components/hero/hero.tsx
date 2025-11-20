"use client";

import React, { useState, useEffect } from 'react';
import { Container } from "@/app/components/shared/container";
import { useTranslations } from 'next-intl';

interface BannerItem {
  id: number;
  titleKey: string;
  descriptionKey: string;
  color: string;
}

const HeroComponent = () => {
  const t = useTranslations('hero');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  // داده‌های نمونه برای آیتم‌های بنر
  const bannerItems: BannerItem[] = [
    {
      id: 1,
      titleKey: "summer_collection.title",
      descriptionKey: "summer_collection.description",
      color: "from-yellow-400 to-orange-500"
    },
    {
      id: 2,
      titleKey: "winter_warmers.title",
      descriptionKey: "winter_warmers.description",
      color: "from-blue-400 to-purple-600"
    },
    {
      id: 3,
      titleKey: "spring_blossoms.title",
      descriptionKey: "spring_blossoms.description",
      color: "from-pink-400 to-rose-500"
    }
  ];

  // مدیریت تغییر اندازه پنجره برای تشخیص نمای موبایل
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // عملکرد اسلاید خودکار
  useEffect(() => {
    const interval = setInterval(() => {
      if (!isMobile) {
        setCurrentIndex((prevIndex) => 
          prevIndex === bannerItems.length - 1 ? 0 : prevIndex + 1
        );
      }
    }, 5000);

    return () => clearInterval(interval);
  }, [isMobile, bannerItems.length]);

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  const goToPrev = () => {
    setCurrentIndex(currentIndex === 0 ? bannerItems.length - 1 : currentIndex - 1);
  };

  const goToNext = () => {
    setCurrentIndex(currentIndex === bannerItems.length - 1 ? 0 : currentIndex + 1);
  };

  return (
    <Container className="">
      <div className="w-full h-[60vh] md:h-[40vh] flex flex-col md:flex-row gap-4 my-8">
        {/* بنر اصلی اسلایدر - ۲/۳ عرض در دسکتاپ */}
        <div className="w-full md:w-2/3 relative h-[40vh] rounded-2xl overflow-hidden">
          {bannerItems.map((item, index) => (
            <div 
              key={item.id}
              className={`absolute inset-0 bg-linear-to-r ${item.color} rounded-2xl p-8 flex flex-col justify-end text-white transition-opacity duration-500 ${
                index === currentIndex ? 'opacity-100' : 'opacity-0'
              }`}
            >
              <h3 className="text-4xl font-bold mb-3">{t(item.titleKey)}</h3>
              <p className="text-lg max-w-md opacity-90">{t(item.descriptionKey)}</p>
            </div>
          ))}
          
          {/* فلش‌های ناوبری */}
          <button 
            onClick={goToPrev}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full p-2 transition-all"
            aria-label={t("previous_slide")}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          
          <button 
            onClick={goToNext}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full p-2 transition-all"
            aria-label={t("next_slide")}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
          
          {/* ن-indicator نقاط */}
          <div className="flex justify-center mt-6 gap-x-2 absolute bottom-4 left-1/2 -translate-x-1/2">
            {bannerItems.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-all ${
                  index === currentIndex ? 'bg-white scale-125' : 'bg-white/50'
                }`}
                aria-label={`${t("go_to_slide")} ${index + 1}`}
              />
            ))}
          </div>
        </div>
        
        {/* دو بنر ایستا - هر کدام ۱/۳ عرض در دسکتاپ */}
        <div className="w-full md:w-1/3 flex flex-col gap-4 h-[40vh]">
          <div className="bg-linear-to-r from-amber-500 to-red-600 rounded-xl p-6 flex flex-col justify-end text-white shadow-lg h-1/2">
            <h3 className="text-2xl font-bold mb-2">{t("autumn_hues.title")}</h3>
            <p className="text-sm opacity-90">{t("autumn_hues.description")}</p>
          </div>
          <div className="bg-linear-to-r from-gray-400 to-slate-700 rounded-xl p-6 flex flex-col justify-end text-white shadow-lg h-1/2">
            <h3 className="text-2xl font-bold mb-2">{t("classic_neutrals.title")}</h3>
            <p className="text-sm opacity-90">{t("classic_neutrals.description")}</p>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default HeroComponent;