'use client';

import { useState } from 'react';
import { Code, ExternalLink, Mail, Send, Phone, User } from 'lucide-react';
import { profile } from '@/data/profile';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Fallback: Use mailto for contact form submission
    const { name, email, subject, message } = formData;
    const mailtoLink = `mailto:${profile.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`
    )}`;
    
    window.location.href = mailtoLink;
    
    setIsSubmitting(false);
    setSubmitStatus('success');
    setFormData({ name: '', email: '', subject: '', message: '' });
    
    setTimeout(() => setSubmitStatus('idle'), 5000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section id="contact" className="py-24 bg-[#0A0A0A]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Let's Build Something Great</h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Have a project, product idea, or engineering challenge? Let's talk.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div>
            <div className="space-y-6">
              <a
                href={`mailto:${profile.email}`}
                className="flex items-center space-x-4 p-4 bg-gray-900/50 border border-gray-800 rounded-lg hover:border-gray-700 transition-colors group"
              >
                <div className="w-12 h-12 bg-gray-800 rounded-lg flex items-center justify-center group-hover:bg-gray-700 transition-colors">
                  <Mail className="text-white" size={24} />
                </div>
                <div>
                  <p className="text-white font-medium">Email Me</p>
                  <p className="text-gray-400 text-sm">{profile.email}</p>
                </div>
              </a>

              <a
                href="tel:+923039287727"
                className="flex items-center space-x-4 p-4 bg-gray-900/50 border border-gray-800 rounded-lg hover:border-gray-700 transition-colors group"
              >
                <div className="w-12 h-12 bg-gray-800 rounded-lg flex items-center justify-center group-hover:bg-gray-700 transition-colors">
                  <Phone className="text-white" size={24} />
                </div>
                <div>
                  <p className="text-white font-medium">Call Me</p>
                  <p className="text-gray-400 text-sm">0303-9287727</p>
                </div>
              </a>

              <a
                href={profile.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-4 p-4 bg-gray-900/50 border border-gray-800 rounded-lg hover:border-gray-700 transition-colors group"
              >
                <div className="w-12 h-12 bg-gray-800 rounded-lg flex items-center justify-center group-hover:bg-gray-700 transition-colors">
                  <ExternalLink className="text-white" size={24} />
                </div>
                <div>
                  <p className="text-white font-medium">LinkedIn</p>
                  <p className="text-gray-400 text-sm">Connect professionally</p>
                </div>
              </a>

              <a
                href={profile.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-4 p-4 bg-gray-900/50 border border-gray-800 rounded-lg hover:border-gray-700 transition-colors group"
              >
                <div className="w-12 h-12 bg-gray-800 rounded-lg flex items-center justify-center group-hover:bg-gray-700 transition-colors">
                  <Code className="text-white" size={24} />
                </div>
                <div>
                  <p className="text-white font-medium">GitHub</p>
                  <p className="text-gray-400 text-sm">View my repositories</p>
                </div>
              </a>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-gray-300 mb-2 text-sm">
                  Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-gray-900 border border-gray-800 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-gray-700 transition-colors"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-gray-300 mb-2 text-sm">
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-gray-900 border border-gray-800 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-gray-700 transition-colors"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-gray-300 mb-2 text-sm">
                  Subject *
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-gray-900 border border-gray-800 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-gray-700 transition-colors"
                  placeholder="Project inquiry"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-gray-300 mb-2 text-sm">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  maxLength={2000}
                  className="w-full px-4 py-3 bg-gray-900 border border-gray-800 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-gray-700 transition-colors resize-none"
                  placeholder="Tell me about your project..."
                />
                <p className="text-gray-500 text-xs mt-1 text-right">
                  {formData.message.length}/2000
                </p>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full px-8 py-3 bg-white text-black rounded-lg font-medium hover:bg-gray-200 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
              >
                {isSubmitting ? (
                  <>
                    <div className="w-5 h-5 border-2 border-black border-t-transparent rounded-full animate-spin" />
                    <span>Sending...</span>
                  </>
                ) : (
                  <>
                    <Send size={18} />
                    <span>Send Message</span>
                  </>
                )}
              </button>

              {submitStatus === 'success' && (
                <div className="p-4 bg-green-900/50 border border-green-800 rounded-lg text-green-400 text-sm">
                  Opening your email client to send the message...
                </div>
              )}

              {submitStatus === 'error' && (
                <div className="p-4 bg-red-900/50 border border-red-800 rounded-lg text-red-400 text-sm">
                  Failed to send message. Please try again or contact me directly via email.
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
