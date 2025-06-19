import React from 'react';
import './styles/novedades.css';

export const Novedades = () => {
  return (
    <section className="novedades-section" id='novedades'>
    {/*   <h1>Novedades</h1> */}
      <div className="novedades-list">
        <article className="novedad">
          <h2><a href="#novedad1">Notas relevantes</a></h2>
          <p>Inauguramos nuestra nueva planta de procesamiento en Neuquén. Conocé más sobre esta expansión estratégica.</p>
        </article>

        <article className="novedad">
          <h2><a href="#novedad2">Información de mercado</a></h2>
          <p>Ya está disponible el informe Q2 2025 con análisis del mercado energético nacional e internacional.</p>
        </article>

        <article className="novedad">
          <h2><a href="#novedad3">Posteos a LinkedIn</a></h2>
          <p>Sumamos un equipo especializado en gestión ambiental para nuestros clientes industriales.</p>
        </article>
      </div>
    </section>
  );
};
