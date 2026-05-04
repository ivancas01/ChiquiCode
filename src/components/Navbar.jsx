import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = ({ toggleTheme, theme }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('inicio');

  const menuItems = [
    { name: 'Inicio', id: 'inicio' },
    { name: 'Servicios', id: 'servicios' },
    { name: 'Proyectos', id: 'proyectos' },
    { name: 'Nosotros', id: 'nosotros' },
    { name: 'Contacto', id: 'contacto' }
  ];

  useEffect(() => {
    const handleScroll = () => {
      const sections = menuItems.map(item => item.id);
      const scrollPosition = window.scrollY + 150; // Offset for better detection

      for (const sectionId of sections) {
        const element = document.getElementById(sectionId);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(sectionId);
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      style={{
        position: 'fixed',
        top: 0,
        width: '100%',
        zIndex: 1000,
        backgroundColor: theme === 'dark' ? 'rgba(0,0,0,0.9)' : 'rgba(255,255,255,0.9)',
        backdropFilter: 'blur(10px)',
        borderBottom: '2px solid var(--primary-orange)',
        padding: '15px 5%'
      }}
    >
      <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        maxWidth: '1400px',
        margin: '0 auto'
      }}>
        <a href="#inicio" style={{ textDecoration: 'none' }}>
          <div className="font-heading" style={{
            fontSize: '1.5rem',
            color: 'var(--primary-orange)',
            zIndex: 1100
          }}>
            CHIQUICODE
          </div>
        </a>

        <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
          {/* Desktop Menu */}
          <ul className="desktop-menu" style={{
            display: 'flex',
            gap: '25px',
            listStyle: 'none',
            margin: 0,
            padding: 0,
          }}>
            {menuItems.map((item) => (
              <li key={item.id} className="hide-mobile">
                <motion.a
                  href={`#${item.id}`}
                  whileHover={{ y: -2 }}
                  style={{
                    color: activeSection === item.id ? 'var(--primary-orange)' : 'var(--text-white)',
                    textDecoration: 'none',
                    textTransform: 'uppercase',
                    fontSize: '0.8rem',
                    fontWeight: 900,
                    position: 'relative',
                    transition: 'color 0.3s ease'
                  }}
                >
                  {item.name}
                  {activeSection === item.id && (
                    <motion.div
                      layoutId="activeTab"
                      style={{
                        position: 'absolute',
                        bottom: '-5px',
                        left: 0,
                        width: '100%',
                        height: '2px',
                        backgroundColor: 'var(--primary-orange)'
                      }}
                    />
                  )}
                </motion.a>
              </li>
            ))}
          </ul>

          <motion.button
            onClick={toggleTheme}
            whileTap={{ scale: 0.9 }}
            style={{
              backgroundColor: 'var(--text-white)',
              color: 'var(--bg-black)',
              border: 'none',
              padding: '8px 12px',
              fontWeight: 900,
              fontSize: '0.7rem',
              cursor: 'pointer',
              zIndex: 1100
            }}
          >
            {theme === 'dark' ? 'CLARO' : 'OSCURO'}
          </motion.button>

          {/* Hamburger Icon */}
          <div
            className="mobile-toggle"
            onClick={() => setIsOpen(!isOpen)}
            style={{
              cursor: 'pointer',
              display: 'none',
              flexDirection: 'column',
              gap: '6px',
              zIndex: 1100
            }}
          >
            <div style={{ width: '25px', height: '3px', backgroundColor: 'var(--primary-orange)' }} />
            <div style={{ width: '25px', height: '3px', backgroundColor: 'var(--primary-orange)' }} />
            <div style={{ width: '25px', height: '3px', backgroundColor: 'var(--primary-orange)' }} />
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'tween' }}
            style={{
              position: 'fixed',
              top: 0,
              right: 0,
              width: '100%',
              height: '100vh',
              backgroundColor: 'var(--bg-black)',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              gap: '40px',
              zIndex: 1050
            }}
          >
            {menuItems.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={() => setIsOpen(false)}
                style={{
                  color: activeSection === item.id ? 'var(--primary-orange)' : 'var(--text-white)',
                  fontSize: '2rem',
                  fontWeight: 900,
                  textDecoration: 'none',
                  textTransform: 'uppercase',
                  fontFamily: 'Outfit'
                }}
              >
                {item.name}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      <style dangerouslySetInnerHTML={{
        __html: `
        @media (max-width: 768px) {
          .hide-mobile { display: none; }
          .mobile-toggle { display: flex !important; }
        }
      `}} />
    </motion.nav>
  );
};

export default Navbar;
