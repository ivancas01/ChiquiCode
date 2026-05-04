import React, { useState, useEffect } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Clients from './components/Clients'
import Services from './components/Services'
import Projects from './components/Projects'
import AboutUs from './components/AboutUs'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem('theme') || 'dark';
  });

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => prev === 'dark' ? 'light' : 'dark');
  };

  const [contactPreload, setContactPreload] = useState(null);

  const handleInquiry = (data, type = 'proyecto') => {
    const isService = type === 'servicio';
    setContactPreload({
      motivo: isService ? `SERVICIO: ${data.title}` : `CONSULTA: ${data.name}`,
      mensaje: isService 
        ? `Hola ChiquiCode, me gustaría solicitar información detallada sobre el servicio de "${data.title}".`
        : `Hola ChiquiCode, me gustaría obtener más información sobre el proyecto "${data.name}". Estoy interesado en...`
    });
    
    // Jump to contact section
    const contactSection = document.getElementById('contacto');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="app-container">
      <Navbar toggleTheme={toggleTheme} theme={theme} />
      <main>
        <Hero />
        <Clients />
        <Services onInquiry={(data) => handleInquiry(data, 'servicio')} />
        <Projects onInquiry={(data) => handleInquiry(data, 'proyecto')} />
        <AboutUs />
        <Contact preloadData={contactPreload} />
      </main>
      <Footer />
    </div>
  )
}

export default App
