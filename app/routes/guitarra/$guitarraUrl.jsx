import { useLoaderData } from '@remix-run/react';
import { getGuitar } from '~/models/guitars.server';
import styles from '~/styles/guitarras.css';

// cuando el loader retorna algo al component, tendremos disponible data en el meta
export function meta({ data }) {
  return {
    title: `GuitarLA - ${data.data[0].attributes.name}`,
    description: `Guitarras, venta de guitarras, guitarra ${data.data[0].attributes.name}`,
  };
}
export function links() {
  return [
    {
      rel: 'stylesheet',
      href: styles,
    },
  ];
}

export async function loader({ params }) {
  const { guitarraUrl } = params;
  const guitar = await getGuitar(guitarraUrl);
  return guitar;
}

function GuitarraUrl() {
  const guitar = useLoaderData();
  const { name, description, price, image } = guitar.data[0].attributes;
  return (
    <main className="contenedor guitarra">
      <img
        src={image.data.attributes.url}
        alt={`Imagen de la guitarra ${name}`}
      />
      <div className="contenido">
        <h3>{name}</h3>
        <p className="texto">{description}</p>
        <p className="precio">${price}</p>
      </div>
    </main>
  );
}

export default GuitarraUrl;
