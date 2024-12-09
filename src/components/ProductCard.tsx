import React from 'react';
import { Phone } from 'lucide-react';

interface ProductCardProps {
  name: string;
  price: number;
  image: string;
  description: string;
}

export function ProductCard({ name, price, image, description }: ProductCardProps) {
  const whatsappLink = `https://wa.me/1234567890?text=Hola, me interesa el producto: ${name}`;

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:scale-105">
      <img src={image} alt={name} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h3 className="text-lg font-semibold mb-2">{name}</h3>
        <p className="text-gray-600 text-sm mb-2">{description}</p>
        <div className="flex justify-between items-center">
          <span className="text-xl font-bold text-yellow-500">${price}</span>
          <a
            href={whatsappLink}
            className="flex items-center space-x-1 bg-green-500 text-white px-3 py-1 rounded-full hover:bg-green-600"
          >
            <Phone className="h-4 w-4" />
            <span>Comprar</span>
          </a>
        </div>
      </div>
    </div>
  );
}