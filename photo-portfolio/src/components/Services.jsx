import './Services.css';
import { FaCameraRetro, FaUserAlt, FaHeart, FaCalendarAlt, FaVideo } from "react-icons/fa";

function Services(){
  
  return(
<section id="SERVICIOS" className="services-section">
  <h2 className="section-title">SERVICIOS</h2>
  <a href="#CONTACTO" className="service-link">
    
  <div className="services-grid">
    <div className="service-card" href="#CONTACTO">
      <FaHeart size={40} color="#fff" className="service-icon" />
      <h3>Bodas</h3>
      <p>Capturamos cada momento especial de tu día más importante.</p>
    </div>

    <div className="service-card">
      <FaUserAlt size={40} color="#fff" className="service-icon" />
      <h3>Sesiones de Fotos</h3>
      <p>Retratos profesionales y personales que reflejan tu esencia.</p>
    </div>

    <div className="service-card">
      <FaCalendarAlt size={40} color="#fff" className="service-icon" />
      <h3>Eventos</h3>
      <p>Documentamos tus eventos con estilo y emoción.</p>
    </div>

    <div className="service-card">
      <FaVideo size={40} color="#fff" className="service-icon" />
      <h3>Videos</h3>
      <p>Videos de alta calidad con los mejores equipos y profesionales de la zona.</p>
    </div>
  </div>
  </a>
</section>
  )
}

export default Services;