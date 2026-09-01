'use client';

import { experience } from '@/data/experience';

export default function Experience() {
  return (
    <section id="experience" className="py-24 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Experience</h2>
          <div className="w-20 h-1 bg-white" />
        </div>

        <div className="space-y-8">
          {experience.map((exp) => (
            <div
              key={exp.id}
              className="relative pl-8 border-l-2 border-gray-800"
            >
              <div className="absolute left-0 top-0 w-4 h-4 bg-white rounded-full transform -translate-x-[9px]" />
              <div className="bg-gray-900/50 border border-gray-800 rounded-lg p-6">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-semibold text-white">{exp.role}</h3>
                    <p className="text-gray-400">{exp.company}</p>
                  </div>
                  <div className="mt-2 sm:mt-0 flex items-center space-x-2">
                    <span className="px-3 py-1 bg-gray-800 text-gray-300 rounded-full text-sm">
                      {exp.type}
                    </span>
                    <span className="text-gray-500 text-sm">
                      {exp.startDate} – {exp.endDate}
                    </span>
                  </div>
                </div>
                <p className="text-gray-400 mb-4">{exp.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {exp.responsibilities.map((resp, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 bg-gray-800/50 text-gray-400 rounded-full text-sm"
                    >
                      {resp}
                    </span>
                  ))}
                </div>
                {exp.certificateUrl && (
                  <a
                    href={exp.certificateUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-sm text-blue-400 hover:text-blue-300 transition-colors"
                  >
                    <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    View Certificate
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
