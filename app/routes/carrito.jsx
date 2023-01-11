import { useState, useEffect } from 'react';
import { useOutletContext } from '@remix-run/react';
import { ClientOnly } from 'remix-utils';
import ItemCart from '~/components/itemCart';
import styles from '~/styles/carrito.css';

export function links() {
  return [
    {
      rel: 'stylesheet',
      href: styles,
    },
  ];
}

export function meta() {
  return {
    title: 'GuitarLA - Carrito de Compras',
    description: 'Venta de guitarras, música, blog, carrito de compras, tienda',
  };
}
function Carrito() {
  const [total, setTotal] = useState(0);
  const { cart } = useOutletContext();

  useEffect(() => {
    const totalCal = cart.reduce(
      (total, item) => total + item.count * item.price,
      0
    );
    setTotal(totalCal);
  }, [cart]);
  return (
    <ClientOnly fallback={'cargando...'}>
      {() => (
        <main className="contenedor">
          <h1 className="heading">Carrito de Compras</h1>
          <div className="contenido">
            <div className="carrito">
              <h2>Articulos</h2>
              {cart?.length === 0
                ? 'Carrito vacio'
                : cart?.map((item) => <ItemCart item={item} key={item.id} />)}
            </div>
            <aside className="resumen">
              <h3>Resumen del Pedido</h3>
              <p>Total a pagar: ${total}</p>
            </aside>
          </div>
        </main>
      )}
    </ClientOnly>
  );
}

export default Carrito;
