import { FaInstagram, FaFacebookF, FaWhatsapp } from "react-icons/fa";
import './About.css';
function About() {
  return (
    <section id="ACERCA DE" className="about-section">
  <h2 className="about-title">SOBRE NOSOTROS</h2>
  <div className="about-container">
    <div className="about-image">
      <img src="/images/photo26.jpg" alt="About" />
    </div>
    <div className="about-content">
      <p>
        "Somos una empresa de fotografía profesional dedicada a capturar momentos
        que duran para siempre. Ya sea una boda, un evento, o una sesión personal,
        nuestro enfoque es siempre contar una historia con cada imagen."
      </p>
      
      <div className="social-links">
        <a href="https://www.instagram.com/nelsgalleryrd" target="_blank" rel="noreferrer">
          <FaInstagram />
        </a>
        <a href="https://www.facebook.com/share/16iJbRQfu1/?mibextid=wwXIfr" target="_blank" rel="noreferrer">
          <FaFacebookF />
        </a>
        <a href="https://wa.me/18096739388" target="_blank" rel="noreferrer">
          <FaWhatsapp />
        </a>
      </div>
    </div>
  </div>
</section>
  )
}

export default About