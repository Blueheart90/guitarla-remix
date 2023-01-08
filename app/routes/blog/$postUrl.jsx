import { useLoaderData } from '@remix-run/react';
import { getPost } from '~/models/post.server';
import styles from '~/styles/blog.css';
import { dateFormated } from '~/utils/helpers';

export async function loader({ params }) {
  const post = await getPost(params.postUrl);
  if (post.data.length === 0) {
    throw new Response('', {
      status: 404,
      statusText: 'Post no encontrado',
    });
  }
  return post;
}

export function meta({ data }) {
  if (!data) {
    return {
      title: 'GuitarLA - Post no encontrado',
      description: 'Guitarras, venta de guitarras, post no encontrada',
    };
  }
  return {
    title: `GuitarLA - ${data.data[0].attributes.title}`,
    description: `Guitarras, venta de guitarras, guitarra ${data.data[0].attributes.title}`,
  };
}

function $postUrl() {
  const post = useLoaderData();
  const { title, content, publishedAt, image } = post.data[0].attributes;
  return (
    <article className="contenedor post mt-3">
      <img src={image.data.attributes.url} alt={`Imagen del post ${title}`} />
      <div className="contenido">
        <h3>{title}</h3>
        <p className="fecha">{dateFormated(publishedAt)}</p>
        <p className="texto">{content}</p>
      </div>
    </article>
  );
}

export default $postUrl;
