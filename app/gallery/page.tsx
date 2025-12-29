"use client";

import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';
import { X } from 'lucide-react';

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const images = [
    { id: 1, src: 'https://images.pexels.com/photos/8199562/pexels-photo-8199562.jpeg?auto=compress&cs=tinysrgb&w=800', alt: 'Students in classroom', category: 'Academic' },
    { id: 2, src: 'https://images.pexels.com/photos/8199734/pexels-photo-8199734.jpeg?auto=compress&cs=tinysrgb&w=800', alt: 'Science laboratory', category: 'Facilities' },
    { id: 3, src: 'https://images.pexels.com/photos/8199589/pexels-photo-8199589.jpeg?auto=compress&cs=tinysrgb&w=800', alt: 'Library reading area', category: 'Facilities' },
    { id: 4, src: 'https://images.pexels.com/photos/8199647/pexels-photo-8199647.jpeg?auto=compress&cs=tinysrgb&w=800', alt: 'Sports activities', category: 'Sports' },
    { id: 5, src: 'https://images.pexels.com/photos/8199678/pexels-photo-8199678.jpeg?auto=compress&cs=tinysrgb&w=800', alt: 'Art class', category: 'Arts' },
    { id: 6, src: 'https://images.pexels.com/photos/8199712/pexels-photo-8199712.jpeg?auto=compress&cs=tinysrgb&w=800', alt: 'Computer lab', category: 'Technology' },
    { id: 7, src: 'https://images.pexels.com/photos/8199756/pexels-photo-8199756.jpeg?auto=compress&cs=tinysrgb&w=800', alt: 'Music room', category: 'Arts' },
    { id: 8, src: 'https://images.pexels.com/photos/8199823/pexels-photo-8199823.jpeg?auto=compress&cs=tinysrgb&w=800', alt: 'Playground', category: 'Sports' },
    { id: 9, src: 'https://images.pexels.com/photos/8199845/pexels-photo-8199845.jpeg?auto=compress&cs=tinysrgb&w=800', alt: 'Cafeteria', category: 'Facilities' }
  ];

  const categories = ['All', 'Academic', 'Facilities', 'Sports', 'Arts', 'Technology'];
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredImages = activeCategory === 'All' 
    ? images 
    : images.filter(img => img.category === activeCategory);

  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-indigo-100 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              <span className="text-blue-600">Gallery</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Explore our vibrant school life through these moments.
            </p>
          </div>
        </div>
      </section>

      {/* Filter Tabs */}
      <section className="py-8 bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-2 rounded-full font-medium transition-colors ${
                  activeCategory === category
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Image Grid */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredImages.map((image) => (
              <Dialog key={image.id}>
                <DialogTrigger asChild>
                  <Card className="cursor-pointer hover:shadow-lg transition-shadow overflow-hidden">
                    <CardContent className="p-0">
                      <div className="aspect-square relative overflow-hidden">
                        <img
                          src={image.src}
                          alt={image.alt}
                          className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                        />
                        <div className="absolute inset-0 bg-black bg-opacity-0 hover:bg-opacity-20 transition-opacity duration-300 flex items-center justify-center">
                          <span className="text-white opacity-0 hover:opacity-100 transition-opacity duration-300 font-medium">
                            View Image
                          </span>
                        </div>
                      </div>
                      <div className="p-4">
                        <p className="text-sm text-gray-600 mb-1">{image.category}</p>
                        <p className="font-medium text-gray-900">{image.alt}</p>
                      </div>
                    </CardContent>
                  </Card>
                </DialogTrigger>
                <DialogContent className="max-w-4xl w-full p-0">
                  <div className="relative">
                    <img
                      src={image.src}
                      alt={image.alt}
                      className="w-full h-auto max-h-[80vh] object-contain"
                    />
                    <div className="p-6">
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">{image.alt}</h3>
                      <p className="text-gray-600">{image.category}</p>
                    </div>
                  </div>
                </DialogContent>
              </Dialog>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}