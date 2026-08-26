'use client';

import { skills } from '@/data/skills';

export default function Skills() {
  return (
    <section id="skills" className="py-24 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Skills</h2>
          <div className="w-20 h-1 bg-white" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((category) => (
            <div
              key={category.category}
              className="bg-gray-900/50 border border-gray-800 rounded-lg p-6"
            >
              <h3 className="text-xl font-semibold text-white mb-6">{category.category}</h3>
              <div className="space-y-4">
                {category.skills.map((skill) => (
                  <div key={skill.name}>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-gray-300">{skill.name}</span>
                      <span
                        className={`text-xs px-2 py-1 rounded-full ${
                          skill.level === 'Strong'
                            ? 'bg-green-900/50 text-green-400'
                            : skill.level === 'Working Knowledge'
                            ? 'bg-blue-900/50 text-blue-400'
                            : 'bg-yellow-900/50 text-yellow-400'
                        }`}
                      >
                        {skill.level}
                      </span>
                    </div>
                    <div className="w-full bg-gray-800 rounded-full h-2">
                      <div
                        className="h-2 bg-white rounded-full"
                        style={{ width: skill.level === 'Strong' ? '90%' : skill.level === 'Working Knowledge' ? '70%' : '50%' }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
