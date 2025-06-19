import React from 'react';
import { SobreNosotros } from '../components/sobreNosotros'
import { useEffect, useState } from 'react';
import { ContenedorMapa } from './contenedorMapa';
import { FormContacto } from './formContacto';
import { Intro } from './intro';
import { Novedades } from './novedades';


// Componente individual para cada servicio
const ServiceCard = ({ title, services, image }) => (
  <div className="divArticle">
    <img width="80" height="80" src={image} alt={title} />
    <h3>{title}</h3>
    <ul>
      {services.map((service, index) => (
        <li key={index}>{service}</li>
      ))}
    </ul>
  </div>
);

const ServiceCard2 = ({ title, services, image }) => (
  <div className="divArticle2">
    <img width="80" height="80" src={image} alt={title} />
    <h3>{title}</h3>
    <ul>
      {services.map((service, index) => {
        // Definir enlaces condicionales según el título
        let link;
        if (title === 'Correo electrónico') {
          link = `mailto:${service}`;
        } else if (title === 'Teléfono') {
          link = `tel:${service}`;
        } else if (title === 'Domicilio') {
          link = 'https://maps.app.goo.gl/8gFQdGMof8tgjSu9A';
        }
        return (
          <li key={index}>
            {link ? (
              <a href={link} target="_blank" rel="noopener noreferrer" style={{ color: 'inherit', textDecoration: 'none'}}>
                {service}
              </a>
              ) : (
                service
              )}
          </li>
        );
      })}
    </ul>
  </div>
);


export const HomePage = () => {
  const servicesData = [
    {
      title: 'Comercialización de Gas Natural',
      image: '../../img/iconos/genteReunida.jpg', 
      services: [
        <>
          Abastecimiento seguro, a medida y confiable de gas natural
          <br />
          <br />
          Por nuestros contactos dentro del mercado, contamos con diversidad de productores quienes nos abastecen gas natural de todas las cuencas, manteniendo una cartera variada para asegurar el abastecimiento en todo momento de las necesidades de nuestros clientes.  
          <br />
          <br />
          Vendemos gas natural a usuarios industriales, estaciones de GNC, comercios, y los asesoramos a medida de sus necesidades, buscando el mayor beneficio para el cliente. El objetivo siempre está en conseguir las mejores condiciones, desde las condiciones comerciales hasta el mejor momento adecuado para la contratación.
          <br/>
          <br/>
          Asimismo, participamos activamente del mercado SPOT diario, semanal y mensual para llevar alternativas a nuestros clientes y otros actores de la industria, buscando la eficiencia y menores costos.


        </>
      ]
    },
    {
      title: 'Comercialización de Energía Eléctrica',
      image: '../../img/iconos/lamparaReciclar.jpg', 
      services: [
        <>
          Participamos en el mercado eléctrico, nuestra experiencia nos permite acercarle a los clientes una propuesta de abastecimiento de energía renovable y asesoramiento respecto a los proyectos renovables que puedan significar un paso adelante en cuanto a sustentabilidad, y ahorros de costos futuros.
        </>
      ]
    },
    {
      title: 'Servicios de comercialización y despacho',
      image: '../../img/iconos/rayoEngranaje.jpg', 
      services: [
        'Para productores.',
        'Para consumidores industriales.',
        'Brindamos servicios de comercialización y despacho a productores y consumidores industriales, de modo tal de asegurar la correcta asignación de volúmenes y evitar cortes o multas por desbalances o incumplimientos regulatorios.'
      ]
    },
    {
      title: 'Servicios de consultoría integral',
      image: '../../img/iconos/trabajadores.png',
      services: [
        'Energética',
        'Ingeniería',
        'Medio ambiente',
        'EPC'
      ]
    }
  ];
  const datosContacto = [
    {
      title: 'Domicilio',
      image: 'https://img.icons8.com/external-tal-revivo-regular-tal-revivo/96/375f91/external-delivery-pin-for-parcel-delivery-location-making-delivery-regular-tal-revivo.png', 
      services: [
        'Presidente Guido 1999, Buenos Aires (1119) Argentina'
      ]
    },
    {
      title: 'Días y horarios de atención',
      image: 'https://img.icons8.com/ios/100/375f91/clock--v1.png', 
      services: [
        'Lunes a Viernes de 14:00hs a 18:30hs'
      ]
    },
  ] 

const [currentSlide, setCurrentSlide] = useState(0);

useEffect(() => {
  const interval = setInterval(() => {
    setCurrentSlide((prev) => (prev + 1) % 3); // 3 slides
  }, 5000); // cambia cada 5 segundos
  return () => clearInterval(interval);
}, []);

  return (
    <div className='contenedorPadreHomePage'>
      <div className="carousel">
          <Intro />
        <div className="slides" style={{ transform: `translateX(-${currentSlide * 100}vw)` }}>

          <div className="slide active">
            <img src="../../img/carrousel/canosDia.png" alt="Caños de día" />
            <div className="textOverlay">
            {/*   <h2 className="slideTitle">Distribución de Energía</h2> */}
            </div>
          </div>
          <div className="slide">
            <img src="../../img/carrousel/plantaVME.png" alt="Planta VME" />
            <div className="textOverlay">
              {/* <h2 className="slideTitle">Procesamiento de Gas Natural</h2> */}
            </div>
          </div>
          <div className="slide">
            <img src="../../img/carrousel/canosNoche.png" alt="Caños de noche" />
            <div className="textOverlay">
              {/* <h2 className="slideTitle">Conectividad Nocturna</h2> */}
            </div>
          </div>
        </div>
      </div>

<br/>



      
      <h2  id='servicios' className='typingTitle'>SERVICIOS</h2>
      <div className='ordenarArticle'>
        {servicesData.map((service, index) => (
          <ServiceCard
            key={index}
            title={service.title}
            services={service.services}
            image={service.image} 
          />
        ))}
      </div>
      <br/>
      <br/>
          <SobreNosotros />

          <br/>
          <br/>
            <h1 className='NovedadesTitulo'>Novedades</h1>
          <Novedades />

      <h2  id='contactos' className='typingTitle'>Contacto</h2>
      <div className='ordenarArticle2'>
        {datosContacto.map((service, index) => (
          <ServiceCard2
          key={index}
          title={service.title}
          services={service.services}
            image={service.image} 
          />
        ))}
          <FormContacto />
      </div>
      <br/>
      <br/>

      <br/>
      <a href="https://wa.me/+5491152632378" className="btn-flotante" target="_blank" rel="noopener noreferrer">
        <img src="https://img.icons8.com/office/40/whatsapp--v1.png" alt="wpp"></img>
      </a>
      <br/>
      <br/>
      <ContenedorMapa />
    </div>
  );
};
