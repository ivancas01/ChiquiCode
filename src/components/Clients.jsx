import React from 'react';
import { motion } from 'framer-motion';

const clients = [
  'ALQUILER Y VENTA DE VESTIDOS EL SOL', 'AUTOCAR2000', 'VIDALPE',
];

const Clients = () => {
  // Repeat the list many times to ensure it fills the screen and allows for a seamless loop
  const duplicatedClients = [...clients, ...clients, ...clients, ...clients, ...clients, ...clients];

  return (
    <section className="section-padding" style={{
      borderTop: '1px solid var(--border-color)',
      borderBottom: '1px solid var(--border-color)',
      overflow: 'hidden',
      padding: '60px 0'
    }}>
      <div style={{ maxWidth: '1400px', margin: '0 auto', marginBottom: '40px', padding: '0 5%' }}>
        <p style={{
          textAlign: 'center',
          fontSize: '0.8rem',
          fontWeight: 900,
          letterSpacing: '3px',
          color: 'var(--text-gray)',
          textTransform: 'uppercase'
        }}>
          Empresas que confían en nosotros
        </p>
      </div>

      <div style={{ position: 'relative', width: '100%' }}>
        <motion.div
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 90, // Adjusted for a perfect balance between calm and motion
              ease: "linear"
            }
          }}
          style={{
            display: 'flex',
            gap: '100px',
            whiteSpace: 'nowrap',
            width: 'fit-content'
          }}
        >
          {duplicatedClients.map((client, idx) => (
            <div
              key={idx}
              style={{
                fontSize: '1.8rem',
                fontWeight: 900,
                color: 'var(--text-white)',
                fontFamily: 'Outfit',
                letterSpacing: '-1px',
                opacity: 0.6,
                flexShrink: 0
              }}
            >
              {client}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Clients;
