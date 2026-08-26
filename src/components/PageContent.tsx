'use client';

import Hero from '@/components/sections/Hero';
import About from '@/components/sections/About';
import Experience from '@/components/sections/Experience';
import Projects from '@/components/sections/Projects';
import Skills from '@/components/sections/Skills';
import Certifications from '@/components/sections/Certifications';
import Achievements from '@/components/sections/Achievements';
import Education from '@/components/sections/Education';
import Services from '@/components/sections/Services';
import Contact from '@/components/sections/Contact';

export default function PageContent() {
  return (
    <>
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Skills />
      <Certifications />
      <Achievements />
      <Education />
      <Services />
      <Contact />
    </>
  );
}
