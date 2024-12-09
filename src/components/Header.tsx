import React from 'react';
import { Menu, Phone, Wrench } from 'lucide-react';

export function Header() {
  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Wrench className="h-8 w-8 text-yellow-500" />
            <h1 className="text-2xl font-bold">Ferretería El Constructor</h1>
          </div>
          
          <nav className="hidden md:flex space-x-6">
            <a href="#herramientas" className="hover:text-yellow-500">Herramientas</a>
            <a href="#electricidad" className="hover:text-yellow-500">Electricidad</a>
            <a href="#plomeria" className="hover:text-yellow-500">Plomería</a>
            <a href="#ubicacion" className="hover:text-yellow-500">Ubicación</a>
          </nav>

          <div className="flex items-center space-x-4">
            <a href="https://wa.me/1234567890" className="flex items-center space-x-1 text-green-600">
              <Phone className="h-5 w-5" />
              <span>Contactar</span>
            </a>
            <button className="md:hidden">
              <Menu className="h-6 w-6" />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}