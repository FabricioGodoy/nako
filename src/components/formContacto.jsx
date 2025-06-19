import React, { useRef, useState } from 'react';
import './styles/formContacto.css';
import emailjs from 'emailjs-com';

export const FormContacto = () => {
  const form = useRef();
  const [status, setStatus] = useState('');

  const sendEmail = (e) => {
    e.preventDefault();

    // Validación simple
    const name = form.current.name.value.trim();
    const email = form.current.email.value.trim();
    const message = form.current.message.value.trim();
    /* const title = form.current.title.value.trim(); */

    if (!name || !email || !message) {
      setStatus('Por favor completá todos los campos.');
      return;
    }

    emailjs.sendForm(
      'service_e6iaaxb',        // ← Reemplazá con tu Service ID
      'template_4gofe1j',       // ← Reemplazá con tu Template ID
      form.current,
      'ok7RwcYFmxrYUi84R' // ← Reemplazá con tu Public Key (EmailJS)
    )
    .then(() => {
      setStatus('Mensaje enviado con éxito ✔️');
      form.current.reset();
    }, () => {
      setStatus('Hubo un error al enviar el mensaje ❌');
    });
  };

  return (
    <div className="form-container">
  <form ref={form} onSubmit={sendEmail}>
    <div className="form-group form-row-double">
      <input type="text" name="name" placeholder="Nombre" required />
      <input type="text" name="surname" placeholder="Apellido" required/>
    </div>
    <div className="form-group form-row-double">
      <input type="email" name="email" placeholder="Email" required/>
      <input type="number" name="celphone" placeholder="Telefono" />
    </div>

    <div className="form-group">
      <input type="text" name="nombreEmpresa" placeholder="Tipo y nombre de empresa" reqired/>
      <textarea name="message" placeholder="Mensaje" required/>
    </div>
    <input type="hidden" name="time" value={new Date().toLocaleString()} />
    <button type="submit">Enviar</button>
  </form>
  {status && <p className="status-message">{status}</p>}
</div>
  );
};


