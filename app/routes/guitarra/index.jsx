import { useLoaderData } from '@remix-run/react';
import { getGuitars } from '~/models/guitars.server';
import GuitarList from '~/components/guitarList';

export function meta() {
  return {
    title: 'GuitarLA - Tienda de Guitarras',
    description: 'GuiarLA - Nuestra colección de guitarras',
  };
}

export async function loader() {
  const guitars = await getGuitars();
  return guitars.data;
}
function Tienda() {
  const guitars = useLoaderData();

  return <GuitarList guitars={guitars} />;
}

export default Tienda;
