"use client"
import { Container } from "@/app/components/shared/container";
import React from "react";
import { useTranslations } from 'next-intl';
import { 
  WeddingDressIcon, 
  MaleIcon, 
  FemaleIcon, 
  FormalWomensIcon, 
  FormalMensIcon, 
  WinterIcon 
} from '@/app/components/shared/icons';

export function Categories() {
  const t = useTranslations('categories');
  
  // Sample data for categories with icons
  const categories = [
    {
      id: 1,
      title: t('wedding_attire'),
      icon: <WeddingDressIcon className="h-6 w-6 text-pink-600 dark:text-pink-300" />,
      color: "bg-gradient-to-br from-pink-100 to-pink-200",
      darkColor: "dark:from-pink-900 dark:to-pink-800"
    },
    {
      id: 2,
      title: t('mens_casual'),
      icon: <MaleIcon className="h-6 w-6 text-blue-600 dark:text-blue-300" />,
      color: "bg-gradient-to-br from-blue-100 to-blue-200",
      darkColor: "dark:from-blue-900 dark:to-blue-800"
    },
    {
      id: 3,
      title: t('womens_casual'),
      icon: <FemaleIcon className="h-6 w-6 text-purple-600 dark:text-purple-300" />,
      color: "bg-gradient-to-br from-purple-100 to-purple-200",
      darkColor: "dark:from-purple-900 dark:to-purple-800"
    },
    {
      id: 4,
      title: t('womens_formal'),
      icon: <FormalWomensIcon className="h-6 w-6 text-red-600 dark:text-red-300" />,
      color: "bg-gradient-to-br from-red-100 to-red-200",
      darkColor: "dark:from-red-900 dark:to-red-800"
    },
    {
      id: 5,
      title: t('mens_formal'),
      icon: <FormalMensIcon className="h-6 w-6 text-gray-600 dark:text-gray-300" />,
      color: "bg-gradient-to-br from-gray-100 to-gray-200",
      darkColor: "dark:from-gray-900 dark:to-gray-800"
    },
    {
      id: 6,
      title: t('winter'),
      icon: <WinterIcon className="h-6 w-6 text-blue-600 dark:text-blue-300" />,
      color: "bg-gradient-to-br from-blue-100 to-blue-200",
      darkColor: "dark:from-blue-900 dark:to-blue-800"
    }
  ];

  return (
    <Container>
      <h2 className="text-2xl font-bold my-6 text-center text-gray-900 dark:text-white">{t('title')}</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4">
        {categories.map((category) => (
          <div 
            key={category.id} 
            className={`${category.color} ${category.darkColor} rounded-xl p-4 flex items-center gap-3 text-gray-800 dark:text-gray-200 cursor-pointer transition-transform hover:scale-105`}
          >
            <div>
              {category.icon}
            </div>
            <h3 className="text-sm font-semibold whitespace-nowrap overflow-hidden text-ellipsis">{category.title}</h3>
          </div>
        ))}
      </div>
    </Container>
  );
}