import './Hero.css';

function Hero() {
  return (
  <section id="INICIO" className="hero">
  <div className="overlay-bg"></div> {/* This div holds the darkened background image */}
  <div className="overlay">
    <h1>LA GALERIA </h1>
    <p>De tus mejores recuerdos.</p>
    <a href="#gallery" className="cta-button">CONTRATANOS</a>
  </div>
</section>


  )
}

export default Hero
