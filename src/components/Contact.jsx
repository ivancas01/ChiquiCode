import { useState } from "react";

export const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        lastname: '',
        email: '',
        telephone: '',
        message: ''
    });
    
    const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí puedes enviar los datos del formulario al servidor
    console.log(formData);
    };

    return (
        <div id="contactSection" className="contact">
            <div className="contactText">
                <h1 className="contactTextH1">¿TIENES UNA IDEA?</h1>
                <p className="contactTextP">¡Contactanos!</p>
            </div>
           
            <div className="contactForm">
                <h1 className="contactFormH1">Formulario de contacto y cotización</h1>
                <form onSubmit={handleSubmit} >
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
                        placeholder="Telefono"
                        value={formData.telephone}
                        onChange={handleChange}
                    />
                    <textarea
                        name="message"
                        placeholder="Escribenos toda la informacion detallada de tu proyecto (Incluyendo tu presupuesto disponible)"
                        value={formData.message}
                        onChange={handleChange}
                    >
                    </textarea>
                    <button className="buttonForm" type="submit">Enviar</button>
                </form>
            </div>
        </div>
    
    );
}
