import { useState } from 'react';
import { useLoaderData, useOutletContext } from '@remix-run/react';
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
  const data = useOutletContext();
  console.log(data);
  const [count, setCount] = useState(0);

  const guitar = useLoaderData();
  const { name, description, price, image } = guitar.data[0].attributes;
  const handleSubmit = (e) => {
    e.preventDefault();
    if (count < 1) {
      alert('Debes seleccionar una cantidad');
      return;
    }
    const selectedGuitar = {
      id: guitar.data[0].id,
      image: image.data.attributes.url,
      name,
      price,
    };
    console.log(selectedGuitar);
  };
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
        <form onSubmit={handleSubmit} className="formulario">
          <label htmlFor="count">Cantidad</label>
          <select
            name="count"
            id="count"
            onChange={(e) => {
              setCount(+e.target.value);
            }}
          >
            <option value="">-- Seleccione --</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>
          <input type="submit" value="Agregar al carrito" />
        </form>
      </div>
    </div>
  );
}

export default GuitarraUrl;
