import { Link, useLocation } from '@remix-run/react';
import cartImg from '../../public/img/carrito.png';
function Navegacion() {
  const location = useLocation();
  return (
    <nav className="navegacion">
      <Link to="/" className={location.pathname === '/' ? 'active' : ''}>
        Inicio
      </Link>
      <Link
        to="/nosotros"
        className={location.pathname === '/nosotros' ? 'active' : ''}
      >
        Nosotros
      </Link>
      <Link
        to="/guitarra"
        className={location.pathname === '/guitarra' ? 'active' : ''}
      >
        Tienda
      </Link>
      <Link
        to="/blog"
        className={location.pathname === '/blog' ? 'active' : ''}
      >
        Blog
      </Link>
      <Link to="/carrito">
        <img src={cartImg} alt="Carrito de compras" />
      </Link>
    </nav>
  );
}

export default Navegacion;
