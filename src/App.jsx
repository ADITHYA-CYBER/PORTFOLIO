import { useEffect, useState } from 'react';
import { portfolioData } from './data/portfolioData';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Certifications from './components/Certifications';
import Education from './components/Education';
import Contact from './components/Contact';
import About from './components/About';
import Methodology from './components/Methodology';

export default function App() {
  const [theme, setTheme] = useState(() => localStorage.getItem('theme') || 'dark');
  useEffect(() => { document.documentElement.dataset.theme = theme; localStorage.setItem('theme', theme); }, [theme]);
  return <>
    <Navbar data={portfolioData} theme={theme} onToggleTheme={() => setTheme(t => t === 'dark' ? 'light' : 'dark')} />
    <main>
      <Hero data={portfolioData} />
      <About data={portfolioData} />
      <Skills data={portfolioData} />
      <Methodology data={portfolioData} />
      <Experience data={portfolioData} />
      <Projects data={portfolioData} />
      <Certifications data={portfolioData} />
      <Education data={portfolioData} />
      <Contact data={portfolioData} />
     
    </main>
  </>;
}
