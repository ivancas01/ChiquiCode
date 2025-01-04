import { useState } from "react";

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    lastname: "",
    email: "",
    telephone: "",
    message: "",
  });

  const [message, setMessage] = useState(null); // Agregado el estado para mensajes

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage(null); // Reinicia el mensaje

    try {
      const response = await fetch("http://localhost:3000/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData), // Envía toda la data del formulario
      });

      const data = await response.json();

      if (response.ok) {
        setMessage({ type: "success", text: "¡Correo enviado exitosamente!" });
        setFormData({
          name: "",
          lastname: "",
          email: "",
          telephone: "",
          message: "",
        });

        // Espera 3 segundos antes de recargar la página
        setTimeout(() => {
          window.location.reload(); // Recarga la página
        }, 3000); // 3000 milisegundos = 3 segundos
      } else {
        setMessage({ type: "error", text: `Error: ${data.error}` });
      }
    } catch (error) {
      console.error("Error al enviar el correo:", error);
      setMessage({
        type: "error",
        text: "Ocurrió un error al enviar el correo. Inténtalo de nuevo más tarde.",
      });
    }
  };

  return (
    <>
      <div id="contactSection" className="contact">
        <div className="contactText">
          <h1 className="contactTextH1">¿TIENES UNA IDEA?</h1>
          <p className="contactTextP">¡Contáctanos!</p>
        </div>

        <div className="contactForm">
          <h1 className="contactFormH1">Formulario de contacto y cotización</h1>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              placeholder="Nombre"
              value={formData.name}
              onChange={handleChange}
            />
            <input
              type="text"
              name="lastname"
              placeholder="Apellido"
              value={formData.lastname}
              onChange={handleChange}
            />
            <input
              type="email"
              name="email"
              placeholder="Correo electrónico"
              value={formData.email}
              onChange={handleChange}
            />
            <input
              type="number"
              name="telephone"
              placeholder="Teléfono"
              value={formData.telephone}
              onChange={handleChange}
            />
            <textarea
              name="message"
              placeholder="Escríbenos toda la información detallada de tu proyecto (incluyendo tu presupuesto disponible)"
              value={formData.message}
              onChange={handleChange}
            ></textarea>
            <button className="buttonForm" type="submit">
              Enviar
            </button>
          </form>
        </div>
      </div>
      {message && (
        <div className={`message ${message.type}`}>{message.text}</div>
      )}
    </>
  );
};
