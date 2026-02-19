import { Link } from 'react-router';
import React from 'react';
import { Wrench, ShoppingBag, Clock, MapPin, Phone, Star } from 'lucide-react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';

export function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[600px] flex items-center justify-center text-white">
        <div className="absolute inset-0 bg-black/50 z-10" />
        <img
          src="https://images.unsplash.com/photo-1761207850745-d41a776ef897?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGVjdHJvbmljcyUyMHJlcGFpciUyMHNob3B8ZW58MXx8fHwxNzcxNDI2MDI5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
          alt="Santosh Electronics"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="relative z-20 text-center px-4 max-w-4xl">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">
            Welcome to Santosh Electronics
          </h1>
          <p className="text-xl md:text-2xl mb-8">
            Your Trusted Electronics Partner in Chilgo
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              to="/services"
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg text-lg transition-colors"
            >
              Our Services
            </Link>
            <Link
              to="/contact"
              className="bg-white hover:bg-gray-100 text-gray-900 px-8 py-3 rounded-lg text-lg transition-colors"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">Why Choose Us?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Wrench className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Expert Repairs</h3>
              <p className="text-gray-600">
                Professional repair services for all types of electronic devices with experienced technicians.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-2xl font-bold mb-4">24/7 Available</h3>
              <p className="text-gray-600">
                We're open 24 hours a day, 7 days a week to serve you whenever you need us.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <ShoppingBag className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Quality Products</h3>
              <p className="text-gray-600">
                Wide range of electronics and accessories from trusted brands at competitive prices.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="relative h-80 rounded-lg overflow-hidden shadow-lg group">
              <img
                src="https://images.unsplash.com/photo-1769763227060-726b7b926bf2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWNobmljaWFuJTIwcmVwYWlyaW5nJTIwZWxlY3Ryb25pY3N8ZW58MXx8fHwxNzcxNDI2MDMwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Repair Services"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-6">
                <div className="text-white">
                  <h3 className="text-2xl font-bold mb-2">Repair Services</h3>
                  <p>Professional repair for smartphones, laptops, TVs, and more</p>
                </div>
              </div>
            </div>
            <div className="relative h-80 rounded-lg overflow-hidden shadow-lg group">
              <img
                src="https://images.unsplash.com/photo-1717295248230-93ea71f48f92?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGVjdHJvbmljJTIwZGV2aWNlcyUyMGdhZGdldHN8ZW58MXx8fHwxNzcxNDI2MDMwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Electronics Sales"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-6">
                <div className="text-white">
                  <h3 className="text-2xl font-bold mb-2">Electronics Sales</h3>
                  <p>Latest gadgets and electronics at competitive prices</p>
                </div>
              </div>
            </div>
          </div>
          <div className="text-center mt-8">
            <Link
              to="/services"
              className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg text-lg transition-colors"
            >
              View All Services
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">What Our Customers Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: 'Rahul Kumar',
                text: 'Excellent service! They repaired my laptop quickly and professionally. Highly recommended!',
                rating: 5,
              },
              {
                name: 'Priya Singh',
                text: 'Best electronics shop in Chilgo. Great prices and friendly staff. Will definitely come back.',
                rating: 5,
              },
              {
                name: 'Amit Sharma',
                text: 'Very satisfied with their 24/7 service. Fixed my phone screen at midnight. Thank you!',
                rating: 5,
              },
            ].map((testimonial, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-600 mb-4">{testimonial.text}</p>
                <p className="font-bold">{testimonial.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-blue-600 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-4">Need Electronics Repair?</h2>
          <p className="text-xl mb-8">
            Contact us today for fast and reliable service!
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a
              href="tel:09546816990"
              className="flex items-center gap-2 bg-white text-blue-600 hover:bg-gray-100 px-8 py-3 rounded-lg text-lg transition-colors"
            >
              <Phone className="w-5 h-5" />
              Call Now
            </a>
            <Link
              to="/contact"
              className="flex items-center gap-2 bg-blue-700 hover:bg-blue-800 text-white px-8 py-3 rounded-lg text-lg transition-colors"
            >
              <MapPin className="w-5 h-5" />
              Get Directions
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
