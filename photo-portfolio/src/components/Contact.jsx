import React, { useRef } from 'react';
import './Contact.css';
import emailjs from "@emailjs/browser";

function Contact() {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    console.log("Sending email with:");
console.log("Service ID:", import.meta.env.VITE_EMAILJS_SERVICE_ID);
console.log("Template ID:", import.meta.env.VITE_EMAILJS_TEMPLATE_ID);
console.log("Public Key:", import.meta.env.VITE_EMAILJS_PUBLIC_KEY);
console.log("Form ref:", form.current);

    emailjs.sendForm(
         import.meta.env.VITE_EMAILJS_SERVICE_ID,
         import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
         form.current,
         import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(
        (result) => {
          alert("Message sent successfully!");
          console.log(result.text);
          form.current.reset();

        },
        (error) => {
          alert("Failed to send message.");
          console.error(error.text);
        }
      );
  };

  return (
    <section id="CONTACTO" className="contact-section">
      <h2>CONTACTANOS</h2>
      <form ref={form} className="contact-form" onSubmit={sendEmail}>
        <label>
          Nombre
          <input type="text" name="user_name" placeholder="Nombre Completo" required />
        </label>
        <label>
          Correo Electronico
          <input type="email" name="user_email" placeholder="ejemplo@correo.com" required />
        </label>
        <label>
          Mensaje
          <textarea  name="message" rows="5" placeholder="Escribe un mensaje..." required />
        </label>
        <button type="submit">Enviar Mensaje</button>
      </form>
    </section>
  );
}

export default Contact;
