import { useLoaderData } from '@remix-run/react';
import { getGuitars } from '~/models/guitars.server';
import { getposts } from '~/models/post.server';
import GuitarList from '~/components/guitarList';
import PostList from '~/components/postList';
import stylesGuitars from '~/styles/guitarras.css';
import stylesBlog from '~/styles/blog.css';

export function meta() {
  return {
    title: 'GuitarLA - Inicio',
    description: 'Pagina de guitarras, venta de guitarras',
  };
}

export function links() {
  return [
    { rel: 'stylesheet', href: stylesGuitars },
    { rel: 'stylesheet', href: stylesBlog },
  ];
}

export async function loader() {
  // realiza las consultas al mismo tiempo - mejor performance
  const [guitars, posts] = await Promise.all([getGuitars(), getposts()]);

  return { guitars: guitars.data, posts: posts.data };
}

function Index() {
  const { guitars, posts } = useLoaderData();

  return (
    <>
      <main className="contenedor">
        <GuitarList guitars={guitars} />
        <PostList posts={posts} />
      </main>
    </>
  );
}

export default Index;
