import './Contact.css';

function Contact() {
  return (
    <section id="CONTACTO" className="contact-section">
      <h2>CONTACTANOS</h2>
      <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
        <label>
          Nombre
          <input type="text" placeholder="Nombre Completo" required />
        </label>
        <label>
          Correo Electronico
          <input type="email" placeholder="tu@correo.com" required />
        </label>
        <label>
          Mensaje
          <textarea rows="5" placeholder="Escribe un mensaje..." required />
        </label>
        <button type="submit">Enviar Mensaje</button>
      </form>
    </section>
  );
}

export default Contact;
