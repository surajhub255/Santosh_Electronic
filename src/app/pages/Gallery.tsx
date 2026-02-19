import React , { useState } from 'react';
import { X } from 'lucide-react';

export function Gallery() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const galleryImages = [
    {
      url: 'https://images.unsplash.com/photo-1761207850745-d41a776ef897?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGVjdHJvbmljcyUyMHJlcGFpciUyMHNob3B8ZW58MXx8fHwxNzcxNDI2MDI5fDA&ixlib=rb-4.1.0&q=80&w=1080',
      title: 'Electronics Repair Workshop',
      category: 'Repair Services',
    },
    {
      url: 'https://images.unsplash.com/photo-1770488141886-5ca6b6f54272?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGVjdHJvbmljcyUyMHN0b3JlJTIwaW50ZXJpb3J8ZW58MXx8fHwxNzcxMzkzNzc0fDA&ixlib=rb-4.1.0&q=80&w=1080',
      title: 'Store Interior',
      category: 'Our Store',
    },
    {
      url: 'https://images.unsplash.com/photo-1769763227060-726b7b926bf2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWNobmljaWFuJTIwcmVwYWlyaW5nJTIwZWxlY3Ryb25pY3N8ZW58MXx8fHwxNzcxNDI2MDMwfDA&ixlib=rb-4.1.0&q=80&w=1080',
      title: 'Technician at Work',
      category: 'Repair Services',
    },
    {
      url: 'https://images.unsplash.com/photo-1717295248230-93ea71f48f92?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGVjdHJvbmljJTIwZGV2aWNlcyUyMGdhZGdldHN8ZW58MXx8fHwxNzcxNDI2MDMwfDA&ixlib=rb-4.1.0&q=80&w=1080',
      title: 'Electronics Products',
      category: 'Products',
    },
    {
      url: 'https://images.unsplash.com/photo-1588508065123-287b28e013da?w=1080&q=80',
      title: 'Smartphone Display',
      category: 'Products',
    },
    {
      url: 'https://images.unsplash.com/photo-1593642632823-8f785ba67e45?w=1080&q=80',
      title: 'Laptop Collection',
      category: 'Products',
    },
    {
      url: 'https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?w=1080&q=80',
      title: 'Computer Repair',
      category: 'Repair Services',
    },
    {
      url: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1080&q=80',
      title: 'Audio Equipment',
      category: 'Products',
    },
    {
      url: 'https://images.unsplash.com/photo-1540829917886-91ab031b1764?w=1080&q=80',
      title: 'Accessories Collection',
      category: 'Products',
    },
  ];

  const categories = ['All', ...Array.from(new Set(galleryImages.map(img => img.category)))];
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredImages = activeCategory === 'All' 
    ? galleryImages 
    : galleryImages.filter(img => img.category === activeCategory);

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-blue-600 text-white py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl font-bold mb-6">Gallery</h1>
          <p className="text-xl">
            Explore our store, products, and repair services in action
          </p>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-8 px-4 bg-gray-50 sticky top-[73px] z-40 border-b">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap gap-3 justify-center">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-2 rounded-full transition-colors ${
                  activeCategory === category
                    ? 'bg-blue-600 text-white'
                    : 'bg-white text-gray-700 hover:bg-gray-100'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredImages.map((image, index) => (
              <div
                key={index}
                className="relative group cursor-pointer overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow aspect-square"
                onClick={() => setSelectedImage(image.url)}
              >
                <img
                  src={image.url}
                  alt={image.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                  <div className="text-white">
                    <h3 className="font-bold text-lg">{image.title}</h3>
                    <p className="text-sm text-gray-200">{image.category}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <button
            className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors"
            onClick={() => setSelectedImage(null)}
          >
            <X className="w-8 h-8" />
          </button>
          <img
            src={selectedImage}
            alt="Full size"
            className="max-w-full max-h-full object-contain"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}

      {/* Info Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Visit Our Store</h2>
          <p className="text-gray-600 mb-8">
            Come and see our wide range of electronics and experience our professional repair services firsthand. 
            We're open 24/7 to serve you!
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a
              href="tel:09546816990"
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg transition-colors"
            >
              Call Us
            </a>
            <a
              href="/contact"
              className="bg-white hover:bg-gray-100 text-gray-900 px-8 py-3 rounded-lg border border-gray-300 transition-colors"
            >
              Get Directions
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
