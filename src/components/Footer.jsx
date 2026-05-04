import React from 'react';

const Footer = () => {
  return (
    <footer style={{
      padding: '60px 5%',
      backgroundColor: '#000',
      borderTop: '1px solid #333',
      textAlign: 'center'
    }}>
      <div className="font-heading" style={{ fontSize: '2rem', color: 'var(--primary-orange)', marginBottom: '20px' }}>
        CHIQUICODE
      </div>
      <p style={{ color: '#666', fontSize: '0.9rem', marginBottom: '40px' }}>
        © {new Date().getFullYear()} CHIQUICODE. TODOS LOS DERECHOS RESERVADOS. <br />
        HECHO DESDE CHIQUINQUIRÁ, BOYACÁ.
      </p>
      <div style={{ display: 'flex', justifyContent: 'center', gap: '30px', flexWrap: 'wrap' }}>
        {[
          { name: 'INSTAGRAM', url: 'https://www.instagram.com/chiquicode_/' },
        ].map(social => (
          <a
            key={social.name}
            href={social.url}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              color: 'white',
              textDecoration: 'none',
              fontSize: '0.8rem',
              fontWeight: 700,
              letterSpacing: '1px'
            }}
            onMouseOver={(e) => e.target.style.color = 'var(--primary-orange)'}
            onMouseOut={(e) => e.target.style.color = 'white'}
          >
            {social.name}
          </a>
        ))}
      </div>
    </footer>
  );
};

export default Footer;
