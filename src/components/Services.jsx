import React from 'react';
import { motion } from 'framer-motion';

const services = [
  {
    title: 'Desarrollo a la Medida',
    desc: 'Creamos soluciones digitales personalizadas, escalables y adaptadas a tus objetivos, utilizando tecnologías modernas para impulsar el crecimiento de tu negocio.',
    icon: '01'
  },
  {
    title: 'Soporte Técnico',
    desc: 'Brindamos soporte ágil y especializado para garantizar el correcto funcionamiento de tu infraestructura, minimizando tiempos de inactividad.',
    icon: '02'
  },
  {
    title: 'Cotizaciones',
    desc: 'Elaboramos presupuestos claros y detallados, ajustados a tus necesidades, para que tomes decisiones informadas sin sorpresas.',
    icon: '03'
  },
  {
    title: 'Mantenimiento',
    desc: 'Realizamos mantenimiento preventivo y correctivo para optimizar el rendimiento y prolongar la vida útil de tus equipos.',
    icon: '04'
  },
  {
    title: 'Auditorías',
    desc: 'Analizamos a fondo tus sistemas para detectar riesgos, mejorar la seguridad y optimizar el desempeño de tu infraestructura tecnológica.',
    icon: '05'
  },
  {
    title: 'Consultoría Tech',
    desc: 'Te guiamos estratégicamente en la adopción de tecnología para transformar y hacer más eficiente tu negocio en el entorno digital.',
    icon: '06'
  }
];

const Services = ({ onInquiry }) => {
  return (
    <section id="servicios" className="section-padding">
      <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
        <motion.h2
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="font-heading"
          style={{ fontSize: 'clamp(2.5rem, 8vw, 4rem)', marginBottom: '60px' }}
        >
          Nuestros <span className="text-orange">Servicios</span>
        </motion.h2>

        <div className="grid-container">
          {services.map((s, idx) => (
            <motion.div
              key={idx}
              whileHover={{ y: -10, boxShadow: 'var(--shadow-md)', borderColor: 'var(--primary-orange)' }}
              onClick={() => onInquiry && onInquiry(s)}
              className="street-border"
              style={{
                padding: '40px',
                backgroundColor: 'var(--bg-dark-gray)',
                position: 'relative',
                overflow: 'hidden',
                borderColor: 'var(--border-color)',
                boxShadow: 'var(--shadow-sm)',
                cursor: 'pointer'
              }}
            >
              <div style={{
                fontSize: '5rem',
                fontWeight: 900,
                opacity: 0.1,
                position: 'absolute',
                top: '10px',
                right: '10px',
                fontFamily: 'Outfit',
                color: 'var(--text-white)'
              }}>
                {s.icon}
              </div>
              <h3 style={{ fontSize: '1.5rem', marginBottom: '15px', color: 'var(--text-white)' }}>{s.title}</h3>
              <p style={{ color: 'var(--text-gray)', lineHeight: 1.7 }}>{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
