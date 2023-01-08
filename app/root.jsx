import {
  Meta,
  Links,
  Outlet,
  Scripts,
  LiveReload,
  useCatch,
  Link,
} from '@remix-run/react';
import styles from '~/styles/index.css';
import Header from '~/components/header';
import Footer from '~/components/footer';

export function meta() {
  return {
    charset: 'UTF-8',
    title: 'GuitarLA - Remix',
    description: 'Pagina de venta de guitaras',
    viewport: 'width=device-width, initial-scale=1.0',
  };
}
export function links() {
  return [
    {
      rel: 'stylesheet',
      href: 'https://necolas.github.io/normalize.css/8.0.1/normalize.css',
    },
    {
      rel: 'preconnect',
      href: 'https://fonts.googleapis.com',
    },
    {
      rel: 'preconnect',
      href: 'https://fonts.gstatic.com',
      crossOrigin: 'true',
    },
    {
      rel: 'stylesheet',
      href: 'https://fonts.googleapis.com/css2?family=Outfit:wght@400;700;900&display=swap',
    },
    {
      rel: 'stylesheet',
      href: styles,
    },
  ];
}
export default function App() {
  return (
    <Document>
      <Outlet
        context={{
          guitarLa: 'GuitarLA',
        }}
      />
    </Document>
  );
}

function Document({ children }) {
  return (
    <html lang="en">
      <head>
        <Meta />
        <Links />
      </head>
      <body>
        <Header />
        {children}
        <Scripts />
        <LiveReload />
        <Footer />
      </body>
    </html>
  );
}

// Manejo de errores

// Se ejecuta cuando creamos un excepcion
export function CatchBoundary() {
  const caught = useCatch();
  return (
    <Document>
      <p className="error">
        {caught.status} {caught.statusText}
      </p>
      <Link className="error-enlace" to="/">
        Volver al inicio
      </Link>
    </Document>
  );
}

// cuando el propio remix atrapa un error
export function ErrorBoundary({ error }) {
  return (
    <Document>
      <p className="error">
        {error.status} {error.statusText}
      </p>
      <Link className="error-enlace" to="/">
        Volver al inicio
      </Link>
    </Document>
  );
}
