import React from 'react';
import { Header } from './components/Header';
import { ProductCarousel } from './components/ProductCarousel';
import { LocationSection } from './components/LocationSection';
import { products } from './data/products';

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        {/* Hero Section */}
        <section className="bg-yellow-500 rounded-lg p-8 mb-12 text-white">
          <h1 className="text-4xl font-bold mb-4">Ferretería El Constructor</h1>
          <p className="text-xl">Todo lo que necesitas para tus proyectos en un solo lugar</p>
        </section>

        {/* Product Categories */}
        <section id="herramientas">
          <ProductCarousel title="Herramientas Eléctricas" products={products.tools} />
        </section>

        <section id="electricidad">
          <ProductCarousel title="Material Eléctrico" products={products.electrical} />
        </section>

        <section id="plomeria">
          <ProductCarousel title="Plomería" products={products.plumbing} />
        </section>

        {/* Location Section */}
        <LocationSection />
      </main>

      {/* Footer */}
      <footer className="bg-white mt-12 py-6">
        <div className="container mx-auto px-4 text-center text-gray-600">
          <p>© 2024 Ferretería El Constructor. Todos los derechos reservados.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;