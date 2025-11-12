import { Container } from "@/app/components/shared/contianer/container";

export function Features() {
  return (
    <Container>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
        <div className="bg-white/20 dark:bg-red-500/20 border border-white/20 p-6 rounded-lg">
          <h2 className="text-xl font-semibold mb-2">Premium Quality</h2>
          <p>Our fabrics are made with the finest materials and craftsmanship.</p>
        </div>
        
        <div className="bg-white/20 dark:bg-red-500/20 border border-white/20 p-6 rounded-lg">
          <h2 className="text-xl font-semibold mb-2">Wide Selection</h2>
          <p>Choose from hundreds of patterns, colors, and textures.</p>
        </div>
        
        <div className="bg-white/20 dark:bg-red-500/20 border border-white/20 p-6 rounded-lg">
          <h2 className="text-xl font-semibold mb-2">Fast Delivery</h2>
          <p>Get your fabrics delivered to your doorstep quickly and safely.</p>
        </div>
      </div>
    </Container>
  );
}