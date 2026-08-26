'use client';

import { profile } from '@/data/profile';

export default function About() {
  return (
    <section id="about" className="py-24 bg-[#0A0A0A]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <div className="w-20 h-1 bg-white" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <p className="text-gray-300 text-lg leading-relaxed whitespace-pre-line">
              {profile.about}
            </p>
          </div>

          <div>
            <div className="bg-gray-900/50 border border-gray-800 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-white mb-4">How I Build</h3>
              <ul className="space-y-3">
                {profile.engineeringPhilosophy.map((principle, index) => (
                  <li key={index} className="flex items-start space-x-3">
                    <span className="w-2 h-2 bg-white rounded-full mt-2 flex-shrink-0" />
                    <span className="text-gray-400">{principle}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-6 bg-gray-900/50 border border-gray-800 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-white mb-4">Currently Exploring</h3>
              <div className="flex flex-wrap gap-2">
                {profile.currentFocus.map((focus, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-gray-800 text-gray-300 rounded-full text-sm"
                  >
                    {focus}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
