import { 
  Smartphone, 
  Laptop, 
  Monitor, 
  Tv, 
  Speaker, 
  Watch,
  Headphones,
  Camera,
  Printer,
  HardDrive,
  Wrench,
  ShoppingBag
} from 'lucide-react';

export function Services() {
  const repairServices = [
    {
      icon: Smartphone,
      name: 'Smartphone Repair',
      description: 'Screen replacement, battery issues, charging problems, software troubleshooting',
    },
    {
      icon: Laptop,
      name: 'Laptop Repair',
      description: 'Hardware upgrades, screen replacement, virus removal, performance optimization',
    },
    {
      icon: Monitor,
      name: 'Monitor Repair',
      description: 'Display issues, power problems, connection troubleshooting',
    },
    {
      icon: Tv,
      name: 'TV Repair',
      description: 'LED/LCD repair, sound issues, remote problems, smart TV configuration',
    },
    {
      icon: Speaker,
      name: 'Audio Systems',
      description: 'Speaker repair, amplifier servicing, home theater setup',
    },
    {
      icon: Printer,
      name: 'Printer Repair',
      description: 'Print quality issues, paper jams, connectivity problems',
    },
  ];

  const products = [
    {
      icon: Smartphone,
      name: 'Smartphones',
      description: 'Latest models from top brands',
    },
    {
      icon: Laptop,
      name: 'Laptops & Computers',
      description: 'Wide range of laptops and desktops',
    },
    {
      icon: Tv,
      name: 'Televisions',
      description: 'Smart TVs and LED displays',
    },
    {
      icon: Headphones,
      name: 'Audio Devices',
      description: 'Headphones, speakers, soundbars',
    },
    {
      icon: Camera,
      name: 'Cameras',
      description: 'Digital cameras and accessories',
    },
    {
      icon: Watch,
      name: 'Smartwatches',
      description: 'Fitness trackers and smartwatches',
    },
    {
      icon: HardDrive,
      name: 'Storage Devices',
      description: 'Hard drives, SSDs, memory cards',
    },
    {
      icon: Printer,
      name: 'Printers & Scanners',
      description: 'Home and office printing solutions',
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-blue-600 text-white py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl font-bold mb-6">Our Services</h1>
          <p className="text-xl">
            Comprehensive electronics solutions for all your needs - from sales to expert repairs
          </p>
        </div>
      </section>

      {/* Repair Services */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-600 px-4 py-2 rounded-full mb-4">
              <Wrench className="w-5 h-5" />
              <span className="font-semibold">Repair Services</span>
            </div>
            <h2 className="text-4xl font-bold mb-4">Expert Repair Solutions</h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Our skilled technicians can fix all types of electronic devices quickly and efficiently
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {repairServices.map((service, index) => {
              const Icon = service.icon;
              return (
                <div
                  key={index}
                  className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow border border-gray-100"
                >
                  <div className="w-14 h-14 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                    <Icon className="w-7 h-7 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">{service.name}</h3>
                  <p className="text-gray-600">{service.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-600 px-4 py-2 rounded-full mb-4">
              <ShoppingBag className="w-5 h-5" />
              <span className="font-semibold">Products & Sales</span>
            </div>
            <h2 className="text-4xl font-bold mb-4">Electronics & Accessories</h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Browse our wide selection of quality electronics from trusted brands
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {products.map((product, index) => {
              const Icon = product.icon;
              return (
                <div
                  key={index}
                  className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow text-center"
                >
                  <div className="w-14 h-14 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-7 h-7 text-blue-600" />
                  </div>
                  <h3 className="text-lg font-bold mb-2">{product.name}</h3>
                  <p className="text-gray-600 text-sm">{product.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">Additional Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-lg">
              <h3 className="text-2xl font-bold mb-4">Installation & Setup</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 mt-1">✓</span>
                  <span>TV mounting and installation</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 mt-1">✓</span>
                  <span>Home theater setup</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 mt-1">✓</span>
                  <span>Computer hardware installation</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 mt-1">✓</span>
                  <span>Smart home device configuration</span>
                </li>
              </ul>
            </div>
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-lg">
              <h3 className="text-2xl font-bold mb-4">Maintenance & Support</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 mt-1">✓</span>
                  <span>Regular device maintenance</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 mt-1">✓</span>
                  <span>Software updates and upgrades</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 mt-1">✓</span>
                  <span>Technical consultation</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 mt-1">✓</span>
                  <span>Warranty support</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Why Our Service */}
      <section className="py-16 px-4 bg-blue-600 text-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">Our Service Promise</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-5xl font-bold mb-2">24/7</div>
              <p className="text-lg">Available Round the Clock</p>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold mb-2">Fast</div>
              <p className="text-lg">Quick Turnaround Time</p>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold mb-2">100%</div>
              <p className="text-lg">Customer Satisfaction</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-4">Need Our Services?</h2>
          <p className="text-xl text-gray-600 mb-8">
            Contact us today for a quote or to schedule a repair
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a
              href="tel:09546816990"
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg text-lg transition-colors"
            >
              Call: 095468 16990
            </a>
            <a
              href="/contact"
              className="bg-gray-200 hover:bg-gray-300 text-gray-900 px-8 py-3 rounded-lg text-lg transition-colors"
            >
              Visit Our Store
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
