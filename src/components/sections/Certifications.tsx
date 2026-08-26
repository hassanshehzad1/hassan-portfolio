'use client';

import { useState, useEffect } from 'react';
import { ExternalLink, X, Award } from 'lucide-react';
import { certifications, certificationCategories } from '@/data/certifications';

export default function Certifications() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedCert, setSelectedCert] = useState<typeof certifications[0] | null>(null);

  const filteredCertifications = certifications.filter((cert) =>
    selectedCategory === 'All' || cert.category.some((cat) => cat === selectedCategory)
  );

  const featuredCertifications = certifications.filter((cert) => cert.featured);

  // Handle Escape key to close modal
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && selectedCert) {
        setSelectedCert(null);
      }
    };
    window.addEventListener('keydown', handleEscape);
    return () => window.removeEventListener('keydown', handleEscape);
  }, [selectedCert]);

  // Prevent body scroll when modal is open
  useEffect(() => {
    if (selectedCert) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [selectedCert]);

  return (
    <section id="certifications" className="py-24 bg-[#0A0A0A]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Certifications</h2>
          <div className="w-20 h-1 bg-white" />
        </div>

        {/* Featured Certifications */}
        {featuredCertifications.length > 0 && (
          <div className="mb-16">
            <h3 className="text-2xl font-semibold text-white mb-6">Featured Certifications</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {featuredCertifications.map((cert) => (
                <div
                  key={cert.id}
                  onClick={() => setSelectedCert(cert)}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault();
                      setSelectedCert(cert);
                    }
                  }}
                  className="bg-gradient-to-br from-gray-900 to-gray-800 border-2 border-white/20 rounded-lg p-8 hover:border-white/40 transition-all cursor-pointer group focus:outline-none focus:ring-2 focus:ring-white"
                  tabIndex={0}
                  role="button"
                  aria-label={`View details for ${cert.title}`}
                >
                  <div className="flex items-center mb-4">
                    <Award className="text-white mr-3" size={32} />
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">{cert.title}</h3>
                  <p className="text-gray-300 mb-4">{cert.issuer}</p>
                  <p className="text-gray-500 text-sm">{cert.date}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Filters */}
        <div className="mb-8 flex flex-wrap gap-2">
          {certificationCategories.map((category) => (
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

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCertifications.map((cert) => (
            <div
              key={cert.id}
              onClick={() => setSelectedCert(cert)}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  setSelectedCert(cert);
                }
              }}
              className="bg-gray-900/50 border border-gray-800 rounded-lg p-6 hover:border-gray-700 transition-colors cursor-pointer focus:outline-none focus:ring-2 focus:ring-white"
              tabIndex={0}
              role="button"
              aria-label={`View details for ${cert.title}`}
            >
              <div className="mb-4">
                <h3 className="text-lg font-semibold text-white mb-2">{cert.title}</h3>
                <p className="text-gray-400 text-sm">{cert.issuer}</p>
              </div>

              <div className="flex items-center justify-between mb-4">
                <span className="text-gray-500 text-sm">{cert.date}</span>
                {cert.credentialUrl && (
                  <a
                    href={cert.credentialUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className="flex items-center space-x-1 text-gray-400 hover:text-white transition-colors text-sm focus:outline-none focus:ring-2 focus:ring-white rounded"
                    aria-label={`Verify ${cert.title}`}
                  >
                    <ExternalLink size={14} />
                    <span>Verify</span>
                  </a>
                )}
              </div>

              <div className="flex flex-wrap gap-2">
                {cert.skills.slice(0, 3).map((skill) => (
                  <span
                    key={skill}
                    className="px-2 py-1 bg-gray-800 text-gray-400 rounded text-xs"
                  >
                    {skill}
                  </span>
                ))}
                {cert.skills.length > 3 && (
                  <span className="px-2 py-1 bg-gray-800 text-gray-400 rounded text-xs">
                    +{cert.skills.length - 3}
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>

        {filteredCertifications.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500">No certifications found in this category.</p>
          </div>
        )}
      </div>

      {/* Certificate Detail Modal */}
      {selectedCert && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
          onClick={() => setSelectedCert(null)}
          role="dialog"
          aria-modal="true"
          aria-labelledby="cert-modal-title"
        >
          <div 
            className="bg-gray-900 border border-gray-800 rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="p-6">
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center">
                  <Award className="text-white mr-3" size={32} />
                  <div>
                    {selectedCert.featured && (
                      <span className="inline-block px-3 py-1 bg-white text-black rounded-full text-xs font-medium mb-2">
                        Featured
                      </span>
                    )}
                    <h3 id="cert-modal-title" className="text-2xl font-bold text-white">{selectedCert.title}</h3>
                  </div>
                </div>
                <button
                  onClick={() => setSelectedCert(null)}
                  className="p-2 text-gray-400 hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-white rounded"
                  aria-label="Close modal"
                >
                  <X size={24} />
                </button>
              </div>

              <div className="space-y-4">
                <div>
                  <p className="text-gray-300 text-lg">{selectedCert.issuer}</p>
                  <p className="text-gray-500">{selectedCert.date}</p>
                </div>

                <div>
                  <h4 className="text-lg font-semibold text-white mb-3">Skills Covered</h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedCert.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-3 py-1 bg-gray-800 text-gray-300 rounded text-sm"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="text-lg font-semibold text-white mb-3">Category</h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedCert.category.map((cat) => (
                      <span
                        key={cat}
                        className="px-3 py-1 bg-gray-800 text-gray-300 rounded text-sm"
                      >
                        {cat}
                      </span>
                    ))}
                  </div>
                </div>

                {selectedCert.credentialUrl ? (
                  <a
                    href={selectedCert.credentialUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center space-x-2 px-4 py-2 bg-white text-black rounded-lg font-medium hover:bg-gray-200 transition-colors focus:outline-none focus:ring-2 focus:ring-white"
                  >
                    <ExternalLink size={18} />
                    <span>Verify Certificate</span>
                  </a>
                ) : (
                  <div className="p-4 bg-yellow-900/30 border border-yellow-800 rounded-lg text-yellow-400 text-sm">
                    Certificate asset required for verification
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
