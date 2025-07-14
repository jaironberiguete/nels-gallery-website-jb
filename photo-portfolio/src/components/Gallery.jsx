import Masonry from 'react-masonry-css';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';
import './Gallery.css';
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
  ];

  
const breakpointColumnsObj = {
  default: 4,
  1100: 4,
  700: 3,
};

function Gallery() {
  return (
    <section id="GALERIA" className="gallery-section">
      <h2>GALERIA</h2>

      <PhotoProvider>
        <Masonry
          breakpointCols={breakpointColumnsObj}
          className="masonry-grid"
          columnClassName="masonry-column"
        >
          {images.map((src, idx) => (
            <PhotoView key={idx} src={src}>
              <div className="gallery-item">
                <img src={src} alt={`Gallery ${idx + 1}`} />
              </div>
            </PhotoView>
          ))}
        </Masonry>
      </PhotoProvider>
    </section>
  );
}

export default Gallery;