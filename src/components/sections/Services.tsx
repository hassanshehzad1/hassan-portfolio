'use client';

import { useState } from 'react';
import { services, serviceCategories, growingExpertise } from '@/data/services';

const iconMap: Record<string, any> = {
  Globe: '🌐',
  Server: '🖥️',
  Api: '🔌',
  Brain: '🧠',
  Bot: '🤖',
  LineChart: '📊',
  Database: '🗄️',
  Workflow: '⚡',
  Zap: '⚡',
  Cloud: '☁️',
  Smartphone: '📱',
  CloudLightning: '⛈️',
  CheckCircle: '✅',
  MessageSquare: '💬',
  Search: '🔍',
  BrainCircuit: '🧬',
  Code: '💻',
  Layers: '📚',
  Shield: '🛡️',
};

export default function Services() {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredServices = selectedCategory === 'All'
    ? services
    : services.filter(service => service.category === selectedCategory);

  return (
    <section id="services" className="py-24 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Services</h2>
          <div className="w-20 h-1 bg-white" />
        </div>

        {/* Service Filters */}
        <div className="mb-8 flex flex-wrap gap-2">
          {serviceCategories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-lg text-sm transition-colors focus:outline-none focus:ring-2 focus:ring-white ${
                selectedCategory === category
                  ? 'bg-white text-black'
                  : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {filteredServices.map((service) => (
            <div
              key={service.id}
              className="bg-gray-900/50 border border-gray-800 rounded-lg p-6 hover:border-gray-700 transition-colors group"
            >
              <div className="text-4xl mb-4">{iconMap[service.icon] || '⚙️'}</div>
              <h3 className="text-xl font-semibold text-white mb-2">{service.title}</h3>
              <p className="text-gray-400 text-sm mb-4">{service.description}</p>
              <div className="flex flex-wrap gap-2">
                {service.technologies.slice(0, 3).map((tech) => (
                  <span
                    key={tech}
                    className="px-2 py-1 bg-gray-800 text-gray-400 rounded text-xs"
                  >
                    {tech}
                  </span>
                ))}
                {service.technologies.length > 3 && (
                  <span className="px-2 py-1 bg-gray-800 text-gray-400 rounded text-xs">
                    +{service.technologies.length - 3}
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>

        {filteredServices.length === 0 && (
          <div className="text-center py-12 mb-16">
            <p className="text-gray-500">No services found in this category.</p>
          </div>
        )}

        {/* Currently Growing Expertise Section */}
        <div className="bg-gray-900/30 border border-gray-800 rounded-lg p-8">
          <h3 className="text-2xl font-semibold text-white mb-4">Currently Growing Expertise</h3>
          <p className="text-gray-400 mb-6">
            These are areas I am actively building expertise in, rather than offering as primary commercial services today.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {growingExpertise.map((item) => (
              <div
                key={item.id}
                className="bg-gray-800/30 border border-gray-700 rounded-lg p-6"
              >
                <div className="text-3xl mb-3">🧠</div>
                <h4 className="text-lg font-semibold text-white mb-2">{item.title}</h4>
                <p className="text-gray-400 text-sm mb-3">{item.description}</p>
                <div className="flex flex-wrap gap-2">
                  {item.technologies.slice(0, 3).map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 bg-gray-700/50 text-gray-400 rounded text-xs"
                    >
                      {tech}
                    </span>
                  ))}
                  {item.technologies.length > 3 && (
                    <span className="px-2 py-1 bg-gray-700/50 text-gray-400 rounded text-xs">
                      +{item.technologies.length - 3}
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
