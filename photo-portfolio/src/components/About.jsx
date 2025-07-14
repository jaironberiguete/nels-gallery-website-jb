import { FaInstagram, FaFacebookF, FaWhatsapp, FaLocationArrow} from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { RxDividerVertical } from "react-icons/rx";
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
        nuestro enfoque es siempre contar una historia en cada imagen y videos."
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
        <a href="" target="_blank" rel="noreferrer">
          <RxDividerVertical/>
        </a>
        <a href="" target="_blank" rel="noreferrer">
          <FaLocationDot/>
        </a>
        <h1>Barahona, RD.</h1>
      </div>
    </div>
  </div>
</section>
  )
}

export default About