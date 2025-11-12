import Card from "@/app/components/shared/card/card";
import { Container } from "@/app/components/shared/contianer/container";

// Sample product data with real product images
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
  },
  {
    id: "5",
    name: "Wool Winter Warmers",
    slug: "wool-winter-warmers",
    price: 34.99,
    discount: 20,
    image: "https://placehold.co/600x400/EF4444/FFFFFF?text=Wool+Winter",
    category: ["fabrics", "winter", "warm"],
    starRating: 4.6
  },
  {
    id: "6",
    name: "Denim Classic Blue",
    slug: "denim-classic-blue",
    price: 27.99,
    image: "https://placehold.co/600x400/3B82F6/FFFFFF?text=Denim+Classic",
    category: ["fabrics", "casual", "classic"],
    starRating: 4.3
  },
  {
    id: "7",
    name: "Chiffon Elegant Drapes",
    slug: "chiffon-elegant-drapes",
    price: 32.99,
    discount: 5,
    image: "https://placehold.co/600x400/8B5CF6/FFFFFF?text=Chiffon+Elegant",
    category: ["fabrics", "elegant", "lightweight"],
    starRating: 4.7
  },
  {
    id: "8",
    name: "Leather Premium Finish",
    slug: "leather-premium-finish",
    price: 45.99,
    image: "https://placehold.co/600x400/000000/FFFFFF?text=Leather+Premium",
    category: ["materials", "premium", "durable"],
    starRating: 4.9
  }
];

export default function ProductsPage() {
  return (
    <Container>

      <h1 className="text-3xl font-bold mb-8 text-center">Our Fabric Collection</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {sampleProducts.map((product) => (
          <Card key={product.id} product={product} />
        ))}
      </div>
    </Container>
  );
}