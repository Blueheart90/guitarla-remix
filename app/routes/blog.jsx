import { useLoaderData } from '@remix-run/react';
import { getposts } from '~/models/post.server';
import PostList from '~/components/postList';
import styles from '~/styles/blog.css';

export async function loader() {
  const posts = await getposts();
  return posts.data;
}

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
  const posts = useLoaderData();
  return (
    <main className="contenedor">
      <PostList posts={posts} />
    </main>
  );
}

export default Blog;
