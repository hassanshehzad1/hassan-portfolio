'use client';

import { useState, useEffect } from 'react';
import { Code, ExternalLink, FileText, Lock, X, Award } from 'lucide-react';
import { projects, projectCategories } from '@/data/projects';

export default function Projects() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);

  const filteredProjects = projects.filter((project) => {
    const matchesCategory =
      selectedCategory === 'All' || project.category.includes(selectedCategory);
    const matchesSearch =
      project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.shortDescription.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.technologies.some((tech) =>
        tech.toLowerCase().includes(searchQuery.toLowerCase())
      ) ||
      project.category.some((cat) =>
        cat.toLowerCase().includes(searchQuery.toLowerCase())
      );
    return matchesCategory && matchesSearch;
  });

  const isClientProject = (project: typeof projects[0]) => {
    return project.clientProject === true;
  };

  const resetFilters = () => {
    setSelectedCategory('All');
    setSearchQuery('');
  };

  // Handle Escape key to close modal
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && selectedProject) {
        setSelectedProject(null);
      }
    };
    window.addEventListener('keydown', handleEscape);
    return () => window.removeEventListener('keydown', handleEscape);
  }, [selectedProject]);

  // Prevent body scroll when modal is open
  useEffect(() => {
    if (selectedProject) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [selectedProject]);

  return (
    <section id="projects" className="py-24 bg-[#0A0A0A]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Projects</h2>
          <div className="w-20 h-1 bg-white" />
        </div>

        {/* Filters */}
        <div className="mb-8">
          <div className="flex flex-wrap gap-2 mb-6">
            {projectCategories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-lg text-sm transition-colors whitespace-nowrap focus:outline-none focus:ring-2 focus:ring-white ${
                  selectedCategory === category
                    ? 'bg-white text-black'
                    : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                }`}
              >
                {category}
              </button>
            ))}
            {(selectedCategory !== 'All' || searchQuery !== '') && (
              <button
                onClick={resetFilters}
                className="px-4 py-2 rounded-lg text-sm transition-colors whitespace-nowrap focus:outline-none focus:ring-2 focus:ring-white bg-red-600 text-white hover:bg-red-700"
              >
                Reset Filters
              </button>
            )}
          </div>

          <input
            type="text"
            placeholder="Search projects..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full px-4 py-3 bg-gray-900 border border-gray-800 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white focus:border-transparent"
            aria-label="Search projects"
          />
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="bg-gray-900/50 border border-gray-800 rounded-lg overflow-hidden hover:border-gray-700 transition-colors group cursor-pointer focus:outline-none focus:ring-2 focus:ring-white"
              onClick={() => setSelectedProject(project)}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  setSelectedProject(project);
                }
              }}
              tabIndex={0}
              role="button"
              aria-label={`View details for ${project.title}`}
            >
              <div className="aspect-video bg-gray-800 relative overflow-hidden">
                {project.featured && (
                  <div className="absolute top-4 left-4 px-3 py-1 bg-white text-black rounded-full text-xs font-medium z-10">
                    Featured
                  </div>
                )}
                {isClientProject(project) && (
                  <div className="absolute top-4 right-4 px-3 py-1 bg-blue-600 text-white rounded-full text-xs font-medium z-10">
                    Client Project
                  </div>
                )}
                {project.image ? (
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                ) : (
                  <div className="absolute inset-0 flex items-center justify-center text-gray-600">
                    <Code size={48} />
                  </div>
                )}
              </div>

              <div className="p-6">
                <h3 className="text-xl font-semibold text-white mb-2">{project.title}</h3>
                <p className="text-gray-400 text-sm mb-4">{project.shortDescription}</p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.slice(0, 4).map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 bg-gray-800 text-gray-400 rounded text-xs"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 4 && (
                    <span className="px-2 py-1 bg-gray-800 text-gray-400 rounded text-xs">
                      +{project.technologies.length - 4}
                    </span>
                  )}
                </div>

                <div className="flex items-center space-x-4">
                  {project.github ? (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="flex items-center space-x-2 text-gray-400 hover:text-white transition-colors text-sm focus:outline-none focus:ring-2 focus:ring-white rounded"
                      aria-label={`View ${project.title} on GitHub`}
                    >
                      <Code size={16} />
                      <span>GitHub</span>
                    </a>
                  ) : (
                    <span className="flex items-center space-x-2 text-gray-500 text-sm">
                      <Lock size={16} />
                      <span>Private</span>
                    </span>
                  )}
                  {project.liveUrl && project.liveUrl !== '' && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="flex items-center space-x-2 text-gray-400 hover:text-white transition-colors text-sm focus:outline-none focus:ring-2 focus:ring-white rounded"
                      aria-label={`View live demo of ${project.title}`}
                    >
                      <ExternalLink size={16} />
                      <span>Live Demo</span>
                    </a>
                  )}
                  {project.certificateUrl && project.certificateUrl !== '' && (
                    <a
                      href={project.certificateUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="flex items-center space-x-2 text-gray-400 hover:text-white transition-colors text-sm focus:outline-none focus:ring-2 focus:ring-white rounded"
                      aria-label={`View certificate for ${project.title}`}
                    >
                      <Award size={16} />
                      <span>Certificate</span>
                    </a>
                  )}
                  {project.caseStudy && (
                    <a
                      href={`/projects/${project.slug}`}
                      onClick={(e) => e.stopPropagation()}
                      className="flex items-center space-x-2 text-gray-400 hover:text-white transition-colors text-sm focus:outline-none focus:ring-2 focus:ring-white rounded"
                      aria-label={`View case study for ${project.title}`}
                    >
                      <FileText size={16} />
                      <span>Case Study</span>
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredProjects.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 mb-4">No projects found matching your criteria.</p>
            <button
              onClick={resetFilters}
              className="px-6 py-2 bg-white text-black rounded-lg font-medium hover:bg-gray-200 transition-colors"
            >
              Reset Filters
            </button>
          </div>
        )}
      </div>

      {/* Project Detail Modal */}
      {selectedProject && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
          onClick={() => setSelectedProject(null)}
          role="dialog"
          aria-modal="true"
          aria-labelledby="project-modal-title"
        >
          <div 
            className="bg-gray-900 border border-gray-800 rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="p-6">
              <div className="flex items-start justify-between mb-4">
                <div>
                  {selectedProject.featured && (
                    <span className="inline-block px-3 py-1 bg-white text-black rounded-full text-xs font-medium mb-2">
                      Featured
                    </span>
                  )}
                  {isClientProject(selectedProject) && (
                    <span className="inline-block px-3 py-1 bg-blue-600 text-white rounded-full text-xs font-medium mb-2 ml-2">
                      Client Project
                    </span>
                  )}
                  <h3 id="project-modal-title" className="text-2xl font-bold text-white">{selectedProject.title}</h3>
                  {selectedProject.year && (
                    <p className="text-gray-500 text-sm mt-1">{selectedProject.year}</p>
                  )}
                  {selectedProject.role && (
                    <p className="text-gray-400 text-sm">{selectedProject.role}</p>
                  )}
                </div>
                <button
                  onClick={() => setSelectedProject(null)}
                  className="p-2 text-gray-400 hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-white rounded"
                  aria-label="Close modal"
                >
                  <X size={24} />
                </button>
              </div>

              {selectedProject.image && (
                <div className="mb-6 rounded-lg overflow-hidden">
                  <img
                    src={selectedProject.image}
                    alt={selectedProject.title}
                    className="w-full h-auto"
                  />
                </div>
              )}

              <p className="text-gray-300 mb-6">{selectedProject.description}</p>

              <div className="mb-6">
                <h4 className="text-lg font-semibold text-white mb-3">Technologies</h4>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-gray-800 text-gray-300 rounded text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mb-6">
                <h4 className="text-lg font-semibold text-white mb-3">Category</h4>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.category.map((cat) => (
                    <span
                      key={cat}
                      className="px-3 py-1 bg-gray-800 text-gray-300 rounded text-sm"
                    >
                      {cat}
                    </span>
                  ))}
                </div>
              </div>

              {selectedProject.caseStudyData && (
                <>
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-white mb-3">Problem</h4>
                    <p className="text-gray-400">{selectedProject.caseStudyData.problem}</p>
                  </div>

                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-white mb-3">Solution</h4>
                    <p className="text-gray-400">{selectedProject.caseStudyData.solution}</p>
                  </div>

                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-white mb-3">Architecture</h4>
                    <p className="text-gray-400">{selectedProject.caseStudyData.architecture}</p>
                  </div>

                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-white mb-3">Key Features</h4>
                    <ul className="space-y-2">
                      {selectedProject.caseStudyData.keyFeatures.map((feature, index) => (
                        <li key={index} className="text-gray-400 flex items-start">
                          <span className="text-white mr-2">•</span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </>
              )}

              <div className="flex gap-4 pt-4 border-t border-gray-800">
                {selectedProject.github ? (
                  <a
                    href={selectedProject.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 px-4 py-2 bg-white text-black rounded-lg font-medium hover:bg-gray-200 transition-colors focus:outline-none focus:ring-2 focus:ring-white"
                  >
                    <Code size={18} />
                    <span>View on GitHub</span>
                  </a>
                ) : (
                  <span className="flex items-center space-x-2 px-4 py-2 bg-gray-800 text-gray-400 rounded-lg">
                    <Lock size={18} />
                    <span>Client Project — Private</span>
                  </span>
                )}
                {selectedProject.liveUrl && selectedProject.liveUrl !== '' && (
                  <a
                    href={selectedProject.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 px-4 py-2 bg-gray-800 text-white rounded-lg font-medium hover:bg-gray-700 transition-colors border border-gray-700 focus:outline-none focus:ring-2 focus:ring-white"
                  >
                    <ExternalLink size={18} />
                    <span>Live Demo</span>
                  </a>
                )}
                {selectedProject.certificateUrl && selectedProject.certificateUrl !== '' && (
                  <a
                    href={selectedProject.certificateUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 px-4 py-2 bg-gray-800 text-white rounded-lg font-medium hover:bg-gray-700 transition-colors border border-gray-700 focus:outline-none focus:ring-2 focus:ring-white"
                  >
                    <Award size={18} />
                    <span>View Certificate</span>
                  </a>
                )}
                {selectedProject.caseStudy && (
                  <a
                    href={`/projects/${selectedProject.slug}`}
                    className="flex items-center space-x-2 px-4 py-2 bg-gray-800 text-white rounded-lg font-medium hover:bg-gray-700 transition-colors border border-gray-700 focus:outline-none focus:ring-2 focus:ring-white"
                  >
                    <FileText size={18} />
                    <span>View Case Study</span>
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
