import { notFound } from 'next/navigation';
import { projects } from '@/data/projects';
import { Code, ExternalLink, ArrowLeft, Calendar, Building2, Layers } from 'lucide-react';
import Link from 'next/link';

export async function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export default function ProjectDetail({ params }: { params: { slug: string } }) {
  const project = projects.find((p) => p.slug === params.slug);

  if (!project) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-black">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Link href="/" className="text-xl font-bold text-white hover:text-gray-300 transition-colors">
              HS
            </Link>
            <Link
              href="/#projects"
              className="flex items-center space-x-2 text-gray-300 hover:text-white transition-colors"
            >
              <ArrowLeft size={18} />
              <span>Back to Projects</span>
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="inline-flex items-center space-x-2 px-4 py-2 bg-gray-800/50 rounded-full border border-gray-700 mb-6">
            <span className="w-2 h-2 bg-green-500 rounded-full" />
            <span className="text-gray-300 text-sm">{project.clientProject ? 'Client Project' : 'Personal Project'}</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
            {project.title}
          </h1>

          <p className="text-xl text-gray-400 max-w-3xl mb-8">
            {project.description}
          </p>

          <div className="flex flex-wrap gap-4 mb-8">
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 px-6 py-3 bg-white text-black rounded-lg font-medium hover:bg-gray-200 transition-colors"
              >
                <Code size={18} />
                <span>View on GitHub</span>
              </a>
            )}
            {project.liveUrl && project.liveUrl !== '#TODO: Add live demo URL' && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 px-6 py-3 bg-gray-800 text-white rounded-lg font-medium hover:bg-gray-700 transition-colors border border-gray-700"
              >
                <ExternalLink size={18} />
                <span>Live Demo</span>
              </a>
            )}
          </div>

          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="px-3 py-1 bg-gray-800 text-gray-300 rounded-full text-sm"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Project Details */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-[#0A0A0A]">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
            <div className="bg-gray-900/50 border border-gray-800 rounded-lg p-6">
              <div className="flex items-center space-x-3 mb-4">
                <Calendar className="text-gray-400" size={20} />
                <h3 className="text-white font-semibold">Year</h3>
              </div>
              <p className="text-gray-400">{project.year}</p>
            </div>

            <div className="bg-gray-900/50 border border-gray-800 rounded-lg p-6">
              <div className="flex items-center space-x-3 mb-4">
                <Building2 className="text-gray-400" size={20} />
                <h3 className="text-white font-semibold">Role</h3>
              </div>
              <p className="text-gray-400">{project.role}</p>
            </div>

            <div className="bg-gray-900/50 border border-gray-800 rounded-lg p-6">
              <div className="flex items-center space-x-3 mb-4">
                <Layers className="text-gray-400" size={20} />
                <h3 className="text-white font-semibold">Category</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {project.category.map((cat) => (
                  <span key={cat} className="text-gray-400 text-sm">
                    {cat}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Description */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-6">About This Project</h2>
            <p className="text-gray-400 text-lg leading-relaxed">
              {project.description}
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-black">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Interested in this project?</h2>
          <p className="text-gray-400 mb-8">
            Let's discuss how I can help you build similar solutions for your business.
          </p>
          <Link
            href="/#contact"
            className="inline-flex items-center space-x-2 px-8 py-3 bg-white text-black rounded-lg font-medium hover:bg-gray-200 transition-colors"
          >
            <span>Get in Touch</span>
            <ArrowLeft size={18} className="rotate-180" />
          </Link>
        </div>
      </section>
    </div>
  );
}