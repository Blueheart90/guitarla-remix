import { useLoaderData } from '@remix-run/react';
import { getGuitars } from '~/models/guitars.server';
import Guitar from '~/components/guitar';
import styles from '~/styles/guitarras.css';

export function meta() {
  return {
    title: 'GuitarLA - Tienda de Guitarras',
    description: 'GuiarLA - Nuestra colección de guitarras',
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

export async function loader() {
  const guitars = await getGuitars();
  return guitars.data;
}
function Tienda() {
  const guitars = useLoaderData();

  return (
    <main className="contenedor">
      <h2 className="heading">Nuestra Colección</h2>
      {guitars?.length && (
        <div className="guitarras-grid">
          {guitars.map((guitar) => (
            <Guitar guitar={guitar?.attributes} key={guitar?.id} />
          ))}
        </div>
      )}
    </main>
  );
}

export default Tienda;
