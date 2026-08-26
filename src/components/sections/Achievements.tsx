'use client';

import { achievements } from '@/data/achievements';

export default function Achievements() {
  return (
    <section id="achievements" className="py-24 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Achievements</h2>
          <div className="w-20 h-1 bg-white" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {achievements.map((achievement) => (
            <div
              key={achievement.id}
              className="bg-gray-900/50 border border-gray-800 rounded-lg p-6 hover:border-gray-700 transition-colors"
            >
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="text-black font-bold text-xl">🏆</span>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-white mb-2">{achievement.title}</h3>
                  <p className="text-gray-400 text-sm mb-2">{achievement.issuer}</p>
                  <p className="text-gray-500 text-sm mb-4">{achievement.date}</p>
                  <p className="text-gray-400 text-sm">{achievement.description}</p>
                  {achievement.imageUrl && achievement.imageUrl !== '#TODO: Add certificate image' && (
                    <button className="mt-4 px-4 py-2 bg-gray-800 text-white rounded-lg text-sm hover:bg-gray-700 transition-colors">
                      View Certificate
                    </button>
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
