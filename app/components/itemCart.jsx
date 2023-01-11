import { useOutletContext } from '@remix-run/react';

function ItemCart({ item }) {
  const { updateCount, deleteItemCart } = useOutletContext();
  return (
    <div className="producto">
      <div>
        <img src={item.image} alt={`Imagen de la Guitarra ${item.name}`} />
      </div>
      <div>
        <p className="nombre">{item.name}</p>
        <p>Cantidad:</p>
        <select
          onChange={(e) => {
            updateCount({
              count: +e.target.value,
              id: item.id,
            });
          }}
          value={item.count}
          className="select"
        >
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
        </select>
        <p className="precio">
          $ <span>{item.price}</span>
        </p>
        <p className="subtotal">
          Subtotal: $ <span>{item.price * item.count}</span>
        </p>
      </div>
      <button
        type="button"
        className="btn_eliminar"
        onClick={() => {
          deleteItemCart(item.id);
        }}
      >
        X
      </button>
    </div>
  );
}

export default ItemCart;
