function Gallery() {
  const images = [
    '/images/photo1.png',
    '/images/photo2.png',
    '/images/logo.jpg',
    '/images/photo4.jpg'
  ]

  return (
    <section className="gallery">
      {images.map((src, index) => (
        <img key={index} src={src} alt={`Photo ${index + 1}`} />
      ))}
    </section>
  )
}

export default Gallery