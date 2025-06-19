/* import React from 'react';
import './styles/intro.css';

export const Intro = () => {
  return (
    <div className="intro-container">
        <p>Lanzamos Vaca Muerta Energy S.A., una comercializadora de gas natural y energía eléctrica, que surge como un nuevo negocio en asociación entre el “Grupo Multipiping” y profesionales de la industria con más de 20 años en el mercado de la comercialización de gas natural, transporte y energía eléctrica. </p>

        <br/>

        <p>Entendemos el mercado energético y sus variables, y tomamos el compromiso de llevar a nuestros clientes al máximo nivel en cuanto a información para su toma de decisiones respecto a la contratación de sus insumos energéticos. Nuestro compromiso es brindar un servicio integral, tanto desde el abastecimiento a la mejor tarifa del mercado, como a un asesoramiento continuo respecto al mercado energético, y asesoramientos de ingeniería y medioambientales, de forma tal de maximizar ahorros de costos y de mitigación del impacto ambiental de sus procesos.</p>
    </div>
  )
}
 */

// Intro.jsx
import React from 'react';
import './styles/intro.css';

export const Intro = () => {
  return (
    <div className="intro-overlay">
      <div className="intro-content">
        <p>
          Lanzamos Vaca Muerta Energy S.A., una comercializadora de gas natural y energía eléctrica, que surge como un nuevo negocio en asociación entre el “Grupo Multipiping” y profesionales de la industria con más de 20 años en el mercado de la comercialización de gas natural, transporte y energía eléctrica.
        </p>
        <p>
          Entendemos el mercado energético y sus variables, y tomamos el compromiso de llevar a nuestros clientes al máximo nivel en cuanto a información para su toma de decisiones respecto a la contratación de sus insumos energéticos. Nuestro compromiso es brindar un servicio integral, tanto desde el abastecimiento a la mejor tarifa del mercado, como a un asesoramiento continuo respecto al mercado energético, y asesoramientos de ingeniería y medioambientales, de forma tal de maximizar ahorros de costos y de mitigación del impacto ambiental de sus procesos.
        </p>
      </div>
    </div>
  );
};
