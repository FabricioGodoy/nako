import React from 'react';
import './styles/novedades.css';

export const Novedades = () => {
  return (
    <section className="novedades-section" id='novedades'>
    {/*   <h1>Novedades</h1> */}
      <div className="novedades-list">
        <article className="novedad">
          <h2><a href="#novedad1">ENTRANTES QUE SORPRENDEN</a></h2>
          <p>
            Hacemos que tu aperitivo de bienvenida sea inolvidable.
          <br/>
            Ofrecemos una cuidada selección de entrantes, pensados para abrir el apetito y marcar el tono del encuentro. Sabores auténticos, productos frescos y una puesta en escena cálida y natural que invita a compartir.
          </p>
        </article>

        <article className="novedad">
          <h2><a href="#novedad2">INFRAESTRUCTURA MÓVIL</a></h2>
          <p>
            Contamos con todo lo necesario para llevar el fuego a donde vos estés.
          <br/>
            Parrillas, hornos a leña, cruces y cajas para encender fuego, junto con leña y equipamiento completo para nuestra cocina. Nuestra infraestructura móvil nos permite ser totalmente autónomos y adaptarnos a los entornos más diversos, desde eventos al aire libre hasta locaciones remotas.
          </p>
        </article>

        <article className="novedad">
          <h2><a href="#novedad3">COCINEROS</a></h2>
          <p>
            Un equipo de cocineros apasionados, con amplia experiencia frente al fuego.
          <br/>
            Nuestros asadores han perfeccionado su arte en Argentina, Italia, Austria y España, fusionando técnicas tradicionales con creatividad y respeto por el producto. La dedicación, la práctica y el amor por la cocina se sienten en cada bocado.
          </p>
        </article>
      </div>
    </section>
  );
};
