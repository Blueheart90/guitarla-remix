import { Outlet } from '@remix-run/react';
import styles from '~/styles/blog.css';

export function meta() {
  return {
    title: 'GuitarLA - Nuestro Blog',
    description: 'GuitarLA, Blog de música y venta de guitarras',
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

function Blog() {
  return <Outlet />;
}

export default Blog;
