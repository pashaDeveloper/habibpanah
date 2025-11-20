'use client';

import Card from "@/app/components/shared/card/card";
import { Container } from "@/app/components/shared/container";

// Sample product data with mixed images
const sampleProducts = [
  {
    id: "1",
    name: "Premium Silk Fabric",
    slug: "premium-silk-fabric",
    price: 29.99,
    discount: 15,
    image: "https://placehold.co/600x400/4F46E5/FFFFFF?text=Premium+Silk",
    category: ["fabrics", "natural", "premium"],
    starRating: 4.5
  },
  {
    id: "2",
    name: "Organic Cotton Blend",
    slug: "organic-cotton-blend",
    price: 19.99,
    image: "https://placehold.co/600x400/10B981/FFFFFF?text=Organic+Cotton",
    category: ["fabrics", "natural", "organic"],
    starRating: 4.2
  },
  {
    id: "3",
    name: "Designer Velvet",
    slug: "designer-velvet",
    price: 39.99,
    discount: 10,
    image: "https://placehold.co/600x400/8B5CF6/FFFFFF?text=Designer+Velvet",
    category: ["fabrics", "luxury", "designer"],
    starRating: 4.8
  },
  {
    id: "4",
    name: "Linen Summer Collection",
    slug: "linen-summer-collection",
    price: 24.99,
    image: "https://placehold.co/600x400/F59E0B/FFFFFF?text=Linen+Summer",
    category: ["fabrics", "summer", "natural"],
    starRating: 4.0
  }
];

export function ProductsPage() {
  return (
    <Container>
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8 text-center">Our Fabric Collection</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {sampleProducts.map((product) => (
            <Card key={product.id} product={product} />
          ))}
        </div>
        {/* Orange "View More Products" button */}
        <div className="flex justify-center mt-8">
          <button className="bg-orange-500 cursor-pointer hover:bg-orange-600 text-white font-bold py-3 px-6 rounded-full transition-colors duration-300 shadow-lg">
            View More Products
          </button>
        </div>
      </div>
    </Container>
  );
}