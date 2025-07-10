function Hero() {
  return (
    <section className="hero">
  <div className="overlay-bg"></div> {/* This div holds the darkened background image */}
  <div className="overlay">
    <h1>La galería de tus mejores recuerdos</h1>
    <p>Fotografías profesionales que cuentan historias.</p>
    <a href="#gallery" className="cta-button">Ver Galería</a>
  </div>
</section>
  )
}

export default Hero
