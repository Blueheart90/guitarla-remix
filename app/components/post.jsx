import { Link } from '@remix-run/react';
import { dateFormated } from '~/utils/helpers';

function Post({ post }) {
  const { title, content, image, url, publishedAt } = post.attributes;
  return (
    <article className="post">
      <img
        src={image.data.attributes.formats.small.url}
        alt={`Imagen del post ${title}`}
      />
      <div className="contenido">
        <h3>{title}</h3>
        <p className="fecha">{dateFormated(publishedAt)}</p>
        <p className="resumen">{content}</p>
        <Link className="enlace" to={`/post/${url}`}>
          Leer Post
        </Link>
      </div>
    </article>
  );
}

export default Post;
