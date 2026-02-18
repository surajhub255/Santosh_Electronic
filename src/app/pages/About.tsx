import React from 'react';
import { Award, Users, Clock, Target } from 'lucide-react';

export function About() {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-blue-600 text-white py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl font-bold mb-6">About Santosh Electronics</h1>
          <p className="text-xl">
            Serving Chilgo and nearby areas with quality electronics and exceptional repair services
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold mb-6">Our Story</h2>
            <p className="text-gray-600 mb-4">
              Santosh Electronics has been a trusted name in Chilgo for providing quality electronics and 
              professional repair services. Located on Main Road near Santosh Sound, we have built our 
              reputation on reliability, expertise, and customer satisfaction.
            </p>
            <p className="text-gray-600 mb-4">
              Our commitment to excellence and 24/7 availability ensures that our customers always have 
              access to the services they need, whenever they need them. We understand how important your 
              electronic devices are to your daily life, and we're here to keep them running smoothly.
            </p>
            <p className="text-gray-600">
              Whether you need a new device, accessories, or expert repair services, Santosh Electronics 
              is your one-stop solution for all electronics needs in Chilgo and surrounding areas.
            </p>
          </div>
          <div>
            <img
              src="https://images.unsplash.com/photo-1770488141886-5ca6b6f54272?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGVjdHJvbmljcyUyMHN0b3JlJTIwaW50ZXJpb3J8ZW58MXx8fHwxNzcxMzkzNzc0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="Our Store"
              className="rounded-lg shadow-xl w-full h-auto"
            />
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold mb-3">Quality</h3>
              <p className="text-gray-600">
                We provide only the best products and services to our customers
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold mb-3">Customer Focus</h3>
              <p className="text-gray-600">
                Your satisfaction is our top priority in everything we do
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold mb-3">Availability</h3>
              <p className="text-gray-600">
                Open 24/7 to serve you whenever you need assistance
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Target className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold mb-3">Expertise</h3>
              <p className="text-gray-600">
                Skilled technicians with years of experience in electronics
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">Why Choose Santosh Electronics?</h2>
          <div className="space-y-6">
            <div className="flex gap-4">
              <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                1
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Experienced Technicians</h3>
                <p className="text-gray-600">
                  Our team consists of highly skilled and experienced technicians who can handle repairs 
                  for all types of electronic devices.
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                2
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Genuine Parts & Products</h3>
                <p className="text-gray-600">
                  We use only genuine parts for repairs and sell authentic products from trusted brands.
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                3
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Competitive Pricing</h3>
                <p className="text-gray-600">
                  We offer fair and competitive prices for both our products and repair services.
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                4
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Fast Turnaround</h3>
                <p className="text-gray-600">
                  We understand the urgency and strive to complete repairs as quickly as possible without 
                  compromising on quality.
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                5
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Local & Trusted</h3>
                <p className="text-gray-600">
                  As a local business serving Chilgo and nearby areas, we've built lasting relationships 
                  with our community through trust and reliability.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Area */}
      <section className="py-16 px-4 bg-blue-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Areas We Serve</h2>
          <p className="text-xl text-gray-600 mb-8">
            Santosh Electronics proudly serves Chilgo and all nearby areas in Jharkhand. 
            We're conveniently located on Main Road, near Santosh Sound, making us easily 
            accessible to the entire community.
          </p>
          <div className="bg-white p-8 rounded-lg shadow-md inline-block">
            <p className="text-gray-700 mb-2">
              <strong>Primary Service Area:</strong> Chilgo, Jharkhand
            </p>
            <p className="text-gray-700">
              <strong>Extended Service Area:</strong> All nearby localities and villages
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
