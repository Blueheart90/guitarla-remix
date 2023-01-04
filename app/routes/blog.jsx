import { useLoaderData } from '@remix-run/react';
import { getposts } from '~/models/post.server';
import Post from '~/components/post';
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
      <h2 className="heading">Blog</h2>
      <div className="blog">
        {posts.map((post) => (
          <Post key={post.id} post={post} />
        ))}
      </div>
    </main>
  );
}

export default Blog;
