'use client';

import { GraduationCap } from 'lucide-react';
import { education } from '@/data/education';

export default function Education() {
  return (
    <section id="education" className="py-24 bg-[#0A0A0A]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Education</h2>
          <div className="w-20 h-1 bg-white" />
        </div>

        <div className="space-y-8">
          {education.map((edu) => (
            <div
              key={edu.id}
              className="bg-gray-900/50 border border-gray-800 rounded-lg p-6"
            >
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gray-800 rounded-lg flex items-center justify-center flex-shrink-0">
                  <GraduationCap className="text-white" size={24} />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-white mb-1">{edu.institution}</h3>
                  <p className="text-gray-400 mb-2">
                    {edu.degree} in {edu.field}
                  </p>
                  <p className="text-gray-500 text-sm mb-4">
                    {edu.startDate} – {edu.endDate}
                  </p>
                  {edu.grade && (
                    <p className="text-gray-400 text-sm mb-4">
                      <span className="text-gray-500">Grade:</span> {edu.grade}
                    </p>
                  )}
                  {edu.activities && edu.activities.length > 0 && (
                    <div className="flex flex-wrap gap-2">
                      {edu.activities.map((activity) => (
                        <span
                          key={activity}
                          className="px-3 py-1 bg-gray-800 text-gray-400 rounded-full text-sm"
                        >
                          {activity}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
