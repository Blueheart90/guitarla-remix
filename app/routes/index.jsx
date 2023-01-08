import { useLoaderData } from '@remix-run/react';
import { getGuitars } from '~/models/guitars.server';
import { getposts } from '~/models/post.server';
import { getCourse } from '~/models/course.server';
import GuitarList from '~/components/guitarList';
import PostList from '~/components/postList';
import Course from '~/components/course';
import stylesGuitars from '~/styles/guitarras.css';
import stylesBlog from '~/styles/blog.css';
import stylesCourse from '~/styles/course.css';

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
    { rel: 'stylesheet', href: stylesCourse },
  ];
}

export async function loader() {
  // realiza las consultas al mismo tiempo - mejor performance
  const [guitars, posts, course] = await Promise.all([
    getGuitars(),
    getposts(),
    getCourse(),
  ]);

  return { guitars: guitars.data, posts: posts.data, course: course.data };
}

function Index() {
  const { guitars, posts, course } = useLoaderData();
  return (
    <>
      <main className="contenedor">
        <GuitarList guitars={guitars} />
      </main>
      <Course course={course.attributes} />
      <section className="contenedor">
        <PostList posts={posts} />
      </section>
    </>
  );
}

export default Index;
