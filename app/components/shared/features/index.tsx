'use client'
import { Container } from "@/app/components/shared/container";
import React from "react";
import { useTranslations } from 'next-intl';
// Swiper components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// Icons from lucide-react
import { 
  Award, 
  Package, 
  Truck, 
  RotateCcw, 
  Headset 
} from 'lucide-react';

export function Features() {
  const t = useTranslations('features');
  
  // Sample data for features with icons
  const features = [
    {
      id: 1,
      title: t('premium_quality.title'),
      description: t('premium_quality.description'),
      icon: <Award className="w-6 h-6 text-blue-600 dark:text-blue-400" />,
      color: "bg-blue-50 dark:bg-blue-900/30",
      borderColor: "border-blue-200 dark:border-blue-800"
    },
    {
      id: 2,
      title: t('wide_selection.title'),
      description: t('wide_selection.description'),
      icon: <Package className="w-6 h-6 text-purple-600 dark:text-purple-400" />,
      color: "bg-purple-50 dark:bg-purple-900/30",
      borderColor: "border-purple-200 dark:border-purple-800"
    },
    {
      id: 3,
      title: t('fast_delivery.title'),
      description: t('fast_delivery.description'),
      icon: <Truck className="w-6 h-6 text-green-600 dark:text-green-400" />,
      color: "bg-green-50 dark:bg-green-900/30",
      borderColor: "border-green-200 dark:border-green-800"
    },
    {
      id: 4,
      title: t('easy_returns.title'),
      description: t('easy_returns.description'),
      icon: <RotateCcw className="w-6 h-6 text-yellow-600 dark:text-yellow-400" />,
      color: "bg-yellow-50 dark:bg-yellow-900/30",
      borderColor: "border-yellow-200 dark:border-yellow-800"
    },
    {
      id: 5,
      title: t('expert_support.title'),
      description: t('expert_support.description'),
      icon: <Headset className="w-6 h-6 text-pink-600 dark:text-pink-400" />,
      color: "bg-pink-50 dark:bg-pink-900/30",
      borderColor: "border-pink-200 dark:border-pink-800"
    },
  ];

  return (
    <>
      {/* Mobile swiper view */}
      <div className="md:hidden relative">
        <Swiper
          modules={[Navigation, Pagination]}
          spaceBetween={20}
          slidesPerView={1.2}
          centeredSlides={true}
          loop={true}
          pagination={{ 
            clickable: true,
            dynamicBullets: true
          }}
          className="py-4"
        >
          {features.map((feature) => (
            <SwiperSlide key={feature.id}>
              <div className={`${feature.color} border ${feature.borderColor} p-5 rounded-xl shadow-sm`}>
                <div className="flex items-center gap-3 mb-3">
                  {feature.icon}
                  <h3 className="text-lg font-semibold">{feature.title}</h3>
                </div>
                <p className="text-gray-600 dark:text-gray-300 text-sm">{feature.description}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      
      {/* Desktop grid view */}
      <div className="hidden md:grid md:grid-cols-5 gap-4 mt-6">
        {features.map((feature) => (
          <div 
            key={feature.id} 
            className={`${feature.color} border ${feature.borderColor} p-5 rounded-xl shadow-sm transition-transform hover:scale-[1.02]`}
          >
            <div className="flex items-center gap-3 mb-3">
              {feature.icon}
              <h3 className="text-lg font-semibold">{feature.title}</h3>
            </div>
            <p className="text-gray-600 dark:text-gray-300 text-sm">{feature.description}</p>
          </div>
        ))}
      </div>
    </>
  );
}