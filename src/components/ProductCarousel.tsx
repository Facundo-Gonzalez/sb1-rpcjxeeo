import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { ProductCard } from './ProductCard';

interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  description: string;
}

interface ProductCarouselProps {
  title: string;
  products: Product[];
}

export function ProductCarousel({ title, products }: ProductCarouselProps) {
  const scrollContainer = (direction: 'left' | 'right') => {
    const container = document.getElementById(`carousel-${title}`);
    if (container) {
      const scrollAmount = direction === 'left' ? -300 : 300;
      container.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <div className="relative py-8">
      <h2 className="text-2xl font-bold mb-6">{title}</h2>
      <div className="relative">
        <button
          onClick={() => scrollContainer('left')}
          className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white/80 p-2 rounded-full shadow-md"
        >
          <ChevronLeft className="h-6 w-6 text-yellow-500" />
        </button>
        <div
          id={`carousel-${title}`}
          className="flex overflow-x-auto gap-6 scroll-smooth hide-scrollbar"
        >
          {products.map((product) => (
            <div key={product.id} className="flex-none w-72">
              <ProductCard {...product} />
            </div>
          ))}
        </div>
        <button
          onClick={() => scrollContainer('right')}
          className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white/80 p-2 rounded-full shadow-md"
        >
          <ChevronRight className="h-6 w-6 text-yellow-500" />
        </button>
      </div>
    </div>
  );
}