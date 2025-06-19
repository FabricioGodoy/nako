import React from 'react'
import './styles/contenedorMapa.css';

export const ContenedorMapa = () => {
  return (
      <div className="mapContainer">
              <br/>
              <br/>
            <iframe
              width="80%"
              height="400"
             src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3282.123456789!2d-58.391508!3d-34.588426!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcb123456789ab%3A0xabcdef1234567890!2sPresidente%20Guido%201999%2C%20Buenos%20Aires%2C%20Argentina!5e0!3m2!1ses-419!2sar!4v1666067958555!5m2!1ses-419!2sar"
        frameBorder="0"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              title="Mapa de ubicación de nuestra empresa"
            ></iframe>
          </div>
  )
}
