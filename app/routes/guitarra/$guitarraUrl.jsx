import { useLoaderData } from '@remix-run/react';
import { getGuitar } from '~/models/guitars.server';

export async function loader({ params }) {
  const { guitarraUrl } = params;
  const guitar = await getGuitar(guitarraUrl);
  if (guitar.data.length === 0) {
    throw new Response('', {
      status: 404,
      statusText: 'Guitarra no encontrada',
    });
  }
  return guitar;
}

// cuando el loader retorna algo al component, tendremos disponible data en el meta
export function meta({ data }) {
  if (!data) {
    return {
      title: 'GuitarLA - Guitarra no encontrada',
      description: 'Guitarras, venta de guitarras, guitarra no encontrada',
    };
  }
  return {
    title: `GuitarLA - ${data.data[0].attributes.name}`,
    description: `Guitarras, venta de guitarras, guitarra ${data.data[0].attributes.name}`,
  };
}

function GuitarraUrl() {
  const guitar = useLoaderData();
  const { name, description, price, image } = guitar.data[0].attributes;
  return (
    <div className="guitarra">
      <img
        src={image.data.attributes.url}
        alt={`Imagen de la guitarra ${name}`}
      />
      <div className="contenido">
        <h3>{name}</h3>
        <p className="texto">{description}</p>
        <p className="precio">${price}</p>
      </div>
    </div>
  );
}

export default GuitarraUrl;
