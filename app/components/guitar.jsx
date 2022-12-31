import { Link } from '@remix-run/react';

function Guitar({ guitar }) {
  const { description, name, image, price, url } = guitar;

  return (
    <div className="guitarra">
      <img
        src={image.data.attributes.formats.medium.url}
        alt={`Imagen de guitarra ${name}`}
      />
      <div className="contenido">
        <h3>{name}</h3>
        <p className="descripcion">{description}</p>
        <p className="precio">${price}</p>
        <Link className="enlace" to={`/guitarra/${url}`}>
          Ver Producto
        </Link>
      </div>
    </div>
  );
}

export default Guitar;
