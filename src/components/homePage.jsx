import React from 'react';
import { SobreNosotros } from '../components/sobreNosotros'
import { useEffect, useState } from 'react';
/* import { ContenedorMapa } from './contenedorMapa'; */
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
   /*  {
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
    }, */
    {
      title: 'EVENTOS DE CALIDAD',
      image: '../../img/iconos/chefCocina.png', 
      services: [
        'Cada evento es una oportunidad para crear algo único. Llevamos nuestra cocina de fuego allí donde estés, cuidando cada detalle para que la experiencia sea tan inolvidable como el sabor.',
        'Bodas y celebraciones especiales: Creamos propuestas gastronómicas a medida para acompañar uno de los días más importantes de tu vida. Un asado a fuego lento, carnes servidas en vivo, guarniciones frescas y sabores que emocionan, en un ambiente cálido, festivo y elegante.',
        'Cumpleaños y fiestas privadas: Ya sea un gran banquete o una comida íntima entre amigos, llevamos el fuego y el sabor donde tú quieras. Vos disfrutás, nosotros cocinamos en vivo, y todos se van hablando del menú.',
        'Bautizos y comuniones: Un momento especial en familia merece un catering que lo acompañe con el mismo cariño. Ofrecemos opciones para todos los públicos, incluyendo menús infantiles, platos vegetarianos y propuestas adaptadas.',
        'Eventos de empresa y team building: ¿Querés sorprender a tu equipo o a tus clientes? Organizamos parrilladas y showcookings en directo ideales para fomentar la conexión, disfrutar juntos y salir de lo habitual. El fuego es siempre un punto de encuentro.',
        'Cualquier excusa para celebrar: Porque no siempre hace falta una gran razón para reunirnos. Si tenés ganas de comer bien, compartir con los tuyos y vivir una experiencia diferente, armamos un plan a tu medida. Vos ponés la fecha, nosotros encendemos las brasas.'
      ]
    }/* ,
    {
      title: 'Servicios de consultoría integral',
      image: '../../img/iconos/trabajadores.png',
      services: [
        'Energética',
        'Ingeniería',
        'Medio ambiente',
        'EPC'
      ]
    } */
  ];
  const datosContacto = [
    {
      title: 'Tenemos base en la zona de Alicante, Benidorm y Altea.',
      image: 'https://img.icons8.com/external-tal-revivo-regular-tal-revivo/96/375f91/external-delivery-pin-for-parcel-delivery-location-making-delivery-regular-tal-revivo.png', 
      services: [
        'Cubrimos eventos en toda España.'
      ]
    }
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
     <div className="heroVideoContainer">
      <video className="heroVideo" autoPlay muted loop playsInline>
        <source src="../../vids/videonachito.mp4" type="video/mp4" />
        Tu navegador no soporta el video HTML5.
      </video>
      <div className="heroTextOverlay">
        <img src="../../img/logos/logoPNG.png" alt="Logo" className="heroLogo" />
        <h1 className="tituloFachero">FUEGOS Y BRASAS</h1>
        <h1>Catering de Asado</h1>
        <h2>Cocina de Fuegos en Vivo</h2>
      </div>
    </div>
<br/>
<br/>
<br/>
      
      <div className="carousel">
          <Intro />
        <div className="slides" style={{ transform: `translateX(-${currentSlide * 100}vw)` }}>

          <div className="slide active">
            <img src="../../img/carrousel/ingnacho.jpg" alt="Caños de día" />
            <div className="textOverlay">
            {/*   <h2 className="slideTitle">Distribución de Energía</h2> */}
            </div>
          </div>
          <div className="slide">
            <img src="../../img/carrousel/ingnacho2.jpg" alt="Planta VME" />
            <div className="textOverlay">
              {/* <h2 className="slideTitle">Procesamiento de Gas Natural</h2> */}
            </div>
          </div>
          <div className="slide">
            <img src="../../img/carrousel/ingnacho3.jpg" alt="Caños de noche" />
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
      <a href="https://wa.me/+34662021515"  className="btn-flotante" target="_blank" rel="noopener noreferrer">
        <img src="https://img.icons8.com/office/40/whatsapp--v1.png" alt="wpp"></img>
      </a>
      <br/>
      <br/>
    {/*   <ContenedorMapa /> */}
    </div>
  );
};
