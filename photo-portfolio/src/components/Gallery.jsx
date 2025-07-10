function Gallery() {
  const images = [
    '/images/photo1.jpg',
    '/images/photo31.jpg',
    '/images/photo2.jpg',
    '/images/photo15.jpg',
    '/images/photo9.jpg',
    '/images/photo10.jpg',
    '/images/photo11.jpg',
    '/images/photo12.jpg',
    '/images/photo14.jpg',
    '/images/photo17.jpg',
    '/images/photo19.jpg',
    '/images/photo22.jpg',
  ]

  return (
   <section id="gallery" className="gallery-section">
      <h2>GALERIA</h2>
      <div className="gallery-grid">
        {images.map((src, idx) => (
          <div key={idx} className="gallery-item">
            <img src={src} alt={`Gallery ${idx + 1}`} />
          </div>
        ))}
      </div>
    </section>
  )
}

export default Gallery