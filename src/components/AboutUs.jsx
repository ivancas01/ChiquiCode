import React from 'react';
import { motion } from 'framer-motion';

const AboutUs = () => {
  return (
    <section id="nosotros" className="section-padding" style={{ position: 'relative' }}>
      <div className="about-grid" style={{
        maxWidth: '1400px',
        margin: '0 auto',
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
        gap: '60px',
        alignItems: 'center'
      }}>
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="street-border-orange"
          style={{
            height: 'clamp(300px, 50vh, 600px)',
            position: 'relative',
            overflow: 'hidden',
            backgroundColor: 'var(--bg-dark-gray)',
            boxShadow: 'var(--shadow-lg)'
          }}
        >
          <motion.div
            animate={{ x: [0, -100, 0] }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            style={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%) rotate(-15deg)',
              fontSize: 'clamp(8rem, 20vw, 15rem)',
              fontWeight: 900,
              color: 'var(--primary-orange)',
              opacity: 0.05,
              whiteSpace: 'nowrap'
            }}
          >
            CHIQUICODE CHIQUICODE CHIQUICODE CHIQUICODE CHIQUICODE
          </motion.div>

          <div style={{
            position: 'absolute',
            padding: '40px',
            bottom: 0,
            left: 0
          }}>
            <motion.span
              style={{ fontSize: 'clamp(4rem, 10vw, 6rem)', fontWeight: 900, color: 'var(--primary-orange)', display: 'block' }}
            >
              CQC
            </motion.span>
          </div>
        </motion.div>

        <div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-heading"
            style={{ fontSize: 'clamp(2.2rem, 6vw, 4.5rem)', marginBottom: '20px', lineHeight: 1 }}
          >
            ACERCA DE <span className="text-orange">CHIQUICODE</span>
          </motion.h2>

          <p style={{ fontSize: 'clamp(1rem, 4vw, 1.3rem)', lineHeight: 1.8, color: 'var(--text-gray)', marginBottom: '30px' }}>
            En ChiquiCode nacemos inspirados por la fuerza emprendedora de Chiquinquirá, Boyacá, y llevamos ese espíritu a cada proyecto. Nuestro nombre refleja nuestra esencia: desarrollos ágiles en tiempos “chiquis”, con una ejecución precisa y altos estándares de calidad. Creamos soluciones digitales a la medida, combinando tecnología moderna y visión estratégica para impulsar el crecimiento de nuestros clientes, convirtiéndonos en un aliado confiable en su evolución digital.
          </p>

          <div style={{ marginTop: '40px', display: 'flex', gap: '40px', flexWrap: 'wrap' }}>
            <div>
              <div className="text-orange" style={{ fontSize: '2.5rem', fontWeight: 900 }}>100%</div>
              <div style={{ textTransform: 'uppercase', fontSize: '0.8rem', fontWeight: 800 }}>Eficacia</div>
            </div>
            <div>
              <div className="text-orange" style={{ fontSize: '2.5rem', fontWeight: 900 }}>MIN</div>
              <div style={{ textTransform: 'uppercase', fontSize: '0.8rem', fontWeight: 800 }}>Tiempos</div>
            </div>
            <div>
              <div className="text-orange" style={{ fontSize: '2.5rem', fontWeight: 900 }}>+10</div>
              <div style={{ textTransform: 'uppercase', fontSize: '0.8rem', fontWeight: 800 }}>AÑOS DE EXPERIENCIA CONJUNTA</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
