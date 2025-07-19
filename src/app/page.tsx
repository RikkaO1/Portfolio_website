"use client"
import { Navigation } from "../components/nav";
import { useEffect, useState } from "react";
import { Homepage } from "../components/home";
import { About } from "../components/about";
import { Projects } from "../components/projects";
import { Certificate } from "../components/certificate";
import { Skill } from "../components/skill";
import { Contact } from "../components/contact";

import { WelcomeAnimation } from "../components/WelcomeAnimation";

export default function Home() {
  const [activeSection, setActiveSection] = useState('home');
  const [showWelcome, setShowWelcome] = useState(true);

  useEffect(() => {
    const sections = ['home', 'about', 'projects', 'skill', 'certificate', 'contact'];

    const handleScroll = () => {
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;

          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="bg-main">
      {showWelcome && <WelcomeAnimation onComplete={() => setShowWelcome(false)} />}
      <div className="max-w-screen-xl mx-auto">
        <header className="fixed top-0 z-50 max-w-screen-xl mx-auto w-full flex items-center justify-end">
          <Navigation activeSection={activeSection} />
        </header>
        <main>
          <Homepage />
          <About />
          <Skill />
          <Projects />
          <Certificate />
          <Contact />
        </main>
      </div>
    </div>
  );
}
