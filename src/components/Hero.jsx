import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  const [isHovered, setIsHovered] = useState(false);

  const defaultShadow = `
    1px 1px var(--primary-orange), 
    2px 2px var(--primary-orange), 
    3px 3px var(--primary-orange), 
    4px 4px var(--primary-orange), 
    5px 5px var(--primary-orange),
    6px 6px 0px rgba(0,0,0,0.5)
  `;

  const hoverShadow = `
    1px 1px #cc6e26, 
    2px 2px #cc6e26, 
    3px 3px #cc6e26, 
    4px 4px #cc6e26, 
    5px 5px #cc6e26,
    6px 6px 0px rgba(0,0,0,0.5)
  `;

  // Array of random box positions for background
  const backgroundBoxes = [
    { top: '10%', left: '5%', size: '60px', duration: 12 },
    { top: '15%', right: '10%', size: '100px', duration: 15 },
    { bottom: '20%', left: '15%', size: '80px', duration: 18 },
    { bottom: '30%', right: '25%', size: '120px', duration: 20 },
    { top: '50%', left: '80%', size: '40px', duration: 10 },
    { top: '70%', left: '10%', size: '90px', duration: 14 },
    { top: '40%', right: '5%', size: '50px', duration: 16 }
  ];

  const [logoText, setLogoText] = useState("");
  const fullLogoText = "CQC";

  React.useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setLogoText(fullLogoText.slice(0, i + 1));
      i++;
      if (i === fullLogoText.length) clearInterval(interval);
    }, 400); // Slower since it's only 3 letters
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="inicio" style={{
      minHeight: '70vh',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      textAlign: 'center',
      padding: '120px 5% 60px 5%',
      backgroundColor: 'var(--bg-black)',
      position: 'relative',
      overflow: 'hidden',
    }}>
      {/* Background Grid */}
      <div style={{
        position: 'absolute',
        width: '100%',
        height: '100%',
        backgroundImage: 'var(--grid-pattern)',
        backgroundSize: '40px 40px',
        opacity: 0.2,
        zIndex: 0
      }}></div>

      {/* Multiple Floating Boxes (Low Opacity) */}
      {backgroundBoxes.map((box, i) => (
        <motion.div
          key={i}
          animate={{
            y: [0, -40, 0],
            rotate: [0, 360, 0],
            opacity: [0.15, 0.35, 0.15]
          }}
          transition={{ duration: box.duration, repeat: Infinity, ease: "linear" }}
          style={{
            position: 'absolute',
            top: box.top,
            left: box.left,
            right: box.right,
            bottom: box.bottom,
            width: box.size,
            height: box.size,
            border: '1px solid var(--primary-orange)',
            boxShadow: '0 0 20px var(--primary-orange-glow)',
            zIndex: 1
          }}
        />
      ))}

      <div style={{ zIndex: 10, position: 'relative' }}>
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
        >
          <h1
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            style={{
              fontSize: 'clamp(60px, 15vw, 200px)',
              lineHeight: 1,
              margin: 0,
              cursor: 'default',
              transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
              color: isHovered ? 'var(--primary-orange)' : 'var(--text-white)',
              textShadow: isHovered ? hoverShadow : defaultShadow,
              fontFamily: 'Outfit',
              fontWeight: 900,
              letterSpacing: '-0.02em',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center'
            }}
          >
            {logoText}
            <motion.span
              animate={{ opacity: [0, 1, 0] }}
              transition={{ repeat: 4, duration: 0.8 }}
              style={{
                display: 'inline-block',
                width: 'clamp(5px, 2vw, 15px)',
                height: '0.8em',
                backgroundColor: isHovered ? 'var(--text-white)' : 'var(--primary-orange)',
                marginLeft: '10px',
                verticalAlign: 'middle'
              }}
            />
          </h1>
        </motion.div>

        <motion.p
          style={{
            fontSize: 'clamp(1rem, 3vw, 1.2rem)',
            maxWidth: '600px',
            margin: '20px auto',
            color: 'var(--text-gray)',
            fontWeight: 400,
            letterSpacing: '4px',
            textTransform: 'uppercase'
          }}
        >
          EN <span className="text-orange" style={{ fontWeight: 900 }}>CHIQUICODE</span> construimos experiencias digitales innovadoras que llevan tu negocio al siguiente nivel.
        </motion.p>

        <div style={{ marginTop: '30px' }}>
          <a href="#contacto" className="btn-street">
            Inicia tu proyecto
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
