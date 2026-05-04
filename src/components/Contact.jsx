import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Send } from 'lucide-react';

const WhatsAppIcon = ({ size = 24, color = "currentColor" }) => (
  <svg
    viewBox="0 0 24 24"
    width={size}
    height={size}
    fill={color}
  >
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
);

const Contact = ({ preloadData }) => {
  const [formData, setFormData] = useState({
    nombre: '',
    telefono: '',
    email: '',
    motivo: '',
    mensaje: ''
  });

  const [showSuccess, setShowSuccess] = useState(false);

  // Auto-fill form when preloadData changes
  React.useEffect(() => {
    if (preloadData) {
      setFormData(prev => ({
        ...prev,
        motivo: preloadData.motivo || prev.motivo,
        mensaje: preloadData.mensaje || prev.mensaje
      }));
    }
  }, [preloadData]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { nombre, telefono, email, motivo, mensaje } = formData;

    // Construct WhatsApp message
    const whatsappNumber = "573024788683"; // Placeholder number
    const text = `*Nuevo Mensaje de ChiquiCode*%0A%0A` +
      `*Nombre:* ${nombre}%0A` +
      `*Teléfono:* ${telefono}%0A` +
      `*Email:* ${email}%0A` +
      `*Motivo:* ${motivo}%0A` +
      `*Mensaje:* ${mensaje}`;

    window.open(`https://wa.me/${whatsappNumber}?text=${text}`, '_blank');

    // Limpiar campos automáticamente
    setFormData({
      nombre: '',
      telefono: '',
      email: '',
      motivo: '',
      mensaje: ''
    });

    // Mostrar aviso de envío
    setShowSuccess(true);
    setTimeout(() => setShowSuccess(false), 5000);
  };

  return (
    <section id="contacto" className="section-padding" style={{ backgroundColor: 'var(--primary-orange)', color: '#000', position: 'relative' }}>
      <div style={{
        maxWidth: '1400px',
        margin: '0 auto',
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
        gap: '60px'
      }}>
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="font-heading" style={{ fontSize: 'clamp(2.2rem, 6vw, 4.5rem)', marginBottom: '20px', lineHeight: 1 }}>
            ¿ESTÁS PREPARADO PARA <br /> <span style={{ color: 'var(--bg-black)' }}>EL CAMBIO?</span>
          </h2>
          <p style={{ fontSize: 'clamp(1.2rem, 4vw, 1.8rem)', fontWeight: 700, marginBottom: '40px' }}>
            Cuentanos sobre tu próximo proyecto tecnológico y nosotros lo haremos realidad.
          </p>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '25px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
              <div style={{ backgroundColor: '#000', padding: '10px', display: 'flex' }}>
                <WhatsAppIcon size={24} color="var(--primary-orange)" />
              </div>
              <span style={{ fontWeight: 900, fontSize: '1.1rem' }}>+57 302 478 8683</span>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
              <div style={{ backgroundColor: '#000', padding: '10px', display: 'flex' }}>
                <Mail size={24} color="var(--primary-orange)" />
              </div>
              <span style={{ fontWeight: 900, fontSize: '1.1rem' }}>INFOCHIQUICODE@GMAIL.COM</span>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
              <div style={{ backgroundColor: '#000', padding: '10px', display: 'flex' }}>
                <MapPin size={24} color="var(--primary-orange)" />
              </div>
              <span style={{ fontWeight: 900, fontSize: '1.1rem' }}>CHIQUINQUIRÁ, BOYACÁ, COLOMBIA</span>
            </div>
          </div>
        </motion.div>

        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '20px',
            backgroundColor: 'var(--bg-black)',
            padding: 'clamp(30px, 5vw, 60px)',
            boxShadow: '8px 8px 0px rgba(0,0,0,0.2)'
          }}
        >
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '20px' }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <label style={{ color: 'var(--text-white)', fontSize: '0.7rem', fontWeight: 900 }}>NOMBRE *</label>
              <input
                type="text"
                name="nombre"
                required
                value={formData.nombre}
                onChange={handleChange}
                style={inputStyle}
              />
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <label style={{ color: 'var(--text-white)', fontSize: '0.7rem', fontWeight: 900 }}>TELÉFONO *</label>
              <input
                type="tel"
                name="telefono"
                required
                value={formData.telefono}
                onChange={handleChange}
                style={inputStyle}
              />
            </div>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '20px' }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <label style={{ color: 'var(--text-white)', fontSize: '0.7rem', fontWeight: 900 }}>EMAIL *</label>
              <input
                type="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                style={inputStyle}
              />
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <label style={{ color: 'var(--text-white)', fontSize: '0.7rem', fontWeight: 900 }}>MOTIVO *</label>
              <input
                type="text"
                name="motivo"
                required
                placeholder="Ej: Desarrollo Web"
                value={formData.motivo}
                onChange={handleChange}
                style={inputStyle}
              />
            </div>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            <label style={{ color: 'var(--text-white)', fontSize: '0.7rem', fontWeight: 900 }}>MENSAJE *</label>
            <textarea
              name="mensaje"
              rows="4"
              required
              value={formData.mensaje}
              onChange={handleChange}
              style={{ ...inputStyle, resize: 'none' }}
            ></textarea>
          </div>

          <button type="submit" className="btn-street" style={{
            width: '100%',
            fontSize: '1.1rem',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '10px',
            marginTop: '10px',
            border: 'none' // Ensure no border issues
          }}>
            Enviar por WhatsApp <WhatsAppIcon size={22} />
          </button>


          {showSuccess && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              style={{
                backgroundColor: 'rgba(255, 140, 51, 0.1)',
                border: '1px solid var(--primary-orange)',
                padding: '15px',
                color: 'var(--primary-orange)',
                textAlign: 'center',
                fontWeight: 900,
                fontSize: '0.9rem',
                letterSpacing: '1px'
              }}
            >
              ¡MENSAJE ENVIADO! NOS CONTACTAREMOS PRONTO.
            </motion.div>
          )}
        </motion.form>
      </div>
    </section>
  );
};

const inputStyle = {
  padding: '15px',
  border: '2px solid var(--border-color)',
  backgroundColor: 'var(--bg-dark-gray)',
  color: 'var(--text-white)',
  fontSize: '1rem',
  fontWeight: 700,
  outline: 'none',
  width: '100%'
};

export default Contact;
