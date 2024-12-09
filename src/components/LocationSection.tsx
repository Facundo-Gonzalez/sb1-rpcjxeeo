import React from 'react';
import { MapPin, Clock } from 'lucide-react';

export function LocationSection() {
  return (
    <section className="bg-white py-12" id="ubicacion">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-bold mb-8">Nuestra Ubicación</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-4">
            <div className="flex items-start space-x-2">
              <MapPin className="h-6 w-6 text-yellow-500 flex-shrink-0" />
              <div>
                <h3 className="font-semibold">Dirección</h3>
                <p className="text-gray-600">Av. Principal 123, Ciudad</p>
              </div>
            </div>
            <div className="flex items-start space-x-2">
              <Clock className="h-6 w-6 text-yellow-500 flex-shrink-0" />
              <div>
                <h3 className="font-semibold">Horario de Atención</h3>
                <p className="text-gray-600">Lunes a Viernes: 8:00 AM - 6:00 PM</p>
                <p className="text-gray-600">Sábados: 8:00 AM - 2:00 PM</p>
              </div>
            </div>
          </div>
          <div className="h-[300px] bg-gray-200 rounded-lg">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3976.8!2d-74!3d4.6!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNMKwMzYnMDAuMCJOIDc0wrAwMCcwMC4wIlc!5e0!3m2!1sen!2s!4v1600000000000!5m2!1sen!2s"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              loading="lazy"
              className="rounded-lg"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
}