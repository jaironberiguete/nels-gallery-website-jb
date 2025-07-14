import { useEffect, useState } from 'react';
import './Navbar.css';
// import './Navbar.css';

function Navbar() {
  const [active, setActive] = useState('home');
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Scroll listener for background change
  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleClick = (section) => {
    setActive(section);
    setIsOpen(false);
    const el = document.getElementById(section);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="navbar-logo">
        <img src="/images/logo.jpg" alt="Logo" />
        <span>NELS GALLERY</span>
      </div>

      <div className={`navbar-toggle ${isOpen ? 'open' : ''}`} onClick={() => setIsOpen(!isOpen)}>
        <div />
        <div />
        <div />
      </div>

      <ul className={`navbar-links ${isOpen ? 'open' : ''}`}>
        {['INICIO', 'SERVICIOS', 'GALERIA', 'CONTACTO', 'ACERCA DE'].map((item) => (
          <li key={item}>
            <a
              href={`#${item}`}
              onClick={(e) => {
                e.preventDefault();
                handleClick(item);
              }}
              className={active === item ? 'active' : ''}
            >
              {item.charAt(0).toUpperCase() + item.slice(1)}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Navbar;
