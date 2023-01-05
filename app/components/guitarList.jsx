import Guitar from './guitar';

function GuitarList({ guitars }) {
  return (
    <>
      <h2 className="heading">Nuestra Colección</h2>
      {guitars?.length && (
        <div className="guitarras-grid">
          {guitars.map((guitar) => (
            <Guitar guitar={guitar?.attributes} key={guitar?.id} />
          ))}
        </div>
      )}
    </>
  );
}

export default GuitarList;
