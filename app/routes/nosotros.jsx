import imagen from '../../public/img/nosotros.jpg';
import styles from '~/styles/nosotros.css';

export function meta() {
  return {
    title: 'GuitarLA - Sobre Nosotros',
  };
}

export function links() {
  return [
    { rel: 'stylesheet', href: styles },
    { rel: 'preload', href: imagen, as: 'image' },
  ];
}
function Nosotros() {
  return (
    <main className="contenedor nosotros">
      <h2 className="heading">Nosotros</h2>
      <div className="contenido">
        <img src={imagen} alt="Imagen sobre nosotros" />
        <div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. In ornare
            dolor mi, quis malesuada magna accumsan non. Ut mauris sem,
            consectetur eget sapien sed, commodo consectetur enim. Pellentesque
            facilisis sapien eget mi mollis, sit amet pellentesque velit tempor.
            Ut vestibulum eros eget blandit malesuada. Praesent ante velit,
            scelerisque ut ullamcorper at, feugiat id sem. Ut ut odio pulvinar
            turpis lobortis dictum non id sapien. Curabitur mattis ac dui et
            commodo. Morbi enim eros, semper ut ultricies at, consequat
            vestibulum orci. Curabitur faucibus sem laoreet sodales vulputate.
            Aliquam efficitur mollis elit, eu mattis sem placerat a. Nullam
            bibendum mattis mauris a dapibus. Duis vitae felis hendrerit,
            ullamcorper tellus a, condimentum eros. Sed non mi eget erat dapibus
            mollis.
          </p>
          <p>
            Phasellus fringilla, arcu eget ultricies euismod, nibh turpis semper
            massa, ut laoreet mi lacus ut massa. Nullam ultricies, sapien et
            eleifend fermentum, ante felis mattis elit, non dictum tortor massa
            vel libero. Sed accumsan quis purus eu iaculis. Integer erat ipsum,
            vestibulum eget ullamcorper quis, pharetra eget lectus. Duis quis
            eros id orci imperdiet convallis nec et enim. Donec in felis tellus.
            Quisque congue volutpat fermentum. Proin id sapien mauris. In ut
            condimentum magna, ut mattis risus. Vivamus mattis convallis massa
            vitae tincidunt. Maecenas tempus erat et diam sagittis vulputate non
            in orci. Cras iaculis purus eget arcu ullamcorper tincidunt. Sed
            turpis nibh, dignissim sed rutrum ac, ornare sit amet ex. Praesent
            aliquam, nisl vitae congue sodales, nisl sapien tristique purus, eu
            vehicula massa quam ut quam. Aliquam erat volutpat. Vivamus ultrices
            turpis vitae laoreet maximus.
          </p>
        </div>
      </div>
    </main>
  );
}

export default Nosotros;
