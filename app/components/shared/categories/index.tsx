import { Container } from "@/app/components/shared/contianer/container";
import React from "react";

export function Categories() {
  // Sample data for categories
  const categories = [
    {
      id: 1,
      title: "Silk Fabrics",
      color: "from-blue-400 to-blue-600",
      darkColor: "from-blue-600 to-blue-800"
    },
    {
      id: 2,
      title: "Cotton Blend",
      color: "from-green-400 to-green-600",
      darkColor: "from-green-600 to-green-800"
    },
    {
      id: 3,
      title: "Velvet Luxe",
      color: "from-purple-400 to-purple-600",
      darkColor: "from-purple-600 to-purple-800"
    },
    {
      id: 4,
      title: "Linen Classics",
      color: "from-yellow-400 to-yellow-600",
      darkColor: "from-yellow-600 to-yellow-800"
    },
    {
      id: 5,
      title: "Wool Warmers",
      color: "from-red-400 to-red-600",
      darkColor: "from-red-600 to-red-800"
    },
    {
      id: 6,
      title: "Denim Styles",
      color: "from-indigo-400 to-indigo-600",
      darkColor: "from-indigo-600 to-indigo-800"
    }
  ];

  return (
    <Container>
      <h2 className="text-2xl font-bold mb-6 text-center text-gray-900 dark:text-white">Shop by Category</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4">
        {categories.map((category) => (
          <div 
            key={category.id} 
            className={`bg-linear-to-br ${category.color} dark:${category.darkColor} rounded-xl p-6 flex flex-col items-center justify-center text-white shadow-lg h-32 cursor-pointer transition-transform hover:scale-105`}
          >
            <h3 className="text-lg font-semibold text-center text-white">{category.title}</h3>
          </div>
        ))}
      </div>
    </Container>
  );
}