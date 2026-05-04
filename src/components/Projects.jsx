import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

// Import images
import urbanFlowImg from '../assets/projects/urban-flow.png';
import cyberCoreImg from '../assets/projects/cyber-core.png';
import neonGridImg from '../assets/projects/neon-grid.png';

const projects = [
  {
    id: 1,
    name: 'SISTEMA DE ALQUILER',
    tag: 'APP DE ESCRITORIO',
    year: '2024',
    description: 'Sistema de alquiler de vestidos con gran gestion de inventario, clientes y reservas. Ademas de un sistema de registro de pagos, control de ingresos y gestion y control de actividad de los usuarios.',
    image: urbanFlowImg
  },
  {
    id: 2,
    name: 'SISTEMA OPERATIVO Y GESTOR DE RESTAURANTES',
    tag: 'WEB APP',
    year: '2026',
    description: 'Sistema de gestion de restaurantes, creado para optimizar la experiencia de los usuarios y la gestion de los restaurantes. Cuenta con un sistema de registro de pagos, control de ingresos y gestion y control de actividad de los usuarios, Ademas, el sistema tambien se encarga de gestionar la infraestructura del restaurante, los producctos, reservas y personal.',
    image: cyberCoreImg
  },
  {
    id: 3,
    name: 'SISTEMA DE INVENTARIOS, VENTA Y ALQUILER',
    tag: 'WEB APP',
    year: '2026',
    description: 'Sistema de inventarios, venta y alquiler creado para optimizar la experiencia de los usuarios y la gestion de los inventarios. Cuenta con un sistema de registro de pagos, control de ingresos y gestion y control de actividad de los usuarios, Ademas, el sistema tambien se encarga de gestionar la infraestructura del inventario, los producctos, reservas y personal.',
    image: cyberCoreImg
  },
];

const Projects = ({ onInquiry }) => {
  const [selectedProject, setSelectedProject] = useState(null);

  const handleLearnMore = () => {
    if (onInquiry && selectedProject) {
      onInquiry(selectedProject);
      setSelectedProject(null); // Close modal after clicking
    }
  };

  return (
    <section id="proyectos" className="section-padding" style={{ backgroundColor: 'var(--bg-black)' }}>
      <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
        <h2 className="font-heading" style={{ fontSize: 'clamp(2.5rem, 8vw, 4rem)', marginBottom: '50px', textAlign: 'right' }}>
          Proyectos <span className="text-orange">Destacados</span>
        </h2>

        <div style={{ display: 'flex', flexDirection: 'column' }}>
          {projects.map((p) => (
            <div key={p.id} style={{ borderBottom: '1px solid var(--border-color)' }}>
              <motion.div
                onClick={() => setSelectedProject(p)}
                whileHover={{ backgroundColor: 'var(--primary-orange)', color: '#000', x: 20 }}
                transition={{ type: "tween", ease: "circOut", duration: 0.25 }}
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  padding: '40px 20px',
                  cursor: 'pointer',
                  transition: 'none'
                }}
              >
                <div>
                  <span style={{ fontSize: '0.8rem', fontWeight: 800, opacity: 0.6 }}>{p.tag}</span>
                  <h3 style={{ fontSize: 'clamp(1.5rem, 5vw, 2.5rem)', marginTop: '5px' }}>{p.name}</h3>
                </div>
                <div className="font-heading" style={{ fontSize: 'clamp(1.5rem, 5vw, 3rem)' }}>
                  {p.year}
                </div>
              </motion.div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal View */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            style={{
              position: 'fixed',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              backgroundColor: 'rgba(0,0,0,0.95)',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              zIndex: 2000,
              padding: '20px',
              backdropFilter: 'blur(10px)'
            }}
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              style={{
                backgroundColor: 'var(--bg-black)',
                border: '2px solid var(--primary-orange)',
                width: '100%',
                maxWidth: '1100px',
                maxHeight: '85vh',
                overflowY: 'auto',
                position: 'relative',
                boxShadow: '30px 30px 0px rgba(0,0,0,0.5)'
              }}
            >
              {/* Elegant Close Button */}
              <button
                onClick={() => setSelectedProject(null)}
                style={{
                  position: 'absolute',
                  top: '30px',
                  right: '30px',
                  backgroundColor: 'var(--primary-orange)',
                  border: 'none',
                  color: '#000',
                  width: '40px',
                  height: '40px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  cursor: 'pointer',
                  zIndex: 20,
                  transition: 'all 0.3s ease'
                }}
                onMouseOver={(e) => e.target.style.transform = 'scale(1.1)'}
                onMouseOut={(e) => e.target.style.transform = 'scale(1)'}
              >
                <X size={24} strokeWidth={3} />
              </button>

              <div style={{ padding: 'clamp(40px, 8vw, 80px)' }}>
                <div style={{
                  display: 'grid',
                  gridTemplateColumns: '1fr',
                  gap: '40px',
                  alignItems: 'start'
                }} className="project-modal-grid">
                  {/* Info Column */}
                  <div style={{ zIndex: 1 }}>
                    <span style={{ color: 'var(--primary-orange)', fontWeight: 900, fontSize: '0.8rem', letterSpacing: '4px' }}>
                      {selectedProject.tag} / {selectedProject.year}
                    </span>
                    <h3 className="font-heading" style={{ fontSize: 'clamp(2rem, 5vw, 3.8rem)', lineHeight: 0.9, marginTop: '15px', marginBottom: '30px', wordBreak: 'break-word' }}>
                      {selectedProject.name}
                    </h3>
                    <p style={{
                      fontSize: 'clamp(1rem, 1.5vw, 1.15rem)',
                      lineHeight: '1.7',
                      color: 'var(--text-gray)',
                      marginBottom: '40px',
                      paddingLeft: '25px',
                      borderLeft: '4px solid var(--primary-orange)',
                      maxWidth: '600px'
                    }}>
                      {selectedProject.description}
                    </p>

                    <button
                      className="btn-street"
                      onClick={handleLearnMore}
                      style={{ width: 'auto', padding: '18px 36px', fontSize: '0.9rem' }}
                    >
                      Saber más acerca del proyecto
                    </button>
                  </div>

                  {/* Image Column */}
                  <div style={{
                    border: '2px solid #222',
                    padding: '10px',
                    backgroundColor: '#050505',
                    position: 'relative',
                    boxShadow: '0 0 30px rgba(255,140,51,0.05)',
                    alignSelf: 'center'
                  }}>
                    <img
                      src={selectedProject.image}
                      alt={selectedProject.name}
                      style={{
                        width: '100%',
                        height: 'auto',
                        display: 'block',
                        objectFit: 'cover'
                      }}
                    />
                  </div>
                </div>

                <style dangerouslySetInnerHTML={{
                  __html: `
                  @media (min-width: 992px) {
                    .project-modal-grid {
                      grid-template-columns: 1.2fr 1fr !important;
                      gap: 80px !important;
                    }
                  }
                `}} />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Projects;
